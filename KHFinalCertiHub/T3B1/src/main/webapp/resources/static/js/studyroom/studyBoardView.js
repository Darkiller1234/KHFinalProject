function initStudyBoardView(contextPath){
    initButtonEvent(contextPath);
    initSelectBox(contextPath);
}

function initButtonEvent(){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const boardNo = urlParam.get('no')

    const deleteButton = document.querySelector('#deleteButton')
    deleteButton.onclick = () => {
        location.href = 'deleteBoard?no=' + boardNo;
    }
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');
    
    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'isRecruit',
            default : '마감',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                ['모집중'],
                ['마감']
            ]
        }

        createSelectBox(selectBox, data)
    })
}