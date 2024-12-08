document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    // FullCalendar 초기화
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ko',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay' // 기존에 있던 right 부분 그대로
        },
        events: function (info, successCallback, failureCallback) {
            fetchExamSchedules(info.startStr, info.endStr, successCallback, failureCallback);
        },
        eventContent: function (arg) {
            const title = arg.event.title || '';
            const dateRange = arg.event.extendedProps.dateRange || '';
            return {
                html: `<div style="color: white; text-align: center; font-size: 12px;">${title}<br>${dateRange}</div>`,
            };
        }
    });

    calendar.render();

    // API 호출 함수
    function fetchExamSchedules(startStr, endStr, successCallback, failureCallback) {
        $.ajax({
            url: 'https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList',
            data: {
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE+D4ffB3SmCH4VqDihRDB/NR8RmbluUBQL+o10w==',
                numOfRows: 50, // 최대 50개까지 조회
                pageNo: 1,
                dataFormat: 'json',
                implYy: 2024,
                qualgbCd: 'T'
            },
            dataType: 'json',
            success: function (data) {
                console.log("API 호출 성공:", data); // 응답 데이터 확인
                if (data && data.body && data.body.items) {
                    var events = parseScheduleData(data.body.items);
                    successCallback(events); // 모든 일정 반환
                } else {
                    console.error("응답 데이터 형식이 예상과 다릅니다.", data); // 데이터 형식 오류 처리
                    failureCallback("Invalid data format");
                }
            },
            error: function (error) {
                console.error("API 호출 실패:", error);
                failureCallback(error);
            }
        });
    }

    // 일정 데이터 변환 및 그룹화
    function parseScheduleData(items) {
        var events = [];
        var uniqueEvents = new Set();

        items.forEach(function (item) {
            let group = ''; // 기본 그룹은 빈 값으로 설정

            // description을 기준으로 그룹화 (기능사 제외)
            if (item.description.includes('기술사')) {
                group = '기술사';
            } else if (item.description.includes('기사')) {
                group = '기사,산업기사';
            } else if (item.description.includes('기능장')) {
                group = '기능장';
            }

            // 기능사 일정 제외
            if (group === '') return;

            // 필기 원서 접수
            if (item.docRegStartDt && item.docRegEndDt) {
                const eventKey = `필기 원서접수-${item.docRegStartDt}-${item.docRegEndDt}-${group}`;
                if (!uniqueEvents.has(eventKey)) {
                    uniqueEvents.add(eventKey);
                    events.push({
                        title: `${group} 필기 원서접수`, // 시험명 추가
                        start: formatDate(item.docRegStartDt),
                        end: formatDate(item.docRegEndDt),
                        group: group,
                        color: getColorForGroup(group),
                        dateRange: `${formatDate(item.docRegStartDt)} ~ ${formatDate(item.docRegEndDt)}`
                    });
                }
            }
            // 필기 시험
            if (item.docExamStartDt && item.docExamEndDt) {
                const eventKey = `필기 시험-${item.docExamStartDt}-${item.docExamEndDt}-${group}`;
                if (!uniqueEvents.has(eventKey)) {
                    uniqueEvents.add(eventKey);
                    events.push({
                        title: `${group} 필기 시험`, // 시험명 추가
                        start: formatDate(item.docExamStartDt),
                        end: formatDate(item.docExamEndDt),
                        group: group,
                        color: getColorForGroup(group),
                        dateRange: `${formatDate(item.docExamStartDt)} ~ ${formatDate(item.docExamEndDt)}`
                    });
                }
            }
            // 실기 원서 접수
            if (item.pracRegStartDt && item.pracRegEndDt) {
                const eventKey = `실기 원서접수-${item.pracRegStartDt}-${item.pracRegEndDt}-${group}`;
                if (!uniqueEvents.has(eventKey)) {
                    uniqueEvents.add(eventKey);
                    events.push({
                        title: `${group} 실기 원서접수`, // 시험명 추가
                        start: formatDate(item.pracRegStartDt),
                        end: formatDate(item.pracRegEndDt),
                        group: group,
                        color: getColorForGroup(group),
                        dateRange: `${formatDate(item.pracRegStartDt)} ~ ${formatDate(item.pracRegEndDt)}`
                    });
                }
            }
            // 실기 시험
            if (item.pracExamStartDt && item.pracExamEndDt) {
                const eventKey = `실기 시험-${item.pracExamStartDt}-${item.pracExamEndDt}-${group}`;
                if (!uniqueEvents.has(eventKey)) {
                    uniqueEvents.add(eventKey);
                    events.push({
                        title: `${group} 실기 시험`, // 시험명 추가
                        start: formatDate(item.pracExamStartDt),
                        end: formatDate(item.pracExamEndDt),
                        group: group,
                        color: getColorForGroup(group),
                        dateRange: `${formatDate(item.pracExamStartDt)} ~ ${formatDate(item.pracExamEndDt)}`
                    });
                }
            }
            // 실기 합격 발표
            if (item.pracPassDt) {
                const eventKey = `실기 합격 발표-${item.pracPassDt}-${group}`;
                if (!uniqueEvents.has(eventKey)) {
                    uniqueEvents.add(eventKey);
                    events.push({
                        title: `${group} 실기 합격 발표`, // 시험명 추가
                        start: formatDate(item.pracPassDt),
                        group: group,
                        color: getColorForGroup(group),
                        dateRange: formatDate(item.pracPassDt)
                    });
                }
            }
        });

        return events;
    }

    // 그룹에 맞는 색상 반환
    function getColorForGroup(group) {
        switch (group) {
            case '기사,산업기사':
                return '#1976D2'; // 파랑
            case '기술사':
                return '#4CAF50'; // 초록
            case '기능장':
                return '#FF9800'; // 노랑
            default:
                return '#9E9E9E'; // 기본 색상 (회색)
        }
    }

    // 날짜 형식 변환 함수
    function formatDate(dateStr) {
        if (dateStr) {
            return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
        }
        return null;
    }
});
