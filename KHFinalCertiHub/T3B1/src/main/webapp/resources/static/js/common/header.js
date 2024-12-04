function init(contextPath, pageName, optional){
    window.onresize = () => {
        onResizeHandler();
    };
    onResizeHandler();

    switch(pageName){
        // 자격증 검색
        case "infoPage":
            initInfoPage(contextPath);
            break;

        // 커뮤니티
        case "communitySearch":
            commuMInit(contextPath);
            break;

        case "commuWInit":
            commuWInit(contextPath);
            break;

        case "commuEInit":
            commuEInit(contextPath);
            break;

        case "commuDInit":
            commuDInit(contextPath);
            break;

        case "commuSCInit":
            commuSCInit(contextPath);
            break;

        // 멘토
        case "mentorSearch":
            initMentorSearch(contextPath); // optional : 자격증 목록
            break;

        case "mentorDetail":
            initMentorDetail(contextPath, optional); // optional : 로그인 여부
            break;

        // 스터디
        case "studySearch":
            initStudySearch(contextPath);
            break;

        case "studyDetail":
            initStudyDetail(contextPath, optional); // optional : 로그인 여부
            break;

        case "studyDetailEdit":
            initStudyDetailEdit(contextPath, optional); // optional : 모집중 여부
            break;

        case "studyCreate":
            initStudyCreate(contextPath)
            break;

        case "studyBoard":
            initStudyBoard(contextPath);
            break;

        case "studyBoardView":
            initStudyBoardView(contextPath, optional); // optional : 모집중 여부
            break;

        case "studyBoardEdit":
            initStudyBoardEdit(contextPath);
            break;

        case "studyWrite":
            initStudyWrite(contextPath); // 멤버 번호
            break;

        // 개인 페이지
        case "personalCertiRegi":
            persoCRInit(contextPath);
            break;
            
        case "PersonalPmSc":
            persoMSInit(contextPath);
            break;

        case "personalProfileEdit":
            initPersonalProfileEdit(contextPath);
            break;

        case "personalMentor":
            initPersonalMentor(contextPath);
            break;

        case "personalView":
            initPersonalView(contextPath);
            break;

        case "personalMentorEnroll":
            initPersonalMentorEnroll(contextPath);
            break;

        case "personalChangePage":
            initPersonalChangePage(contextPath);
            break;

        case "personalViewSchedule":
            initPersonalViewSc(contextPath);
            break;

        // 메시지 페이지
        case "messageMain":
            initMessageMain(contextPath);
            break;

        // 관리자 페이지
        case "managerPage":
            initManagerPage(contextPath);
            break;

        case "listPage":
            initListPage(contextPath);
            break;

        case "reportPage":
            initReportPage(contextPath);
            break;

        case "userPage":
            initUserPage(contextPath);
            break;

        case "noticePage":
            initNoticePage(contextPath);
            break;

        case "noticeWrite":
            initNoticeWrite(contextPath);
            break;

        case "certifyPage":
            initCertifyPage(contextPath);
            break;

        // 기타(컴파일러)
        case "compilerPage":
            initcompilerPage(contextPath);
            break;

        // 기타(챗봇 도우미)
        case "chatbot":
            initChatbotPage(contextPath);
            break;
    }
}

function onResizeHandler(){
    initNaviDisplay(); // 화면 사이즈별 Navi 요소 display 설정
    naviEventHanlder(); // 화면 사이즈에 맞춰서 navi 이벤트 부여
    menuButtonEventHandler(); // 화면 사이즈에 맞춰서 menuButton 이벤트 설정
}

function toggleNaviBodyOn(){
    const naviBody = document.querySelector(".navi-body")
    naviBody.style.display = "block";
}

function toggleNaviBodyOff(){
    const naviBody = document.querySelector(".navi-body")
    naviBody.style.display = "none";
}

function naviEventHanlder(){
    // PC일때 이벤트 부여할 요소
    const navi = document.querySelector(".navi");
    const naviBody = document.querySelector(".navi-body");

    // 모바일일때 이벤트 부여할 요소
    const naviHeadList = document.querySelectorAll(".navi-head ul li");

    let isPCView = window.innerWidth >= 721;

    if(isPCView) {
        naviHeadList.forEach((el) => {
            el.onmouseover = null;
            el.onmouseout = null;
            document.querySelector(`.${el.dataset.name}`).style.display = "block"
        })
        /* 내비게이터 상위 분류 */
        navi.onmouseover = toggleNaviBodyOn
        navi.onmouseout = toggleNaviBodyOff

        /* 내비게이터 하위 분류 */
        naviBody.onmouseover = toggleNaviBodyOn
        naviBody.onmouseout = toggleNaviBodyOff
    } else {
        navi.onmouseover = null;
        navi.onmouseout = null;
        naviBody.onmouseover = null;
        naviBody.onmouseout = null;
        
        naviHeadList.forEach( (el) => {
                let subEl = document.querySelector(`.${el.dataset.name}`);
                subEl.style.display = "none"

                el.onmouseover = () => {
                    subEl.style.display = "block"
                    naviBody.onmouseover = () => {
                        subEl.style.display = "block"
                    }
                };
                el.onmouseout = () => {
                    subEl.style.display = "none"
                    naviBody.onmouseout = () => {
                        subEl.style.display = "none"
                    }
                };
            }
        )
    }
}

function initNaviDisplay(){
    const navi = document.querySelector(".navi");
    const naviHead = document.querySelector(".navi-head");
    const naviBody = document.querySelector(".navi-body");

    let isPCView = window.innerWidth >= 721;

    /* 
        내비게이터의 최상단 메뉴는 pc버전에서만 보여줌
        pc 디폴트
        navi flex
        navi-head block
        navi-body none

        mobile 디폴트
        navi none
        navi-head block
        navi-body none
    */

    navi.style.display = isPCView ? "flex" : "none";
    naviHead.style.display = isPCView ? "block" : "none";
    naviBody.style.display = "none";
}

/* pc버전은 메뉴버튼을 누르면 navi-body를 숨겼다 보여줌 */
function toggleNaviPC(){
    const naviBody = document.querySelector(".navi-body");

    naviBody.style.display = naviBody.style.display === "block" ?
    "none" : "block"
}

/* 모바일버전은 메뉴버튼을 누르면 navi를 숨겼다 보여줌 */
function toggleNaviMobile(){
    const navi = document.querySelector(".navi");
    const naviHead = document.querySelector(".navi-head");
    const naviBody = document.querySelector(".navi-body");

    navi.style.display = navi.style.display === "flex" ?
    "none" : "flex"
    naviHead.style.display = naviHead.style.display === "block" ?
    "none" : "block"
    naviBody.style.display = naviHead.style.display
}

function menuButtonEventHandler(){
    const menuButton = document.querySelector(".section img")
    let innerWidth = window.innerWidth;

    menuButton.onclick = innerWidth >= 721 ? toggleNaviPC : toggleNaviMobile
}