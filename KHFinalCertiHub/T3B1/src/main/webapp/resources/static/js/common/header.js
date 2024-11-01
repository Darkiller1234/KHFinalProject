function init(){
    window.onresize = () => {
        onResizeHandler();
    };

    onResizeHandler();
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