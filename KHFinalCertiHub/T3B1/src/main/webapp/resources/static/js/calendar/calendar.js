document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // 기본 뷰 설정 (월별 뷰)
        events: function (start, end, timezone, callback) {
            $.ajax({
                url: 'scheduleAPI',
                dataType: 'json',
                success: function (data) {
                    var events = data.response.body.items.item.map(function (item) {
                        // 2024년 이후의 일정만 필터링
                        var year = parseInt(item.examregstartdt.substring(0, 4), 10);
                        if (year < 2024) return [];  // 2024년도 이전은 제외

                        // 특정 자격증 필터링
                        var validCertifications = ["정보처리기사", "네트워크 관리사", "정보보안기사", "빅데이터 분석기사"];
                        if (!validCertifications.includes(item.STAT_JIPYO_NM)) return [];  // 원하는 자격증만 선택

                        var eventsArray = [];

                        // 원서 접수 일정
                        eventsArray.push({
                            title: "원서 접수",
                            start: formatDate(item.examregstartdt),
                            end: formatDate(item.examregenddt),
                            description: "원서 접수 기간",
                            allDay: true
                        });

                        // 시험 일정
                        eventsArray.push({
                            title: "시험 시작",
                            start: formatDate(item.examstartdt),
                            end: formatDate(item.examenddt),
                            description: "시험 기간",
                            allDay: true
                        });

                        // 합격자 발표 일정
                        eventsArray.push({
                            title: "합격자 발표",
                            start: formatDate(item.passstartdt),
                            end: formatDate(item.passenddt),
                            description: "합격자 발표 기간",
                            allDay: true
                        });

                        return eventsArray;
                    }).flat();  // 배열을 평탄화하여 반환
                    callback(events);  // FullCalendar에 이벤트 전달
                },
                error: function (xhr, status, error) {
                    console.error("API 호출 실패:", error);
                }
            });
        },
        locale: 'ko',  // 한국어 설정
        initialView: 'dayGridMonth',  // 달력의 초기 뷰 설정
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }
    });

    calendar.render();

    // 날짜 형식 변환 함수
    function formatDate(dateStr) {
        return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
    }
});
