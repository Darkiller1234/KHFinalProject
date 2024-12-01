function ajaxLoadMentor(state, callback){
    $.ajax({
        url:'loadMentor',
        type: 'post',
        success: (res) => callback(res, state),
        error: () => {
            console.log("멘토 로딩 실패")
        }
    })
}

function ajaxLoadStudy(state, callback){
    $.ajax({
        url:'loadStudy',
        type: 'post',
        success: (res) => callback(res, state),
        error: () => {
            console.log("스터디 로딩 실패")
        }
    })
}