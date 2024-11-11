function sideClick(_this){
    const selected = _this.value;
    const extendMenu = document.querySelector('.side-extend');
    /* 
        previousOption = html data태그값
        이전에 눌렀던 side menu 선택값을 저장해둠
        1 : 멘토 , 2 : 스터디그룹 , 3 : 알림
    */

    /* 눌렀던 사이드 메뉴를 또 누른다면 */
    if(extendMenu.dataset.previousOption === _this.value){
        /* extend 메뉴를 펼치지 않음 */
        extendMenu.style.display = 'none';
        extendMenu.dataset.previousOption = "";
        return;
    }

    /* 다른 사이드 메뉴 선택시 실행 */
    extendMenu.style.display = 'block';
    extendMenu.dataset.previousOption = selected;
}

function talkroomClick(_this){
    const messageNotFound = document.querySelector('.message-section .not-found');

    messageNotFound.style.display = 'none';
}

function addMessage(e){
    const sendMessage = document.querySelector('#sendText')

    // 엔터키 or 클릭이 아니거나 메시지가 비어있으면 실행하지 않음
    if(e.code !== 'Enter' && e.type !== 'click' && sendMessage.value == ""){
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