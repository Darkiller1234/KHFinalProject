// 현재 페이지의 URL 주소
const url = new URL(window.location.href);
// URL의 파라미터값을 가진 객체
const urlParam = url.searchParams;


function initPersonalViewSc(contextPath) {
    let calendarEl = document.getElementById('calendar');
    $.ajax({
        url: "viewSc/memberCheck",
        data: {pno: urlParam.get('pno')},
        success: function(res){
            if(res === null){
                document.querySelector('#middle-view').innerHTML = "<h1>해당 유저의 정보가 없습니다.</h1>"
                document.querySelector('.bottom-view').innerHTML = ""
                return null;
            } else {
                // FullCalendar 초기화
                let calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    locale: 'ko',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek,dayGridDay'  
                    },
                    displayEventEnd: true,
                    dateClick: function(info) {
                        getCurrentDateInfo(info);
                    },
                    events: function (info, successCallback, failureCallback) {
                        fetchExamSchedules(info.startStr, info.endStr, successCallback, failureCallback);
                    },
                    eventContent: function (arg) {
                        // 한 줄로 병합된 텍스트 표시
                        const title = arg.event.title || '';
                        const dateRange = arg.event.extendedProps.dateRange || '';
                        return {
                            html: `<div class="custom-event" style="--event-bg-color: ${arg.event.backgroundColor}; --event-text-color: ${arg.event.textColor};">
                            ${title}<br>${dateRange}
                            </div>`,
                        };
                    }
                });

                calendar.render();

                importCalendar(calendar);
            }
            
        },
        error: function(res){
            console.log("일정 불러오기 ajax 오류");
        }
    })

    



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













    function importCalendar(calendar) {
        calendar.setOption('selectable', true);
    
        $.ajax({
            url: "viewSc/scLoad",
            data: {pno: urlParam.get('pno')},
            success: function(events){
                const today = new Date();
        
                if(events[0] !== null){
                    events.forEach(event => {
                        const today = new Date();
                        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // 시간 제거

                        // 이벤트 데이터 처리
                        const startDate = new Date(event.start);
                        const endDate = new Date(event.end);
                        const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
                        const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

                        // 날짜만 비교
                        if (todayDateOnly >= startDateOnly && todayDateOnly <= endDateOnly) {
                            document.querySelector('#today-job-div-list').appendChild(createDateChild(event, 0));
                            document.querySelector('#notToday-job-div-list').appendChild(createDateChild(event, 0));
                        } else {
                            document.querySelector('#notToday-job-div-list').appendChild(createDateChild(event, 0));
                        }
        
                        event.dateRange = createDateRangeWithTime(event.start, event.end);
                        event.end = new Date(new Date(event.end).getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
                    });
                    calendar.addEventSource(events); // JSON 형식 데이터를 이벤트로 추가
                    calendar.render();
                }
                
            },
            error: function(res){
                console.log("일정 불러오기 ajax 오류");
            }
        })
    }





    function createDateRangeWithTime(start, end) {
        const startDate = new Date(start);
        const endDate = new Date(end);
      
        // 날짜 부분만 비교
        const isSameDay = startDate.toDateString() === endDate.toDateString();
      
        // 시간 포맷 함수 (HH:MM 형식)
        const formatTime = date => 
          `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
      
        if (isSameDay) {
          // 하루 내의 이벤트: 시간 표시
          return `${formatTime(startDate)} ~ ${formatTime(endDate)}`;
        }
      
        // 기간 이벤트: 날짜와 시간 표시
        const formatDate = date => 
          `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        
        return `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
    }


    function createDateChild(event, test) {
        // 새로운 div 요소 생성
        const newDiv = document.createElement('div');
        const jobDetailDiv = document.createElement('div');
        const fontSizeSubtitleDiv = document.createElement('div');
        const fontSizeContentDiv = document.createElement('div');
        const deleteButton = document.createElement('button');
      
        // 날짜 정보 생성
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);
      
        // 날짜 비교
        const isSameDay = startDate.toDateString() === endDate.toDateString();
      
        // 날짜 및 시간 포맷 함수
        const formatDate = date =>
          `${(date.getMonth() + 1).toString().padStart(2, '0')}월 ${date.getDate().toString().padStart(2, '0')}일`;
        const formatTime = date =>
          `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
      
        // 날짜 범위 텍스트 생성
        const dateRangeText = isSameDay
          ? `${formatDate(startDate)} ${formatTime(startDate)} ~ ${formatTime(endDate)}`
          : `${formatDate(startDate)} ${formatTime(startDate)}\n ~ ${formatDate(endDate)} ${formatTime(endDate)}`;
      
        // 클래스 추가
        newDiv.classList.add(isSameDay ? 'today-job-div' : 'notToday-job-div');
        jobDetailDiv.classList.add('job-detail');
        fontSizeSubtitleDiv.classList.add('font-size-subtitle');
        fontSizeContentDiv.classList.add('font-size-content');
        
      
        // 텍스트 내용 설정
        fontSizeSubtitleDiv.innerText = dateRangeText;
        fontSizeContentDiv.textContent = event.title || '작업 제목 없음';
        


        // 요소 구조 조합
        jobDetailDiv.appendChild(fontSizeSubtitleDiv);
        jobDetailDiv.appendChild(fontSizeContentDiv);
        newDiv.appendChild(jobDetailDiv);
        // newDiv.appendChild(deleteButton);

        // 생성된 요소 반환 (또는 DOM에 추가)

        if(test === 1){
            deleteButton.classList.add('delete-job');
            deleteButton.textContent = '삭제';
            // 버튼 클릭 이벤트 추가
            deleteButton.addEventListener('click', () => {
                $.ajax({
                    url: "makeSc/deleteSc",
                    data: {calendarNo: event.id},
                    success: function(res){
                        // FullCalendar에서 이벤트 삭제
                        const calendarEvent = calendar.getEventById(event.id); // FullCalendar 이벤트 ID로 이벤트 가져오기
                        if (calendarEvent) {
                            calendarEvent.remove(); // 캘린더에서 이벤트 제거
                            console.log(`"${event.title}" 작업이 캘린더에서 삭제되었습니다.`);
                            newDiv.remove();
                        } else {
                            console.error('캘린더에서 이벤트를 찾을 수 없습니다.');
                        }
                        
                    },
                    error: function(res){
                        console.log("일정 삭제 ajax 오류");
                    }
                })
                
                console.log(`"${event.title}" 작업이 삭제되었습니다.`);
            });

            
            fontSizeSubtitleDiv.appendChild(deleteButton);
        }


        


      
        
        return newDiv;
    }

    function getCurrentDateInfo(info){
        const list = document.querySelector('#notToday-job-div-list');
        list.innerHTML = "";
        $.ajax({
            url: "viewSc/getCurrentDateInfo",
            data: {date: info.dateStr, pno: urlParam.get('pno')},
            success: function(res){
                if(res[0] !== null){
                    res.forEach(dt => {
                        list.appendChild(createDateChild(dt, 0));
                    });
                }
            },
            error: function(res){
                console.log("데이터 가져오기 ajax 오류");
            }
        })
    }

}