function initStudyBoardView(contextPath, isRecruit){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const boardNo = urlParam.get('no')

    let state = {
        isRecruit : isRecruit,
        boardNo : boardNo,
        studyNo : document.getElementById("boardNo").value,
        contextPath : contextPath,
    }
    initButtonEvent(state);
    initSelectBox(state);
    initApplyButton(state)
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

function initSelectBox(state){
    const selectBoxList = document.querySelectorAll('.custom-select');

    const onChangeRecruit = (res) => {
        const displayRecruit = document.querySelector('.button-select div')

        if(res.result != 'E'){
            displayRecruit.innerText = res.result == 'Y' ? "모집중" : "마감";
        }
    }
    
    if(selectBoxList){
        selectBoxList.forEach(selectBox => {
            let data = {
                name : 'isRecruit',
                default : state.isRecruit == "Y" ? "모집중" : "마감",
                imgUrl : `${state.contextPath}/resources/static/img/button/triangle_down.png`,
                items : [
                    ['모집중','Y', () => {
                        state.recruit = 'Y'
                        ajaxChangeRecruit(state, onChangeRecruit)
                    }],
                    ['마감','N', () => {
                        state.recruit = 'N'
                        ajaxChangeRecruit(state, onChangeRecruit)
                    }],
                ]
            }
    
            createSelectBox(selectBox, data)
        })
    }
}

function ajaxChangeRecruit(state, callback){
    $.ajax({
        url: "updateRecruit",
        type: "post",
        data:{
            recruit: state.recruit,
            boardNo: state.boardNo,
            studyNo: state.studyNo,
        },
        success: callback,
        error: () => {
            console.log("모집 여부 변경 실패")
        }
    })
}


function initApplyButton(state){
    // 모달 요소를 가져오기
    const modal = new bootstrap.Modal(document.getElementById('apply-modal'));
    const applyButton = document.querySelector('#applyButton')

    const onApplyStudy = (res) => {
        if(res.success == 'Y'){
            modal.show();
            applyButton.className += ' applied'
            applyButton.disabled = true
            applyButton.innerText = '신청완료'
        } else if(res.success == 'E') {
            alert('이미 신청하셨습니다.');
        } else {
            alert('스터디 신청에 실패하였습니다...')
        }
    }

    if(applyButton){
        applyButton.onclick = () => {
            ajaxApplyStudy(state.studyNo, onApplyStudy)
        }
    }
}

function ajaxApplyStudy(studyNo, callback){
    $.ajax({
        url:'applyStudy',
        type:"post",
        data:{
            studyNo: studyNo,
        },
        success: callback,
        error: () => {
            console.log('스터디 신청 요청 실패')
        }
    })
}