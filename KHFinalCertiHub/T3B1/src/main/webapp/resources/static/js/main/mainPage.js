$(document).ready(function () {
    // 공공데이터 API 요청 함수
    function fetchExamSchedules(certType) {
        var apiUrl = getApiUrl(certType);

        if (!apiUrl) {
            console.error("잘못된 certType입니다.");
            return;
        }

        $.ajax({
            url: apiUrl,
            data: {
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE+D4ffB3SmCH4VqDihRDB/NR8RmbluUBQL+o10w==',
                numOfRows: 20,
                pageNo: 1,
                dataFormat: 'json',
                implYy: 2025,
                qualgbCd: 'T'
            },
            dataType: 'json',
            success: function (data) {
                console.log("API 응답 데이터:", data);  // 데이터 구조 확인
                if (data && data.body) {
                    parseAndDisplayData(data.body);  // body만 전달
                } else {
                    console.error("응답 데이터에 body가 없습니다.", data);
                }
            },
            error: function (error) {
                console.error("API 호출 실패:", error);
            }
        });
    }

    // 자격증에 따라 API URL을 설정하는 함수
    function getApiUrl(certType) {
        const baseUrl = "https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList";
        const certMap = {
            '1': `${baseUrl}?qualgbCd=T&jmCd=0601`, // 기술사
            '2': `${baseUrl}?qualgbCd=T&jmCd=1320`, // 기사, 산업기사
            '3': `${baseUrl}?qualgbCd=T&jmCd=2177`, // 기능장
            '4': `${baseUrl}?qualgbCd=T&jmCd=1321`  // 기능사
        };
        return certMap[certType] || null;
    }

    // 응답 데이터 파싱 및 일정 출력 함수
    function parseAndDisplayData(body) {
        if (!body || !body.items) {
            console.error("일정 데이터가 없습니다.");
            return;
        }

        var schedules = [];
        var uniqueSchedules = new Set(); // 중복을 피하기 위한 Set

        var items = body.items;
        if (!Array.isArray(items)) {
            items = [items];  // items가 배열이 아닐 경우 배열로 변환
        }

        items.forEach(function (item) {
            schedules.push({
                docRegStartDate: formatDate(item.docRegStartDt),
                docRegEndDate: formatDate(item.docRegEndDt),
                pracRegStartDate: formatDate(item.pracRegStartDt),
                pracRegEndDate: formatDate(item.pracRegEndDt),
                docPassDate: formatDate(item.docPassDt),
                pracPassDate: formatDate(item.pracPassDt)
            });
        });

        // 일정 데이터를 HTML로 출력
        displaySchedule(schedules, uniqueSchedules);
    }

    // 날짜 형식 변환 함수
    function formatDate(dateStr) {
        return dateStr ? `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}` : '';
    }

    // 날짜가 이번 달에 포함되는지 확인하는 함수 (단일 날짜)
    function isInCurrentMonth(dateStr) {
        if (!dateStr) return false;
        var date = new Date(dateStr);
        var currentMonth = new Date();
        return date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear();
    }

    // 날짜 범위가 이번 달에 포함되는지 확인하는 함수
    function isInCurrentMonthRange(startDateStr, endDateStr) {
        if (!startDateStr || !endDateStr) return false;
        const startDate = new Date(startDateStr);
        const endDate = new Date(endDateStr);
        const current = new Date();

        const monthStart = new Date(current.getFullYear(), current.getMonth(), 1);
        const monthEnd = new Date(current.getFullYear(), current.getMonth() + 1, 0);

        return (startDate <= monthEnd && endDate >= monthStart);
    }

    // 일정 데이터를 HTML로 출력하는 함수
    function displaySchedule(schedules, uniqueSchedules) {
        var scheduleList = $('#schedule-list');
        scheduleList.empty();

        if (schedules.length === 0) {
            scheduleList.append('<li>이번 달에 해당하는 일정이 없습니다.</li>');
        }

        schedules.forEach(function (schedule) {
            // 필기시험 원서접수 기간
            if (isInCurrentMonthRange(schedule.docRegStartDate, schedule.docRegEndDate) && !uniqueSchedules.has(schedule.docRegStartDate)) {
                scheduleList.append('<li>필기시험 원서접수: ' + schedule.docRegStartDate + ' ~ ' + schedule.docRegEndDate + '</li>');
                uniqueSchedules.add(schedule.docRegStartDate);
            }

            // 필기시험 기간
            if (isInCurrentMonthRange(schedule.docExamStartDate, schedule.docExamEndDate) && !uniqueSchedules.has(schedule.docExamStartDate)) {
                scheduleList.append('<li>필기시험: ' + schedule.docExamStartDate + ' ~ ' + schedule.docExamEndDate + '</li>');
                uniqueSchedules.add(schedule.docExamStartDate);
            }

            // 실기시험 원서접수 기간
            if (isInCurrentMonthRange(schedule.pracRegStartDate, schedule.pracRegEndDate) && !uniqueSchedules.has(schedule.pracRegStartDate)) {
                scheduleList.append('<li>실기시험 원서접수: ' + schedule.pracRegStartDate + ' ~ ' + schedule.pracRegEndDate + '</li>');
                uniqueSchedules.add(schedule.pracRegStartDate);
            }

            // 실기시험 기간
            if (isInCurrentMonthRange(schedule.pracExamStartDate, schedule.pracExamEndDate) && !uniqueSchedules.has(schedule.pracExamStartDate)) {
                scheduleList.append('<li>실기시험: ' + schedule.pracExamStartDate + ' ~ ' + schedule.pracExamEndDate + '</li>');
                uniqueSchedules.add(schedule.pracExamStartDate);
            }

            // 합격 발표일 (단일 날짜)
            if (isInCurrentMonth(schedule.docPassDate) && !uniqueSchedules.has(schedule.docPassDate)) {
                scheduleList.append('<li>필기 합격 발표: ' + schedule.docPassDate + '</li>');
                uniqueSchedules.add(schedule.docPassDate);
            }
            if (isInCurrentMonth(schedule.pracPassDate) && !uniqueSchedules.has(schedule.pracPassDate)) {
                scheduleList.append('<li>실기 합격 발표: ' + schedule.pracPassDate + '</li>');
                uniqueSchedules.add(schedule.pracPassDate);
            }
        });
    }

    // 기본 데이터 로드
    fetchExamSchedules('1');

    // 드롭다운 변경 시 데이터 로드
    $('#cert-select').change(function () {
        fetchExamSchedules($(this).val());
    });
});
