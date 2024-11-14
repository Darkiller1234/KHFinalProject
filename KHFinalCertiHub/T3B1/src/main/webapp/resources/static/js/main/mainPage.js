$(document).ready(function () {
    // 공공데이터 API 요청 함수
    function fetchExamSchedules(certType) {
        // 선택된 자격증에 따라 종목코드 설정
        var jmCd = getJmCd(certType);

        $.ajax({
            url: 'https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList',
            data: {
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE+D4ffB3SmCH4VqDihRDB/NR8RmbluUBQL+o10w==',
                numOfRows: 10, // 한 페이지 결과 수
                pageNo: 1, // 페이지 번호
                dataFormat: 'json', // 응답 데이터 포맷 (json)
                implYy: 2024, // 시행년도 (2024년)
                qualgbCd: 'T', // 자격구분코드 (T: 국가기술자격)
                jmCd: jmCd // 선택된 자격증의 종목코드
            },
            dataType: 'json', // JSON 형식으로 응답받기
            success: function (data) {
                console.log("API 호출 성공");
                console.log(data);  // 응답 데이터 확인
                parseAndDisplayData(data);  // 데이터를 파싱하고 출력하는 함수 호출
            },
            error: function (xhr, status, error) {
                console.error("API 호출 실패:", error);
            }
        });
    }

    // 자격증에 따라 종목코드를 설정하는 함수
    function getJmCd(certType) {
        switch (certType) {
            case 'EIP':
                return '1320'; // 정보처리기사
            case 'EIS':
                return '1321'; // 정보보안기사
            case 'Cisco':
                return '1322'; // 네트워크기사
            default:
                return '1320'; // 기본값
        }
    }

    // 응답 데이터 파싱 및 일정 출력 함수
    function parseAndDisplayData(data) {
        var schedules = [];
        var uniqueSchedules = new Set();  // 중복을 피하기 위한 Set

        // 응답 데이터 구조 확인 후, 일정 항목 추출
        if (data && data.body && data.body.items) {
            var items = data.body.items;

            items.forEach(function (item) {
                var docRegStartDate = item.docRegStartDt; // 필기시험 원서접수 시작일
                var docRegEndDate = item.docRegEndDt; // 필기시험 원서접수 종료일
                var docExamStartDate = item.docExamStartDt; // 필기시험 시작일
                var docExamEndDate = item.docExamEndDt; // 필기시험 종료일
                var docPassDate = item.docPassDt; // 필기 합격 발표일

                var pracRegStartDate = item.pracRegStartDt; // 실기시험 원서접수 시작일
                var pracRegEndDate = item.pracRegEndDt; // 실기시험 원서접수 종료일
                var pracExamStartDate = item.pracExamStartDt; // 실기시험 시작일
                var pracExamEndDate = item.pracExamEndDt; // 실기시험 종료일
                var pracPassDate = item.pracPassDt; // 실기 합격 발표일

                // 일정 데이터 배열에 추가
                schedules.push({
                    docRegStartDate: formatDate(docRegStartDate),
                    docRegEndDate: formatDate(docRegEndDate),
                    docExamStartDate: formatDate(docExamStartDate),
                    docExamEndDate: formatDate(docExamEndDate),
                    docPassDate: formatDate(docPassDate),
                    pracRegStartDate: formatDate(pracRegStartDate),
                    pracRegEndDate: formatDate(pracRegEndDate),
                    pracExamStartDate: formatDate(pracExamStartDate),
                    pracExamEndDate: formatDate(pracExamEndDate),
                    pracPassDate: formatDate(pracPassDate)
                });
            });

            // 일정 데이터를 HTML로 출력
            displaySchedule(schedules, uniqueSchedules);
        } else {
            console.error("응답 데이터가 예상과 다릅니다.", data);
        }
    }

    // 날짜 형식 변환 함수 (예: 20231005 -> 2023-10-05)
    function formatDate(dateStr) {
        if (dateStr) {
            return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
        }
        return '';
    }

    // 일정 데이터를 HTML로 출력하는 함수
    function displaySchedule(schedules, uniqueSchedules) {
        var scheduleList = $('#schedule-list');
        scheduleList.empty(); // 기존 리스트 내용 초기화

        if (schedules.length === 0) {
            scheduleList.append('<li>이번 달에 해당하는 일정이 없습니다.</li>');
        }

        // 각 일정 항목을 중복 없이 출력
        schedules.forEach(function (schedule) {
            // 필기시험 일정 체크 (접수일, 시작일, 종료일, 합격일)
            if (isInCurrentMonth(schedule.docRegStartDate) && !uniqueSchedules.has(schedule.docRegStartDate)) {
                var listItem1 = $('<li>').text('필기시험 원서접수 시작: ' + schedule.docRegStartDate + ' ~ 필기시험 원서접수 종료: ' + schedule.docRegEndDate);
                scheduleList.append(listItem1);
                uniqueSchedules.add(schedule.docRegStartDate);  // 출력된 항목 추가
            }
            if (isInCurrentMonth(schedule.docExamStartDate) && !uniqueSchedules.has(schedule.docExamStartDate)) {
                var listItem2 = $('<li>').text('필기시험 시작: ' + schedule.docExamStartDate + ' ~ 필기시험 종료: ' + schedule.docExamEndDate);
                scheduleList.append(listItem2);
                uniqueSchedules.add(schedule.docExamStartDate);  // 출력된 항목 추가
            }
            if (isInCurrentMonth(schedule.docPassDate) && !uniqueSchedules.has(schedule.docPassDate)) {
                var listItem3 = $('<li>').text('필기 합격 발표: ' + schedule.docPassDate);
                scheduleList.append(listItem3);
                uniqueSchedules.add(schedule.docPassDate);  // 출력된 항목 추가
            }

            // 실기시험 일정 체크 (접수일, 시작일, 종료일, 합격일)
            if (isInCurrentMonth(schedule.pracRegStartDate) && !uniqueSchedules.has(schedule.pracRegStartDate)) {
                var listItem4 = $('<li>').text('실기시험 원서접수 시작: ' + schedule.pracRegStartDate + ' ~ 실기시험 원서접수 종료: ' + schedule.pracRegEndDate);
                scheduleList.append(listItem4);
                uniqueSchedules.add(schedule.pracRegStartDate);  // 출력된 항목 추가
            }
            if (isInCurrentMonth(schedule.pracExamStartDate) && !uniqueSchedules.has(schedule.pracExamStartDate)) {
                var listItem5 = $('<li>').text('실기시험 시작: ' + schedule.pracExamStartDate + ' ~ 실기시험 종료: ' + schedule.pracExamEndDate);
                scheduleList.append(listItem5);
                uniqueSchedules.add(schedule.pracExamStartDate);  // 출력된 항목 추가
            }
            if (isInCurrentMonth(schedule.pracPassDate) && !uniqueSchedules.has(schedule.pracPassDate)) {
                var listItem6 = $('<li>').text('실기 합격 발표: ' + schedule.pracPassDate);
                scheduleList.append(listItem6);
                uniqueSchedules.add(schedule.pracPassDate);  // 출력된 항목 추가
            }
        });
    }

    // 날짜가 이번 달에 포함되는지 확인하는 함수
    function isInCurrentMonth(dateStr) {
        var date = new Date(dateStr);
        var currentMonth = new Date();
        return date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear();
    }

    // 처음 로드 시, 기본으로 정보처리기사 일정을 가져오기
    fetchExamSchedules('EIP'); 

    // 드롭다운 변경 시, 해당 자격증의 일정을 다시 불러오기
    $('#cert-select').change(function() {
        var selectedCert = $(this).val();
        fetchExamSchedules(selectedCert);
    });
});
