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
    console.log('멘토 로딩 ajax')
    $.ajax({
        url:'loadMentor',
        type: 'post',
        data: {
            currentPage : state.mentorCurrentPage,
            pageLimit : state.pageLimit,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("멘토 로딩 실패")
        }
    })
}

function ajaxLoadStudy(state, callback){
    console.log('스터디 로딩 ajax')
    $.ajax({
        url:'loadStudy',
        type: 'post',
        data: {
            currentPage : state.studyCurrentPage,
            pageLimit : state.pageLimit,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("스터디 로딩 실패")
        }
    })
}

function ajaxLoadApply(state, callback){
    console.log('신청 로딩 ajax')
    console.log(state.applyCurrentPage)
    $.ajax({
        url:'loadApply',
        type: 'post',
        data: {
            currentPage : state.applyCurrentPage,
            pageLimit : state.pageLimit,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("신청 로딩 실패")
        }
    })
}

function ajaxLoadMessage(state, callback){
    console.log('메시지 로딩 ajax')
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