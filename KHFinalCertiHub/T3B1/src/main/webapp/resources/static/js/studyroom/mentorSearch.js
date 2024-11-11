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
    let currentPage = 1;
    let pageLimit = 10;

    const loadMentor = ajaxLoadMentor(contextPath, currentPage, pageLimit)

    loadMentor();

    $(document).scroll(function(e){
        let lastScroll = 0;
        //현재 높이 저장
        let currentScroll = $(this).scrollTop();
        //전체 문서의 높이
        let documentHeight = $(document).height();
    
        //(현재 화면상단 + 현재 화면 높이)
        let nowHeight = $(this).scrollTop() + $(window).height();
    
    
        //스크롤이 아래로 내려갔을때만 해당 이벤트 진행.
        if(currentScroll > lastScroll){
    
            //nowHeight을 통해 현재 화면의 끝이 어디까지 내려왔는지 파악가능 
            //즉 전체 문서의 높이에 일정량 근접했을때 글 더 불러오기)
            if(documentHeight < (nowHeight + (documentHeight*0.1))){
                //함수콜
                loadMentor();
            }
        }
    
        //현재위치 최신화
        lastScroll = currentScroll;
    
    });
}

function ajaxLoadMentor(contextPath, currentPage, pageLimit){
    return function() {
        $.ajax({
            type:"post",
            url:"list",
            data: {
                "currentPage" : currentPage,
                "pageLimit" : pageLimit,
            },
            success: function(res) {
                console.log(res)
                createMentorCard(contextPath, res)
                currentPage++
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