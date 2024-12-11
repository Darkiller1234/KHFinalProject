function initNoticePost(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const boardNo = urlParam.get('no')

    let state = {
        contextPath: contextPath,
        boardNo: boardNo,
    }
    
    initButtonEvent(state)
}

function initButtonEvent(state){
    const deleteButton = document.querySelector('#deleteButton')
    if(deleteButton){
        deleteButton.onclick = () => {
            location.href = 'deleteBoard?no=' + state.boardNo;
        }
    }

    const editButton = document.querySelector('#editButton')
    if(editButton){
        editButton.onclick = () => {
            location.href = 'board/edit?no=' + state.boardNo;
        }
    }
}