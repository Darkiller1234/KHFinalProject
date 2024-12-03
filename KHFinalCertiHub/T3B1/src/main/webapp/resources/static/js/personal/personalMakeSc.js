function persoMSInit(contextPath){
    document.getElementById('start-cal').value = new Date().toISOString().substring(0, 10);
    document.getElementById('end-cal').value = new Date().toISOString().substring(0, 10);
    
    document.getElementById('repeat-start-cal').value = new Date().toISOString().substring(0, 10);
    document.getElementById('repeat-end-cal').value = new Date().toISOString().substring(0, 10);
    

    let data1 = {
        name : 'alarm',
        default : '10분 전',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['10분 전'],
            ['1시간 전'],
            ['1일 전'],
            ['일정 시작시간에']
        ]
    }

    createSelectBox(document.getElementById('alarm-select'), data1);

    let data2 = {
        name : 'repeat',
        default : '반복 안 함',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['1일 마다'],
            ['1주 마다'],
            ['1개월 마다'],
            ['반복 안 함']
        ]
    }

    createSelectBox(document.getElementById('repeat-select'), data2);

    let data3 = {
        name : 'repeat-select',
        default : '계속 반복',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['일정 횟수 반복'],
            ['계속 반복'],
            ['시작/종료 날짜 지정']
        ]
    }

    createSelectBox(document.getElementById('repeat-count-select'), data3);


    // const alarmInput = document.querySelector('#repeat-select .custom-select .button-select div');
    // const repeatcount = document.querySelector('#repeat-count-select .custom-select .button-select div');
    // const repeatCountSelect = document.getElementById('repeat-count-select');
    // const repeatcountinput = document.getElementById('repeat-count-input');
    // const repeaddataset = document.getElementById('repeat-date-set');

    // if (alarmInput.innerText === '반복 안 함') {
    //     repeatCountSelect.classList.add('display-none');
    //     repeatcountinput.classList.add('display-none');
    //     repeaddataset.classList.add('display-none');
    // } else {
    //     if (repeatcount.innerText !== '일정 횟수 반복') {
    //         repeatcountinput.classList.add('display-none');
    //     } else {
    //         repeatcountinput.classList.remove('display-none');
    //     }
    //     if (repeatcount.innerText !== '시작/종료 날짜 지정') {
    //         repeaddataset.classList.add('display-none');
    //     } else {
    //         repeaddataset.classList.remove('display-none');
    //     }
    //     repeatCountSelect.classList.remove('display-none');
    // }


    // if (alarmInput && repeatCountSelect) {
    //     document.querySelectorAll('.item').forEach(element => {
    //         element.addEventListener('mousedown', () => {
    //             if (alarmInput.innerText === '반복 안 함') {
    //                 repeatCountSelect.classList.add('display-none');
    //                 repeatcountinput.classList.add('display-none');
    //                 repeaddataset.classList.add('display-none');
    //             } else {
    //                 if (repeatcount.innerText !== '일정 횟수 반복') {
    //                     repeatcountinput.classList.add('display-none');
    //                 } else {
    //                     repeatcountinput.classList.remove('display-none');
    //                 }
    //                 if (repeatcount.innerText !== '시작/종료 날짜 지정') {
    //                     repeaddataset.classList.add('display-none');
    //                 } else {
    //                     repeaddataset.classList.remove('display-none');
    //                 }
    //                 repeatCountSelect.classList.remove('display-none');
    //             }
                
                
    //         });
    //     });
    // } else {
    //     console.warn("Required elements not found in the DOM.");
    // }












    
    let calendarEl = document.getElementById('calendar');

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
            fetchExamSchedules('EIP', info.startStr, info.endStr, successCallback, failureCallback);
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

    // API 호출 함수
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

    // 자격증 코드 설정
    function getJmCd(certType) {
        switch (certType) {
            case 'EIP': return '1320'; // 정보처리기사
            default: return '1320';
        }
    }

    // 일정 데이터 변환 및 중복 제거
    function parseScheduleData(data) {
        var events = [];
        var uniqueEvents = new Set(); // 중복 확인용 Set

        if (data && data.body && data.body.items) {
            var items = data.body.items;

            items.forEach(function (item) {
                // 이벤트 데이터 생성
                const eventDetails = [
                    // 필기시험 원서접수
                    item.docRegStartDt && item.docRegEndDt
                        ? {
                            title: `기사 필기 원서접수`,
                            start: formatDate(item.docRegStartDt),
                            end: formatDate(item.docRegEndDt),
                            color: '#FF6F61',
                            dateRange: `${formatDate(item.docRegStartDt)} ~ ${formatDate(item.docRegEndDt)}`
                        }
                        : null,
                    // 필기시험
                    item.docExamStartDt && item.docExamEndDt
                        ? {
                            title: `기사 필기시험`,
                            start: formatDate(item.docExamStartDt),
                            end: formatDate(item.docExamEndDt),
                            color: '#4CAF50',
                            dateRange: `${formatDate(item.docExamStartDt)} ~ ${formatDate(item.docExamEndDt)}`
                        }
                        : null,
                    // 필기 합격 발표
                    item.docPassDt
                        ? {
                            title: `기사 필기 합격 발표`,
                            start: formatDate(item.docPassDt),
                            color: '#FFC107',
                            dateRange: formatDate(item.docPassDt)
                        }
                        : null,
                    // 실기시험 원서접수
                    item.pracRegStartDt && item.pracRegEndDt
                        ? {
                            title: `기사 실기 원서접수`,
                            start: formatDate(item.pracRegStartDt),
                            end: formatDate(item.pracRegEndDt),
                            color: '#FF9800',
                            dateRange: `${formatDate(item.pracRegStartDt)} ~ ${formatDate(item.pracRegEndDt)}`
                        }
                        : null,
                    // 실기시험
                    item.pracExamStartDt && item.pracExamEndDt
                        ? {
                            title: `기사 실기시험`,
                            start: formatDate(item.pracExamStartDt),
                            end: formatDate(item.pracExamEndDt),
                            color: '#2196F3',
                            dateRange: `${formatDate(item.pracExamStartDt)} ~ ${formatDate(item.pracExamEndDt)}`
                        }
                        : null,
                    // 실기 합격 발표
                    item.pracPassDt
                        ? {
                            title: `기사시험 실기 합격 발표`,
                            start: formatDate(item.pracPassDt),
                            color: '#9C27B0',
                            dateRange: formatDate(item.pracPassDt)
                        }
                        : null
                ];

                // 중복 이벤트 제거
                eventDetails.forEach(event => {
                    if (event) {
                        const eventKey = `${event.title}-${event.start}-${event.end || ''}`; // 중복 체크 키
                        if (!uniqueEvents.has(eventKey)) {
                            uniqueEvents.add(eventKey);
                            events.push(event);
                        }
                    }
                });
            });
        } else {
            console.error("응답 데이터가 예상과 다릅니다.", data);
        }

        return events;
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
    
        fetch('makeSc/scLoad')
        .then((response) => response.json())
        .then((events) => {
            console.log(events)
            const today = new Date();
    
            if(events[0] !== null){
                console.log("에엑따")
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
                        document.querySelector('#notToday-job-div-list').appendChild(createDateChild(event, 1));
                        console.log(`현재 날짜는 "${event.title}" 이벤트의 범위 내에 있습니다.`);
                    } else {
                        document.querySelector('#notToday-job-div-list').appendChild(createDateChild(event, 1));
                        console.log(`현재 날짜는 "${event.title}" 이벤트의 범위 내에 있지 않습니다.`);
                    }
    
                    event.dateRange = createDateRangeWithTime(event.start, event.end);
                    event.end = new Date(new Date(event.end).getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
                  });
                calendar.addEventSource(events); // JSON 형식 데이터를 이벤트로 추가
                calendar.render();
            }
            
    
    
        });
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
        console.log(info.dateStr)
        const list = document.querySelector('#notToday-job-div-list');
        list.innerHTML = "";
        $.ajax({
            url: "makeSc/getCurrentDateInfo",
            data: {date: info.dateStr},
            success: function(res){
                if(res[0] !== null){
                    res.forEach(dt => {
                        list.appendChild(createDateChild(dt, 1));
                    });
                }
            },
            error: function(res){
                console.log("데이터 가져오기 ajax 오류");
            }
        })
    }

    $("#backColorInput").on("input", function(){
        const elements = document.querySelectorAll('.modal-content *:not(button)');
        const colorValue = document.querySelector('#backColorInput').value;

        // NodeList의 각 요소에 대해 스타일 설정
        elements.forEach(element => {
            element.style.backgroundColor = colorValue;
        });
        document.querySelector('.modal-content').style.backgroundColor = colorValue;
    })

    $("#fontColorInput").on("input", function(){
        const elements = document.querySelectorAll('.modal-content *:not(button)');
        const colorValue = document.querySelector('#fontColorInput').value;

        // NodeList의 각 요소에 대해 스타일 설정
        elements.forEach(element => {
            element.style.color = colorValue;
        });
        document.querySelector('.modal-content').style.color = colorValue;
    })


    $("#calendarSave").on("click",  function() {
        // 값 가져오기
        const startDate = document.querySelector('#start-date input[type=date]').value;
        const startTime = document.querySelector('#start-date input[type=time]').value;
        const endDate = document.querySelector('#end-date input[type=date]').value;
        const endTime = document.querySelector('#end-date input[type=time]').value;

        // Date 객체로 변환
        const startDateTime = new Date(`${startDate}T${startTime}`);
        const endDateTime = new Date(`${endDate}T${endTime}`);

        // 유효성 검사
        if (endDateTime < startDateTime) {
            alert("끝 날짜와 시간이 시작 날짜와 시간보다 앞설 수 없습니다!");
        } else {
            const title = document.querySelector('#titleInputArea input').value;
            if(title.replace(/\s/g, "").length == 0){
                alert("내용을 입력해주세요!");
            } else {
                const start = startDate + startTime;
                const end = endDate + endTime;
                const textColor = document.querySelector('#backColorInput').value;
                const backgroundColor = document.querySelector('#fontColorInput').value;
                $.ajax({
                    url: "makeSc/insertSc",
                    data: {
                        start: start,
                        end: end,
                        textColor: textColor,
                        backgroundColor: backgroundColor,
                        title: title
                    },
                    success: function(res){
                        if(res){
                            alert("일정 생성에 성공하였습니다.");
                            location.reload(true);
                        } else {
                            alert("다시 시도해주세요.")
                        }
                    },
                    error: function(res){
                        console.log("일정 생성 ajax 오류");
                    }
                })
            }
            
        }

        console.log(document.querySelector('#backColorInput').value)
        console.log(document.querySelector('#fontColorInput').value)
    })

}

