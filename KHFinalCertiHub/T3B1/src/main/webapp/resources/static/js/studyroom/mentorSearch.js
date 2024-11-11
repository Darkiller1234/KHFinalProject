function initMentorSearch(contextPath){
    initSelectBox(contextPath)
    initMentorList(contextPath)
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    const data1 = {
        name : 'license',
        default : '자격증',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['정보처리기사'],
            ['네트워크관리사'],
            ['정보보안기사'],
            ['빅데이터분석기사']
        ]
    } 

    const data2 = {
        name : 'sort',
        default : '최신순',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['최신순'],
            ['인기순(좋아요)'],
        ]
    } 

    createSelectBox(selectBoxList[0], data1)
    createSelectBox(selectBoxList[1], data2)
}

function initMentorList(contextPath){
    // 초기값 세팅 ( 이 값은 변하지 않음 )
    const loadingBar = document.querySelector('.loading-section')
    let currentPage = 1;
    let pageLimit = 10;

    // 매개변수로 초기값 전달
    // loadMentor은 ajaxLoadMentor에서 반환하는 함수 + 매개변수에 있는 currentPage, pageLimit 값을 기억하고 있음
    // 이후 호출하면 loadMentor가 기억하고 있는 환경의 currentPage 값이 1씩 증가 ( 클로저 )
    const loadMentor = ajaxLoadMentor(contextPath, currentPage, pageLimit, loadingBar)
    loadMentor(); // 처음 한번 로딩

    // 이후 스크롤 할 때, 화면끝에 도달하면 다시 로딩
    $(document).scroll( () => {
        // window.scrollTop : 브라우저의 스크롤영역 맨 윗부분 ~ 스크롤바 사이의 거리, 스크롤바가 맨 위에 있을 경우 값은 0 => 스크롤을 내리면 증가
        // window.height : 브라우저에세 보여지는 부분의 크기 (= 브라우저 창 크기)
        // document.height : 전체 창의 크기( 보여지는 부분의 크기 + 안보이는 부분 )
        /*
            전체 화면(document.height)이 길게 있고, 그 중 우리는 window.height 부분만 본다.
            스크롤바의 크기 = 브라우저에세 보여지는 부분의 크기 = window.height
            즉, scrollTop + window.height가 document.height와 같다면 스크롤이 화면 끝에 도달했음을 의미
        */ 
        if($(window).scrollTop() + $(window).height() > ($(document).height() * 0.95) ){
            loadingBar.style.display = "flex";
            loadMentor();
        }
    });
}

function ajaxLoadMentor(contextPath, currentPage, pageLimit, loadingBar){
    return function() {
        $.ajax({
            type:"post",
            url:"list",
            data: {
                "currentPage" : currentPage,
                "pageLimit" : pageLimit,
            },
            success: function(res) {
                createMentorCard(contextPath, res)
                currentPage++
                loadingBar.style.display = "none";
            },
            error: function() {
                console.log("ajax 요청 실패")
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
            location.href='detail'
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
        mentorCard.appendChild(memberIntro)
        mentorCard.appendChild(tag)
    
        mentorList.appendChild(mentorCard)
    });
}