document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // 기본 뷰 설정 (월별 뷰)
        locale: 'ko',  // 한국어 설정
        initialView: 'dayGridMonth',  // 달력의 초기 뷰 설정
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        events: [ // 이벤트 데이터
            
        ]
    });

    calendar.render();

});

