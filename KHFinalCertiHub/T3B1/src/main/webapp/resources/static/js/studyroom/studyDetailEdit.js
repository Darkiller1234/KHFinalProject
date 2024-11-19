function initStudyDetailEdit(contextPath, isRecruit){
    initForm()
    initBanButton()
    initSelectBox(contextPath, isRecruit)
    initMemberList(contextPath)
}

function loadImg(_input){
    // 파일이 선택됬다면 files에 파일이 들어있을 것
    if(_input.files.length == 1){
        const reader = new FileReader();

        // 해당 파일을 읽어들여 해당 파일만의 고유한 URL 부여
        reader.readAsDataURL(_input.files[0])

        // 파일을 읽어들였다면 실행
        reader.onload = (ev)=>{
            document.querySelector('#profile').src = ev.target.result;
        }
    }
}

function initForm(){
    const studyForm = document.getElementById('studyForm')
    const input = studyForm.querySelector('.study-info')
    input.contentEditable = true;
    
    studyForm.onsubmit = () => {
        const text =  studyForm.querySelector("textarea[name=studyInfo]");

        text.value = input.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
}

function initBanButton(){
    const banButton = document.getElementById('banButton')

    const onBanMember = () => {
        
    }

    banButton.onclick = () => {

    }
}

function ajaxBanMember(){
    return () => {

    }
}


function initSelectBox(contextPath, isRecruit){
    const selectBoxList = document.querySelectorAll('.recruit-option');

    const data = {
        name : 'studyRecruit',
        default : isRecruit == 'Y' ? '모집중' : '모집마감',
        defaultValue : isRecruit ,
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['모집중','Y'],
            ['모집마감','N'],
        ]
    }

    createSelectBox(selectBoxList[0], data)
}


function initMemberList(contextPath){
    // 콜백 함수
    const onMemberLoad = (data) => {
        if(data){
            createMemberCard(pageInfo.contextPath, data)
            pageInfo.currentPage++
            // 들어온 데이터 개수가 pageLimit보다 적다면 마지막 페이지
            if(data.length != pageInfo.pageLimit){
                pageInfo.isEnd = true;
                loadingButton.style.display = "none"
            }
        } else {
            pageInfo.isEnd = true;
            loadingButton.style.display = "none"
        }
    }
    
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const no = urlParam.get('no')

    // 스로틀링용 변수
    let timer;

    // 초기값 세팅 ( 객체 리터럴 )
    let pageInfo = {
        currentPage : 1,
        pageLimit : 10,
        no: no,
        isEnd : false,
        contextPath : contextPath,
    }

    // 매개변수로 초기값 전달
    // pageInfo는 객체이므로 매개변수로 참조값이 전달된다. ( 클로저 )
    const loadMember = ajaxLoadMember(pageInfo, onMemberLoad)
    loadMember(); // 처음 한번 로딩

    const loadingButton = document.querySelector('.load-member')

    loadingButton.onclick = () => {
        clearTimeout(timer)

        timer = setTimeout( () => {
            if(pageInfo.isEnd !== true) {
                loadMember();
            }  
        }, 200)
    }

    const searchButton = document.querySelector("#keyword+button")

    searchButton.onclick = () => {
        clearTimeout(timer)

        pageInfo.currentPage = 1
        pageInfo.isEnd = false
        loadingButton.style.display = "flex"

        document.querySelector('.mentor-intro').innerHTML = ""
        const searchInput = document.querySelector('#keyword')
        pageInfo.keyword = searchInput.value

        timer = setTimeout( () => {
            if(pageInfo.isEnd !== true) {
                loadMember();
            } 
        }, 200)
    }
}

function ajaxLoadMember(pageInfo, callback){
    return function() {
        $.ajax({
            type:"post",
            url: pageInfo.contextPath + "/study/memberList",
            data: {
                "currentPage" : pageInfo.currentPage,
                "pageLimit" :  pageInfo.pageLimit,
                "keyword" : pageInfo.keyword,
                "no" : pageInfo.no,
            },
            success: callback,
            error: () => {
                console.log("멘토 목록 불러오기 실패")
            }
        })
    }
}

function createMemberCard(contextPath, res){
    const studyList = document.querySelector('.mentor-intro')

    // 멤버 번호 데이터 필요하면 data.memberNo에서 꺼내쓸것
    res.forEach(data => {
        let member = document.createElement('div')
        member.className = "member"
        member.dataset.value = data.memberNo

        member.onclick = (ev) => {
            const modal = new bootstrap.Modal(document.getElementById('banConfirm'))
            const banUserName = document.getElementById('ban-user-name')
            banUserName.innerText = data.memberNickname
            // ev.target : 이벤트를 발생시킨 요소( 클릭이면 내가 누른 요소 )
            // ev.currentTarget : 이벤트가 부착된 요소의 최상위 부모 반환
            banUserName.dataset.value = ev.currentTarget.dataset.value

            modal.show()
        }

        let memberInfo = document.createElement('div')
        memberInfo.className = "member-info"

        let profile = document.createElement('div')
        profile.className = "profile"

        let profileImg = document.createElement('img')
        profileImg.src = contextPath + data.memberImg
        profileImg.className = "rounded-circle"

        let memberName = document.createElement('div')
        memberName.className = "name font-size-content"
        memberName.innerText = data.memberNickname;

        profile.appendChild(profileImg)

        memberInfo.appendChild(profile)
        memberInfo.appendChild(memberName)

        let buttonDiv = document.createElement('div')

        let deleteButton = document.createElement('button')
        deleteButton.className = "close-button"


        let buttonImg = document.createElement('img')
        buttonImg.src = contextPath + '/resources/static/img/button/x_icon.png'

        deleteButton.appendChild(buttonImg)
        buttonDiv.appendChild(deleteButton)

        member.appendChild(memberInfo)
        member.appendChild(buttonDiv)

        studyList.appendChild(member)
    });
}