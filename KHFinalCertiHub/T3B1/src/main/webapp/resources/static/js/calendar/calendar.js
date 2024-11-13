document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // 기본 뷰 설정 (월별 뷰)
        // events: function (start, end, timezone, callback) {
        //     $.ajax({
        //         url: 'https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList',
        //         data: {
        //             serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D',  // 공공데이터 인증키
        //             numOfRows: 50,  // 한 페이지 결과 수
        //             pageNo: 1,  // 페이지 번호
        //             dataFormat: 'xml',  // 응답 데이터 포맷 (xml)
        //             implYy: 2024,  // 시행년도 (2024년)
        //             qualgbCd: 'T',  // 자격구분코드 - T: 국가기술자격
        //             jmCd: 1320  // 종목코드 (예: 1320: 정보처리기사)
        //         },
        //     });
        // },
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

