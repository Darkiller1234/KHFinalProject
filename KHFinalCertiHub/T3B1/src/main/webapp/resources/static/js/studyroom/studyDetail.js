function initStudyDetail(contextPath){
    initMemberList(contextPath);
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
            url:"memberList",
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

        member.appendChild(memberInfo)

        studyList.appendChild(member)
    });
}