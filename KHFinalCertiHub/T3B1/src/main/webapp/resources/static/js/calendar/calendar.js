document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    // FullCalendar 초기화
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ko',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        events: function (info, successCallback, failureCallback) {
            // 정보처리기사 일정 가져오기
            fetchExamSchedules('EIP', info.startStr, info.endStr, successCallback, failureCallback);
        },
        eventContent: function (arg) {
            // 한 줄로 표시되도록 이벤트 텍스트 커스터마이즈
            return { html: `<div style="color: white; text-align: center;">${arg.event.title}</div>` };
        }
    });

    calendar.render();

    // 일정 데이터 API 호출 함수
    function fetchExamSchedules(certType, startStr, endStr, successCallback, failureCallback) {
        var jmCd = getJmCd(certType);

        $.ajax({
            url: 'https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList',
            data: {
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE+D4ffB3SmCH4VqDihRDB/NR8RmbluUBQL+o10w==',
                numOfRows: 20,
                pageNo: 1,
                dataFormat: 'json',
                implYy: 2024,
                qualgbCd: 'T',
                jmCd: jmCd
            },
            dataType: 'json',
            success: function (data) {
                console.log("API 호출 성공:", data);

                // 일정 데이터 파싱 및 FullCalendar 이벤트 추가
                var events = parseScheduleData(data);
                successCallback(events);
            },
            error: function (error) {
                console.error("API 호출 실패:", error);
                failureCallback(error);
            }
        });
    }

    // 자격증 코드 반환 함수
    function getJmCd(certType) {
        switch (certType) {
            case 'EIP': return '1320'; // 정보처리기사
            default: return '1320';
        }
    }

    // 일정 데이터를 FullCalendar 이벤트 형식으로 변환
    function parseScheduleData(data) {
        var events = [];

        if (data && data.body && data.body.items) {
            var items = data.body.items;

            items.forEach(function (item) {
                // 필기시험 원서접수 기간
                if (item.docRegStartDt && item.docRegEndDt) {
                    events.push({
                        title: `필기 원서접수(${formatDate(item.docRegStartDt)} ~ ${formatDate(item.docRegEndDt)})`,
                        start: formatDate(item.docRegStartDt),
                        end: formatDate(item.docRegEndDt),
                        color: '#FF6F61' // 커스텀 색상
                    });
                }
                // 필기시험 기간
                if (item.docExamStartDt && item.docExamEndDt) {
                    events.push({
                        title: `필기시험 (${formatDate(item.docExamStartDt)} ~ ${formatDate(item.docExamEndDt)})`, // 시작일과 종료일을 한 번에 표시
                        start: formatDate(item.docExamStartDt), // 시작일
                        end: formatDate(item.docExamEndDt),   // 종료일
                        color: '#4CAF50'  // 색상 설정 
                    });
                }
                // 필기시험 합격 발표일
                if (item.docPassDt) {
                    events.push({
                        title: '필기 합격 발표',
                        start: formatDate(item.docPassDt),
                        color: '#FFC107'
                    });
                }
                // 실기시험 원서접수 기간
                if (item.pracRegStartDt && item.pracRegEndDt) {
                    events.push({
                        title: `실기 원서접수 (${formatDate(item.pracRegStartDt)}~${formatDate(item.pracRegEndDt)})`,
                        start: formatDate(item.pracRegStartDt),
                        end: formatDate(item.pracRegEndDt),
                        color: '#FF9800'
                    });
                }
                // 실기시험 기간
                if (item.pracExamStartDt && item.pracExamEndDt) {
                    events.push({
                        title: `실기시험 (${formatDate(item.pracExamStartDt)}~${formatDate(item.pracExamEndDt)})`,
                        start: formatDate(item.pracExamStartDt),
                        end: formatDate(item.pracExamEndDt),
                        color: '#2196F3'
                    });
                }
                // 실기시험 합격 발표일
                if (item.pracPassDt) {
                    events.push({
                        title: '실기 합격 발표',
                        start: formatDate(item.pracPassDt),
                        color: '#9C27B0'
                    });
                }
            });
        } else {
            console.error("응답 데이터가 예상과 다릅니다.", data);
        }

        return events;
    }

    // 날짜 형식 변환 (예: 20231005 -> 2023-10-05)
    function formatDate(dateStr) {
        if (dateStr) {
            return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
        }
        return null;
    }
});
