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
            fetchExamSchedules('EIP', info.startStr, info.endStr, successCallback, failureCallback);
        },
        eventContent: function (arg) {
            // 한 줄로 병합된 텍스트 표시
            const title = arg.event.title || '';
            const dateRange = arg.event.extendedProps.dateRange || '';
            return {
                html: `<div style="color: white; text-align: center; font-size: 12px;">${title}<br>${dateRange}</div>`,
            };
        }
    });

    calendar.render();

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
                var events = parseScheduleData(data);
                successCallback(events);
            },
            error: function (error) {
                console.error("API 호출 실패:", error);
                failureCallback(error);
            }
        });
    }

    function getJmCd(certType) {
        switch (certType) {
            case 'EIP': return '1320'; // 정보처리기사
            default: return '1320';
        }
    }

    function parseScheduleData(data) {
        var events = [];

        if (data && data.body && data.body.items) {
            var items = data.body.items;

            items.forEach(function (item) {
                // 필기시험 원서접수
                if (item.docRegStartDt && item.docRegEndDt) {
                    events.push({
                        title: `필기 원서접수`,
                        start: formatDate(item.docRegStartDt),
                        end: formatDate(item.docRegEndDt),
                        color: '#FF6F61',
                        dateRange: `${formatDate(item.docRegStartDt)} ~ ${formatDate(item.docRegEndDt)}`,
                    });
                }
                // 필기시험
                if (item.docExamStartDt && item.docExamEndDt) {
                    events.push({
                        title: `필기시험`,
                        start: formatDate(item.docExamStartDt),
                        end: formatDate(item.docExamEndDt),
                        color: '#4CAF50',
                        dateRange: `${formatDate(item.docExamStartDt)} ~ ${formatDate(item.docExamEndDt)}`,
                    });
                }
                // 필기시험 합격 발표
                if (item.docPassDt) {
                    events.push({
                        title: `필기 합격 발표`,
                        start: formatDate(item.docPassDt),
                        color: '#FFC107',
                        dateRange: formatDate(item.docPassDt),
                    });
                }
                // 실기시험 원서접수
                if (item.pracRegStartDt && item.pracRegEndDt) {
                    events.push({
                        title: `실기 원서접수`,
                        start: formatDate(item.pracRegStartDt),
                        end: formatDate(item.pracRegEndDt),
                        color: '#FF9800',
                        dateRange: `${formatDate(item.pracRegStartDt)} ~ ${formatDate(item.pracRegEndDt)}`,
                    });
                }
                // 실기시험
                if (item.pracExamStartDt && item.pracExamEndDt) {
                    events.push({
                        title: `실기시험`,
                        start: formatDate(item.pracExamStartDt),
                        end: formatDate(item.pracExamEndDt),
                        color: '#2196F3',
                        dateRange: `${formatDate(item.pracExamStartDt)} ~ ${formatDate(item.pracExamEndDt)}`,
                    });
                }
                // 실기시험 합격 발표
                if (item.pracPassDt) {
                    events.push({
                        title: `실기 합격 발표`,
                        start: formatDate(item.pracPassDt),
                        color: '#9C27B0',
                        dateRange: formatDate(item.pracPassDt),
                    });
                }
            });
        } else {
            console.error("응답 데이터가 예상과 다릅니다.", data);
        }

        return events;
    }

    function formatDate(dateStr) {
        if (dateStr) {
            return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
        }
        return null;
    }
});
