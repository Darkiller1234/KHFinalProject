function addMessage(e){
    const sendMessage = document.querySelector('#sendText')
    console.log(sendMessage.value)

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

function chatScroll(){
        const messageWindow = document.querySelector('.message-window')

        messageWindow.scrollTo({
            top: messageWindow.scrollHeight,
            behavior: 'smooth'
        })
}