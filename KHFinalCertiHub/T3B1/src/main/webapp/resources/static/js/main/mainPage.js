$(document).ready(function() {
    // 공공데이터 API 요청 함수
    function fetchExamSchedules() {
        $.ajax({
            url: 'https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList',
            data: {
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE+D4ffB3SmCH4VqDihRDB/NR8RmbluUBQL+o10w==',
                numOfRows: 40, // 한 페이지 결과 수
                pageNo: 1, // 페이지 번호
                dataFormat: 'json', // 응답 데이터 포맷 (json)
                implYy: 2024, // 시행년도 (2024년)
                qualgbCd: 'T', // 자격구분코드 (T: 국가기술자격)
                jmCd: '1320' // 종목코드 (예: 1320: 정보처리기사)
            },
            dataType: 'json', // JSON 형식으로 응답받기
            success: function(data) {
                console.log("API 호출 성공");
                console.log(data);  // 응답 데이터 확인
                parseAndDisplayData(data);  // 데이터를 파싱하고 출력하는 함수 호출
            },
            error: function(xhr, status, error) {
                console.error("API 호출 실패:", error);
            }
        });
    }

    // 응답 데이터 파싱 및 일정 출력 함수
    function parseAndDisplayData(data) {
        var schedules = [];

        // 응답 데이터 구조 확인 후, 일정 항목 추출
        if (data && data.body && data.body.items) {
            var items = data.body.items;

            // 각 항목에 대해 시작일자와 종료일자 추출
            items.forEach(function(item) {
                var examStartDate = item.docExamStartDt; // 필기시험 시작일자
                var examEndDate = item.docExamEndDt; // 필기시험 종료일자

                // 일정 데이터 배열에 추가
                schedules.push({
                    examStartDate: formatDate(examStartDate),
                    examEndDate: formatDate(examEndDate)
                });
            });

            // 일정 데이터를 HTML로 출력
            displaySchedule(schedules);
        } else {
            console.error("응답 데이터가 예상과 다릅니다.", data);
        }
    }

    // 날짜 형식 변환 함수 (예: 20231005 -> 2023-10-05)
    function formatDate(dateStr) {
        return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
    }

    // 일정 데이터를 HTML로 출력하는 함수
    function displaySchedule(schedules) {
        var scheduleList = $('#october-schedule');
        scheduleList.empty(); // 기존 리스트 내용 초기화

        // 일정 항목을 동적으로 추가
        schedules.forEach(function(schedule) {
            var listItem = $('<li>').text('시험 시작: ' + schedule.examStartDate + ' ~ 시험 종료: ' + schedule.examEndDate);
            scheduleList.append(listItem);
        });
    }

    // API 호출 시작
    fetchExamSchedules();
});
