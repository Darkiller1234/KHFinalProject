function socketConnect(state){
    const socket = new WebSocket("ws://localhost:5600/T3B1/sendMessage")
    state.socket = socket;
    
    // 소켓 연결 성공시 실행
    socket.onopen = function(){
        state.sendMessage.value = ""
        state.sendMessage.disabled = false
    }

    // 소켓 연결 종료시 실행
    socket.onclose = function(){
    }

    // 소켓 연결 실패시 실행
    socket.onerror = function(){
        state.sendMessage.value = "서버와 연결에 실패했습니다..."
        state.sendMessage.disabled = true
    }

    //socket연결로부터 데이터가 도착했을 때 실행하는 이벤트
    socket.onmessage = function(ev){
        const receive = JSON.parse(ev.data);
        createMessageCard(state, receive)
    }

}

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
        data: {
            currentPage : state.mentorCurrentPage,
            pageLimit : state.pageLimit,
            keyword : state?.keyword,
        },
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
        data: {
            currentPage : state.studyCurrentPage,
            pageLimit : state.pageLimit,
            keyword : state?.keyword,
        },
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
            currentPage : state.applyCurrentPage,
            pageLimit : state.pageLimit,
            keyword : state?.keyword,
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

function ajaxAcceptApply(state, callback){
    $.ajax({
        url:'acceptApply',
        type:'post',
        data: {
            applyNo: state.applyNo,
            studyNo: state.studyNo,
            applicantNo: state?.applicantNo,
            applyKind: state.applyKind,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("요청 수락 실패")
        }
    })
}

function ajaxRejectApply(state, callback){
    $.ajax({
        url:'rejectApply',
        type:'post',
        data: {
            applyNo: state.applyNo,
        },
        success: (res) => callback(res, state),
        error: () => {
            console.log("요청 거절 실패")
        }
    })
}