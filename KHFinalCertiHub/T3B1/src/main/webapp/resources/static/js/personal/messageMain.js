function initMessageMain(contextPath) {
    const sideContent = document.querySelector('.side-extend .content')
    const messageContent = document.querySelector('.message-section .message-window')

    let state = {
        contextPath: contextPath,
        managerNo: null, // 현재 선택한 톡방의 매니저 번호
        memberNo: null, // 현재 로그인한 멤버의 번호
        memberName: null, // 현재 로그인한 멤버의 닉네임

        sideContent: sideContent, // 멘토, 멘티, 알림 선택메뉴
        messageContent: messageContent, // 메시지 추가되는 영역

        currentOption: null, // 현재 누른 사이드 메뉴 번호
        previousOption: null, // 이전에 누른 사이드 메뉴 번호
        talkroomNo: null, // 선택한 톡방 번호
        mentorList: null,
        studyList: null,
        messageList: null,
        applyList: null,

        currentPage: 1, // 현재 메시지 페이지 번호
        sideCurrentPage: 1, // 사이드 메뉴 페이지 번호
        pageLimit: 10, // 불러올 메시지 개수 제한

    }

    const onLoadMemberInfo = (res, state) => {
        state.memberNo = res.memberNo
        state.memberName = res.memberName
    }

    ajaxLoadMemberInfo(state, onLoadMemberInfo)
    initMenuButton(state);
    initSideScroll(state);
    initMessageScroll(state);
}

function initMenuButton(state){
    const radioList = document.querySelectorAll('.side-menu label input')

    
    const onMentorLoad = (res, state) => {
        state.mentorList = res;
        createMentorTalk(state.sideContent.querySelector('.mentorTalk'), state)
    }

    const onStudyLoad = (res, state) => {
        state.studyList = res;
        createStudyTalk(state.sideContent.querySelector('.studyTalk'), state)
    }

    const onApplyLoad = (res, state) => {
        state.sideCurrentPage++;
        state.applyList = res;
        createApplyList(state.sideContent.querySelector('.applyList'), state)
    }
     
    radioList[0].onclick = (e) => {
        sideClick(e,state)

        if(state.mentorList == null) {
            ajaxLoadMentor(state, onMentorLoad);
        }
    }

    radioList[1].onclick = (e) => {
        sideClick(e,state)

        if(state.studyList == null) {
            ajaxLoadStudy(state, onStudyLoad);
        }
    }

    radioList[2].onclick = (e) => {
        sideClick(e,state)

        if(state.applyList == null) {
            ajaxLoadApply(state, onApplyLoad);
        }
    }
}

function initMessageScroll(state){
    let timer; // 스로틀링용 변수

    const onMessageLoad = (res, state) => {
        state.messageList = res
        state.currentPage++;
        createMessageCard(state.messageContent, state)
    }

    state.messageContent.onscroll = () => {
        clearTimeout(timer)

        timer = setTimeout( ()=> { 
            // 스크롤이 최대 높이에 근접할 경우
            if(state.messageContent.scrollTop <= state.messageContent.style.height * 0.1 ) {
                ajaxLoadMessage(state, onMessageLoad)
            }  
        }, 200)
    }
}

function initSideScroll(state){
    
}


function talkroomClick(state, talkroomNo, managerNo){
    state.talkroomNo = talkroomNo
    state.managerNo = managerNo
    state.currentPage = 1
    state.messageContent.innerHTML = ""

    const onMessageLoad = (res, state) => {
        state.messageList = res
        state.currentPage++;
        createMessageCard(state.messageContent, state)
    }

    ajaxLoadMessage(state, onMessageLoad)
}

function createMentorTalk(div, state){

    state.mentorList.forEach((talkroom)=>{
        let label = document.createElement('label')

        let radioInput = document.createElement('input')
        radioInput.type = 'radio';
        radioInput.name = 'talkroom-option';
        radioInput.onclick = () => {
            talkroomClick(state, talkroom.talkroomNo, talkroom.managerNo)
        }
        
        let talkroomDiv = document.createElement('div')
        talkroomDiv.className = "talkroom"

        let profileDiv = document.createElement('div')
        profileDiv.className = "thumbnail"

        let profileImg = document.createElement('img')
        profileImg.src = state.contextPath + talkroom.memberImg
        profileImg.className ="rounded-circle"

        let infoDiv = document.createElement('div')
        infoDiv.className = "talkroom-info"

        let name = document.createElement('div')
        name.className = "talkroom-name"
        name.innerHTML = talkroom.managerName

        let lastTalk = document.createElement('div')
        lastTalk.className = "last-talk"
        lastTalk.innerHTML = talkroom.lastMessage != null ? talkroom.lastMessage : "대화가 없습니다."

        profileDiv.appendChild(profileImg)
        infoDiv.appendChild(name)
        infoDiv.appendChild(lastTalk)

        talkroomDiv.appendChild(profileDiv)
        talkroomDiv.appendChild(infoDiv)

        label.appendChild(radioInput)
        label.appendChild(talkroomDiv)
        
        div.appendChild(label)
    })
}

function createStudyTalk(div, state){

    state.studyList.forEach((talkroom)=>{
        let label = document.createElement('label')

        let radioInput = document.createElement('input')
        radioInput.type = 'radio';
        radioInput.name = 'talkroom-option';
        radioInput.onclick = () => {
            talkroomClick(state, talkroom.talkroomNo, talkroom.managerNo)
        }
        
        let talkroomDiv = document.createElement('div')
        talkroomDiv.className = "talkroom"

        let profileDiv = document.createElement('div')
        profileDiv.className = "thumbnail"

        let profileImg = document.createElement('img')
        profileImg.src = state.contextPath + talkroom.studyImg
        profileImg.className ="rounded-circle"

        let infoDiv = document.createElement('div')
        infoDiv.className = "talkroom-info"

        let name = document.createElement('div')
        name.className = "talkroom-name"
        name.innerHTML = talkroom.studyName

        let lastTalk = document.createElement('div')
        lastTalk.className = "last-talk"
        lastTalk.innerHTML = talkroom.lastMessage != null ? talkroom.lastMessage : "대화가 없습니다."

        profileDiv.appendChild(profileImg)
        infoDiv.appendChild(name)
        infoDiv.appendChild(lastTalk)

        talkroomDiv.appendChild(profileDiv)
        talkroomDiv.appendChild(infoDiv)

        label.appendChild(radioInput)
        label.appendChild(talkroomDiv)
        
        div.appendChild(label)
    })
}

function createApplyList(div, state){
    state.applyList.forEach((apply)=>{
        let talkroomDiv = document.createElement('div')
        talkroomDiv.className = "talkroom"

        let profileDiv = document.createElement('div')
        profileDiv.className = "thumbnail"

        let profileImg = document.createElement('img')
        profileImg.src = state.contextPath + apply.applicantImg
        profileImg.className ="rounded-circle"

        let infoDiv = document.createElement('div')
        infoDiv.className = "talkroom-info"

        let name = document.createElement('div')
        name.className = "talkroom-name"

        let lastTalk = document.createElement('div')
        lastTalk.className = "last-talk"

        if(apply.applyKind == 1){
            name.innerHTML = apply.applicantName + '님의 멘티 신청'
            lastTalk.innerHTML = '수락하시겠습니까?'
        } else if (apply.applyKind == 2) {
            name.innerHTML = apply.applicantName + '님의 스터디 신청'
            lastTalk.innerHTML = apply.studyName
        }

        let buttonDiv = document.createElement('div')
        buttonDiv.className = 'option'

        let acceptBtn = document.createElement('button')
        acceptBtn.className = 'btn-accept'
        acceptBtn.innerHTML = '수락'

        let rejectBtn = document.createElement('button')
        rejectBtn.className = 'btn-primary'
        rejectBtn.innerHTML = '거절'

        buttonDiv.appendChild(acceptBtn)
        buttonDiv.appendChild(rejectBtn)

        profileDiv.appendChild(profileImg)
        infoDiv.appendChild(name)
        infoDiv.appendChild(lastTalk)
        infoDiv.appendChild(buttonDiv)

        talkroomDiv.appendChild(profileDiv)
        talkroomDiv.appendChild(infoDiv)
        
        div.appendChild(talkroomDiv)
    })
}

function createMessageCard(div, state){
    state.messageList.forEach((msg) => {
        const messageDiv = document.createElement('div')
        messageDiv.className = msg.memberNo == state.memberNo ? 'message mine' : 'message'
    
        const card = document.createElement('div')
        card.className = 'message-card'
    
        // 프로필 사진
        const thumbnail = document.createElement('div')
        const thumbnailImg = document.createElement('img')
    
        thumbnail.className = 'thumbnail'
        thumbnailImg.className = 'rounded-circle'
        thumbnailImg.src = state.contextPath + msg.memberImg
        thumbnail.appendChild(thumbnailImg)
    
        const info = document.createElement('div')
        info.className = 'info'
    
        const userName = document.createElement('div')
        userName.className = 'user-name'
        userName.innerText = msg.memberName
    
        const content = document.createElement('div')
        content.className = 'content'
        content.innerText = msg.messageContent;
    
        info.appendChild(userName)
        info.appendChild(content)
    
        card.appendChild(thumbnail)
        card.appendChild(info)
    
        messageDiv.appendChild(card)
        div.appendChild(messageDiv)
    })
}


function addMessage(e){
    const sendMessage = document.querySelector('#sendText')

    if( (e.code !== 'Enter' && e.type !== 'click') || sendMessage.value == ""){
        return;
    }

    const messageWindow = document.querySelector('.message-window')

    createMessageCard(messageWindow, sendMessage.value)
}

function sideClick(_this, state){
    state.sideCurrentPage = 1;
    const extendMenu = document.querySelector('.side-extend');
    state.currentOption = _this.target.value
    /* 
        previousOption : 이전에 눌렀던 side menu 선택값을 저장해둠
        1 : 멘토 , 2 : 스터디그룹 , 3 : 알림
    */

    /* 눌렀던 사이드 메뉴를 또 누른다면 */
    if(state.previousOption === state.currentOption){
        /* extend 메뉴를 펼치지 않음 */
        extendMenu.style.display = 'none';
        state.previousOption = null;
        return;
    }

    // 누른 요소에 해당하는 톡방 목록만 보여줌
    // childNodes = 요소 내 "모든 노드 (텍스트 포함) 보여줌"
    // children = 요소 내 "태그 요소" 만 보여줌
    // .children 속성은 배열이 아닌 HTML Collection
    // Array.prototype으로부터 상속받지 않기 때문에 배열이 아님
    // forEach 사용을 위해 Array로 변환
    // Array.from은 ES6 문법
    Array.from(state.sideContent.children).forEach((element)=>{
        element.style.display = 'none';
    })

    switch(state.currentOption) {
        case "1":
            state.sideContent.querySelector('.mentorTalk').style.display = "block"
            break;

        case "2":
            state.sideContent.querySelector('.studyTalk').style.display = "block"
            break;

        case "3":
            state.sideContent.querySelector('.applyList').style.display = "block"
            break;
    }

    /* 다른 사이드 메뉴 선택시 실행 */
    extendMenu.style.display = 'block';
    state.previousOption = state.currentOption;
}

function chatScroll(){
    const messageWindow = document.querySelector('.message-window')

    messageWindow.scrollTo({
        top: messageWindow.scrollHeight,
        behavior: 'smooth'
    })
}