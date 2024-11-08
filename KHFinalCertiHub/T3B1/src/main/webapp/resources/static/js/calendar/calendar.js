// calendar.js
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // 기본 뷰 설정 (월별 뷰)
        events: '/calendar/events'   // 서버에서 이벤트를 받아오는 경로
    });

    calendar.render();
});