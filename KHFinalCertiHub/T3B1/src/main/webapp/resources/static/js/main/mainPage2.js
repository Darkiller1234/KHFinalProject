function initMainPage(context){
    
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

function loadPersonalCalendar(calendar){
    
    calendar.setOption('selectable', true);
    
        fetch('scLoad')
        .then((response) => response.json())
        .then((events) => {
            if(events === 0){
                return;
            }
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
                    // const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
                    // const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

                    // 날짜만 비교
                    // if (todayDateOnly >= startDateOnly && todayDateOnly <= endDateOnly) {
                    //     document.querySelector('#today-job-div-list').appendChild(createDateChild(event, 0));
                    //     document.querySelector('#notToday-job-div-list').appendChild(createDateChild(event, 1));
                    //     console.log(`현재 날짜는 "${event.title}" 이벤트의 범위 내에 있습니다.`);
                    // } else {
                    //     document.querySelector('#notToday-job-div-list').appendChild(createDateChild(event, 1));
                    //     console.log(`현재 날짜는 "${event.title}" 이벤트의 범위 내에 있지 않습니다.`);
                    // }
    
                    event.dateRange = createDateRangeWithTime(event.start, event.end);
                    event.end = new Date(new Date(event.end).getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
                  });
                calendar.addEventSource(events); // JSON 형식 데이터를 이벤트로 추가
                calendar.render();
            }
            
    
    
        });
    }

