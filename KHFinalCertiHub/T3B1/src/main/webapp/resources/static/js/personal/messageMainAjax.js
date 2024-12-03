function ajaxLoadMemberInfo(state, callback){
    $.ajax({
        url:'getMemberInfo',
        type: 'post',
        async: false,
        success: (res) => callback(res, state),
        error: () => {
            console.log("멤버 정보 로딩 실패")
        }
    })
}

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

function ajaxLoadApply(state, callback){
    $.ajax({
        url:'loadApply',
        type: 'post',
        data: {
            currentPage : state.sideCurrentPage,
            pageLimit : state.pageLimit,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("신청 로딩 실패")
        }
    })
}

function ajaxLoadMessage(state, callback){
    $.ajax({
        url:'loadMessage',
        type:'post',
        data: {
            talkroomNo: state.talkroomNo,
            currentPage: state.currentPage,
            pageLimit: state.pageLimit,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("스터디 로딩 실패")
        }
    })
}