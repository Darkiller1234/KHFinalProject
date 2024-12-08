
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
        profileDiv.onclick = () => {
            window.open(state.contextPath + '/personal/view?pno=' + talkroom.managerNo)
        }

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
        profileDiv.onclick = () => {
            window.open(state.contextPath + '/study/detail?no=' + talkroom.studyNo)
        }

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
        profileDiv.onclick = () => {
            window.open(state.contextPath + '/personal/view?pno=' + apply.applicantNo)
        }

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
        acceptBtn.onclick = () => {
            state.applyElement = talkroomDiv
            state.applyNo = apply.applyNo
            state.studyNo = apply.studyNo
            state.applicantNo = apply.applicantNo
            state.applyKind = apply.applyKind

            ajaxAcceptApply(state, state.callbacks.onApply)
        }

        let rejectBtn = document.createElement('button')
        rejectBtn.className = 'btn-primary'
        rejectBtn.innerHTML = '거절'
        rejectBtn.onclick = () => {
            state.applyElement = talkroomDiv
            state.applyNo = apply.applyNo
            state.studyNo = apply.studyNo
            state.applicantNo = apply.applicantNo
            state.applyKind = apply.applyKind

            ajaxRejectApply(state, state.callbacks.onApply)
        }

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

function createMessageCard(state, data){
    const messageDiv = document.createElement('div')
    messageDiv.className = data.memberNo == state.memberNo ? 'message mine' : 'message'

    const card = document.createElement('div')
    card.className = 'message-card'

    // 프로필 사진
    const thumbnail = document.createElement('div')
    thumbnail.onclick = () => {
        window.open(state.contextPath + '/personal/view?pno=' + data.memberNo)
    }

    const thumbnailImg = document.createElement('img')

    thumbnail.className = 'thumbnail'
    thumbnailImg.className = 'rounded-circle'
    thumbnailImg.src = state.contextPath + data.memberImg
    thumbnail.appendChild(thumbnailImg)

    const info = document.createElement('div')
    info.className = 'info'

    const userName = document.createElement('div')
    userName.className = 'user-name'
    userName.innerText = data.memberName

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = data.messageContent;

    info.appendChild(userName)
    info.appendChild(content)

    card.appendChild(thumbnail)
    card.appendChild(info)

    messageDiv.appendChild(card)

    if(data.isLoading) {
        state.messageContent.appendChild(messageDiv)
    } else {
        state.messageContent.prepend(messageDiv)
    }
}