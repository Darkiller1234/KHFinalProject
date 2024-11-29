function initChatbotPage(contextPath){
    const sendMessage = document.querySelector('#sendText')
    const sendButton = document.querySelector('#sendButton')
    const messageWindow = document.querySelector('.message-window')

    let state = {
        contextPath: contextPath,
        sendMessage: sendMessage,
        sendButton: sendButton,
        messageWindow: messageWindow,
        answer: null,
    }

    initSendChatEvent(state);
}

function initSendChatEvent(state){
    const onGetChat = (res) => {
        console.log(res)
        
        state.answer = res.status == 'Y' ? res.answer : '오늘의 요청 한도를 초과하셨습니다.'
        state.sendMessage.value = ""
        createBotMessageBox(state.messageWindow, state)
    }
    
    state.sendMessage.onkeypress = (e) => {

        if( (e.code !== 'Enter' && e.type !== 'click') || state.sendMessage.value == "" ){
            return;
        }

        addMessage(e, state)
        ajaxGetChat(state, onGetChat)
    }
    state.sendButton.onclick = (e) => {

        if( (e.code !== 'Enter' && e.type !== 'click') || state.sendMessage.value == "" ){
            return;
        }

        addMessage(e, state)
        ajaxGetChat(state, onGetChat)
    }
}

function ajaxGetChat(state, callback){
    $.ajax({
        url: state.contextPath + '/chatbot/getChat',
        type:"post",
        data: {
            ask : state.sendMessage.value,
        },
        success: callback,
        error: () => {
            console.log("챗봇 호출 실패")
        }
    })
}

function addMessage(e, state){
    createUserMessageBox(state.messageWindow, state)
}

function createUserMessageBox(div, state){
    const message = document.createElement('div')
    message.className = 'message mine'

    const card = document.createElement('div')
    card.className = 'message-card'

    const info = document.createElement('div')
    info.className = 'info'

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = state.sendMessage.value;

    info.appendChild(content)
    card.appendChild(info)
    message.appendChild(card)

    div.prepend(message) // 요소 맨 앞에 자식 추가
}

function createBotMessageBox(div, state){
    const message = document.createElement('div')
    message.className = 'message'

    const card = document.createElement('div')
    card.className = 'message-card'

    // 프로필 사진
    const thumbnail = document.createElement('div')
    const thumbnailImg = document.createElement('img')

    thumbnail.className = 'thumbnail'
    thumbnailImg.className = 'rounded-circle'
    thumbnailImg.src = state.contextPath + "/resources/static/img/profile/chatbot.png"
    thumbnail.appendChild(thumbnailImg)

    const info = document.createElement('div')
    info.className = 'info'

    const userName = document.createElement('div')
    userName.className = 'user-name'
    userName.innerText = '챗봇 도우미'

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = state.answer;
    state.answer = ""

    info.appendChild(userName)
    info.appendChild(content)

    card.appendChild(thumbnail)
    card.appendChild(info)

    message.appendChild(card)
    div.prepend(message)
}

function chatScroll(){
    const messageWindow = document.querySelector('.message-window')

    messageWindow.scrollTo({
        top: messageWindow.scrollHeight,
        behavior: 'smooth'
    })
}