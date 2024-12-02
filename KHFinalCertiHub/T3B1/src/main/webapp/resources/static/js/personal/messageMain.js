function initMessageMain(contextPath) {
    const sideContent = document.querySelector('.side-extend .content')

    let state = {
        sideContent: sideContent,
        contextPath: contextPath,
        previousOption: null, // 이전에 누른 사이드 메뉴 번호
        mentorList: null,
        studyList: null,
    }

    initMenuButton(state);
}

const onMentorLoad = (res, state) => {
    state.mentorList = res;
    createMentorTalk(state.sideContent.querySelector('.mentorTalk'), state)
}

const onStudyLoad = (res, state) => {
    state.studyList = res;
    createStudyTalk(state.sideContent.querySelector('.studyTalk'), state)
}

function initMenuButton(state){
    const radioList = document.querySelectorAll('.side-menu label input')

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
}

function createMentorTalk(div, state){
    state.mentorList.forEach((talkroom)=>{
        let label = document.createElement('label')

        let radioInput = document.createElement('input')
        radioInput.type = 'radio';
        radioInput.name = 'talkroom-option';
        radioInput.onclick = () => {
            talkroomClick(talkroom.talkroomNo)
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
        lastTalk.innerHTML = "아직 더미로 추가"

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
            talkroomClick(talkroom.talkroomNo)
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
        lastTalk.innerHTML = "아직 더미로 추가"

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

function addMessage(e){
    const sendMessage = document.querySelector('#sendText')

    if( (e.code !== 'Enter' && e.type !== 'click') || sendMessage.value == ""){
        return;
    }

    const messageWindow = document.querySelector('.message-window')
    
    const div = document.createElement('div')
    div.className = 'message mine'

    const card = document.createElement('div')
    card.className = 'message-card'

    // 프로필 사진
    const thumbnail = document.createElement('div')
    const thumbnailImg = document.createElement('img')

    thumbnail.className = 'thumbnail'
    thumbnailImg.className = 'rounded-circle'
    thumbnailImg.src = "../resources/static/img/profile/profileTest.webp"
    thumbnail.appendChild(thumbnailImg)

    const info = document.createElement('div')
    info.className = 'info'

    const userName = document.createElement('div')
    userName.className = 'user-name'
    userName.innerText = 'User01'

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = sendMessage.value;
    sendMessage.value = ""

    info.appendChild(userName)
    info.appendChild(content)

    card.appendChild(thumbnail)
    card.appendChild(info)

    div.appendChild(card)
    messageWindow.prepend(div)
}

function sideClick(_this, state){
    const extendMenu = document.querySelector('.side-extend');
    let clickValue = _this.target.value
    /* 
        previousOption : 이전에 눌렀던 side menu 선택값을 저장해둠
        1 : 멘토 , 2 : 스터디그룹 , 3 : 알림
    */

    /* 눌렀던 사이드 메뉴를 또 누른다면 */
    if(state.previousOption === clickValue){
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

    switch(clickValue) {
        case "1":
            console.log(state.sideContent.querySelector('.mentorTalk'))
            state.sideContent.querySelector('.mentorTalk').style.display = "block"
            break;

        case "2":
            console.log(state.sideContent.querySelector('.studyTalk'))
            state.sideContent.querySelector('.studyTalk').style.display = "block"
            break;
    }

    /* 다른 사이드 메뉴 선택시 실행 */
    extendMenu.style.display = 'block';
    state.previousOption = clickValue;
}

function talkroomClick(tno){
    // const messageNotFound = document.querySelector('.message-section .not-found');

    // messageNotFound.style.display = 'none';
    console.log(tno)
}

function chatScroll(){
    const messageWindow = document.querySelector('.message-window')

    messageWindow.scrollTo({
        top: messageWindow.scrollHeight,
        behavior: 'smooth'
    })
}