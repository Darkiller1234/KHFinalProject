function initChatbotPage(contextPath){
    const sendMessage = document.querySelector('#sendText')
    const sendButton = document.querySelector('#sendButton')
    const messageWindow = document.querySelector('.message-window')

    let state = {
        contextPath: contextPath,
        sendMessage: sendMessage,
        sendButton: sendButton,
        messageWindow: messageWindow,
    }

    initSendChatEvent(state);
}

function initSendChatEvent(state){
    state.sendMessage.onkeypress = (e) => {
        addMessage(e, state)
    }
    state.sendButton.onclick = (e) => {
        addMessage(e, state)
    }
}

function addMessage(e, state){
    if( (e.code !== 'Enter' && e.type !== 'click') || state.sendMessage.value == ""){
        return;
    }

    createMessageBox(state.messageWindow, state)
}

function createMessageBox(div, state){
    const message = document.createElement('div')
    message.className = 'message mine'

    const card = document.createElement('div')
    card.className = 'message-card'

    const info = document.createElement('div')
    info.className = 'info'

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = state.sendMessage.value;
    state.sendMessage.value = ""

    info.appendChild(content)
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

function ajaxGetChat(){
    $.ajax({
        url:'c'
    })
}