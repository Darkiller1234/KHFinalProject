function initStudyDetail(contextPath, isLogin){
    initMemberList(contextPath);
    initApplyButton(isLogin)
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


function initApplyButton(isLogin){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const studyNo = urlParam.get('no')

    // 모달 요소를 가져오기
    const modal = new bootstrap.Modal(document.getElementById('apply-modal'));
    const applyButton = document.querySelector('#applyButton')

    const onApplyStudy = (res) => {
        if(res.success == 'Y'){
            modal.show();
            applyButton.className += ' applied'
            applyButton.disabled = true
            applyButton.innerText = '신청완료'
        } else if(res.success == 'E') {
            alert('이미 신청하셨습니다.');
        } else {
            alert('스터디 신청에 실패하였습니다...')
        }
    }

    if(isLogin == 'Y'){
        applyButton.onclick = () => {
            ajaxApplyStudy(studyNo, onApplyStudy)
        }
    } else if(isLogin == 'E'){
        applyButton.onclick = () => {
            alert('매니저 본인은 신청할 수 없습니다.')
        }
    } 
    else {
        applyButton.onclick = () => {
            alert('로그인한 유저만 신청할 수 있습니다.')
        }
    }
}

function ajaxApplyStudy(studyNo, callback){
    $.ajax({
        url:'applyStudy',
        type:"post",
        data:{
            studyNo: studyNo,
        },
        success: callback,
        error: () => {
            console.log('스터디 신청 요청 실패')
        }
    })
}