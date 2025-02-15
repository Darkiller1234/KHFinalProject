function initMentorSearch(contextPath){
    initSelectBox(contextPath)
    initMentorList(contextPath)
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');
    
    let data1 = {
        name : 'license',
        default : '자격증',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
    }

    // 자격증 목록 동기로 불러옴
    const onLicenseLoad = (data) => {
        data1.items = data.map(item => [item.licenseName, item.licenseNo])
    }
    ajaxLoadLicense(onLicenseLoad)

    let data2 = {
        name : 'sort',
        default : '최신순',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['최신순',1],
            ['인기순(좋아요)',2],
        ]
    }

    createSelectBox(selectBoxList[0], data1)
    createSelectBox(selectBoxList[1], data2)
}

function initMentorList(contextPath){
    // 초기값 세팅
    const loadingBar = document.querySelector('.loading-section')

    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')
    const license = urlParam.get('license')
    const sort = urlParam.get('sort')

    // 스로틀링용 변수
    let timer;
    
    let pageInfo = {
        currentPage : 1,
        pageLimit : 10,
        keyword : keyword,
        license : license,
        sort : sort,
        isEnd : false,
        loadingBar : loadingBar,
        contextPath : contextPath,
    }
    // 콜백 함수
    const onMentorLoad = (data) => {
        if(data){
            createMentorCard(pageInfo.contextPath, data)
            pageInfo.currentPage++
        } else {
            pageInfo.isEnd = true;
        }
        loadingBar.style.display = "none";
    }

    // 매개변수로 초기값 전달
    // loadMentor은 ajaxLoadMentor에서 반환하는 함수 + 매개변수에 있는 currentPage, pageLimit 값을 기억하고 있음
    // 이후 호출하면 loadMentor가 기억하고 있는 환경의 currentPage 값이 1씩 증가 ( 클로저 )
    const loadMentor = ajaxLoadMentor(pageInfo, onMentorLoad)
    loadMentor(); // 처음 한번 로딩
    // 이후 스크롤 할 때, 화면끝에 도달하면 다시 로딩
    document.onscroll = () => {
        // 우선 scroll 이벤트 함수에 걸린 setTimeout을 초기화 시킨다
        clearTimeout(timer)
        // window.scrollTop : 브라우저의 스크롤영역 맨 윗부분 ~ 스크롤바 사이의 거리, 스크롤바가 맨 위에 있을 경우 값은 0 => 스크롤을 내리면 증가
        // window.height : 브라우저에세 보여지는 부분의 크기 (= 브라우저 창 크기)
        // document.height : 전체 창의 크기( 보여지는 부분의 크기 + 안보이는 부분 )
        /*
            전체 화면(document.height)이 길게 있고, 그 중 우리는 window.height 부분만 본다.
            스크롤바의 크기 = 브라우저에세 보여지는 부분의 크기 = window.height
            즉, scrollTop + window.height가 document.height와 같다면 스크롤이 화면 끝에 도달했음을 의미
        */
        timer = setTimeout( () => {
            if($(window).scrollTop() + $(window).height() > ($(document).height() * 0.95) ){
                if(pageInfo.isEnd !== true) {
                    loadingBar.style.display = "flex";
                    loadMentor();
                } 
            }
        }, 200)
    };
}

function ajaxLoadLicense(callback){
    $.ajax({
        url:"licenseList",
        async: false, // ajax를 동기로 사용
        success: callback,
        error: () => {
            console.log("자격증 목록 조회 실패")
        }
    })
}

function ajaxLoadMentor(pageInfo, callback){
    return function() {
        $.ajax({
            url:"list",
            data: {
                "currentPage" : pageInfo.currentPage,
                "pageLimit" :  pageInfo.pageLimit,
                "keyword" : pageInfo.keyword,
                "license" : pageInfo.license,
                "sort" : pageInfo.sort,
            },
            success: callback,
            error: () => {
                console.log("멘토 목록 불러오기 실패")
            }
        })
    }
}

function createMentorCard(contextPath, res){
    const mentorList = document.querySelector('.mentor-list')

    res.forEach(data => {
        let mentorCard = document.createElement('div')
        mentorCard.className = "mentor-card"
        mentorCard.onclick = () => {
            location.href='detail?no=' + data.memberNo
        }
    
        let profile = document.createElement('div')
        profile.className = "profile-img small"
    
        let img = document.createElement("img")
        img.src = contextPath + data.memberImg
        img.className = "rounded-circle"
        
        let mentorName = document.createElement("div")
        mentorName.className = "mentor-name font-size-subtitle"
        mentorName.innerText = data.memberNickname
    
        let symbolLicense = document.createElement("div")
        symbolLicense.className = "symbol-license"
        symbolLicense.innerText = data.symbolLicense

        let mentorPop = document.createElement('div')
        mentorPop.className = "tag bgcolor3 font-size-content"
        
        let mentorPopImg = document.createElement('img')
        mentorPopImg.src = contextPath + "/resources/static/img/button/person_icon_light.png"

        mentorPop.appendChild(mentorPopImg) // 자리수 변환 함수 ( K, M )
        mentorPop.innerHTML += converseDigit(data.mentorLike) 
    
        let memberIntro = document.createElement("div")
        memberIntro.className = "member-intro font-size-footer"
        memberIntro.innerText = data.memberIntro ?? "" // data.mentorIntro가 null이거나 undefined라면 공백
    
        let tag = document.createElement("div")
        let tagImg = document.createElement("img")
    
        if( data.mentorValid == "Y"){
            tag.className = "tag valid bgcolor3";
            tagImg.src = contextPath + "/resources/static/img/button/valid_icon.png";
            tag.appendChild(tagImg)
            tag.innerHTML += "질문가능"
        } else {
            tag.className = "tag valid bgcolor4";
            tagImg.src = contextPath + "/resources/static/img/button/stop_icon.png";
            tag.appendChild(tagImg)
            tag.innerHTML += "질문불가"
        }
    
        profile.appendChild(img)
    
        mentorCard.appendChild(profile)
        mentorCard.appendChild(mentorName)
        mentorCard.appendChild(symbolLicense)
        mentorCard.appendChild(mentorPop)
        mentorCard.appendChild(memberIntro)
        mentorCard.appendChild(tag)
    
        mentorList.appendChild(mentorCard)
    });
}