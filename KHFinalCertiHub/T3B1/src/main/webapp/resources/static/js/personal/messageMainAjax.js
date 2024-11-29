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