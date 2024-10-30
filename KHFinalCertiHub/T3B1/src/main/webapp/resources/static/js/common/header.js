function init(){
    window.onresize = () => {
        onResizeHandler();
    };
    
    const navi = document.querySelector(".navi");
    const naviBody = document.querySelector(".navi-body")

    /* 내비게이터 상위 분류 */
    navi.addEventListener("mouseover", ()=>{
        naviBody.style.display = "block";
    })

    navi.addEventListener("mouseout",()=>{
        naviBody.style.display = "none";
    })

    /* 내비게이터 하위 분류 */
    naviBody.addEventListener("mouseover", ()=>{
        naviBody.style.display = "block";
    })

    naviBody.addEventListener("mouseout",()=>{
        naviBody.style.display = "none";
    })

    onResizeHandler();
}

function onResizeHandler(){
    naviResizeHandler();
    menuButtonResizeHandler();
}

/* 
    내비게이터의 최상단 메뉴는 pc버전에서만 보여줌
    pc 디폴트
    navi flex
    navi-head block

    mobile 디폴트
    navi none
    navi-head block
*/
function naviResizeHandler(){
    const navi = document.querySelector(".navi");
    const naviHead = document.querySelector(".navi-head");

    let isPCView = window.innerWidth >= 721;

    navi.style.display = isPCView ? "flex" : "none";
    naviHead.style.display = isPCView ? "block" : "none";
}

/* pc버전은 메뉴버튼을 누르면 navi-body를 숨겼다 보여줌 */
function pcMenuDisplay(){
    const naviBody = document.querySelector(".navi-body")

    naviBody.style.display = naviBody.style.display === "block" ?
    "none" : "block"
}

/* 모바일버전은 메뉴버튼을 누르면 navi를 숨겼다 보여줌 */
function mobileMenuDisplay(){
    const navi = document.querySelector(".navi");
    const naviHead = document.querySelector(".navi-head");
    const naviBody = document.querySelector(".navi-body");

    navi.style.display = navi.style.display === "flex" ?
    "none" : "flex"
    naviHead.style.display = naviHead.style.display === "block" ?
    "none" : "block"
    naviBody.style.display = naviHead.style.display;
}

function menuButtonResizeHandler(){
    const menuButton = document.querySelector(".etc img")
    let innerWidth = window.innerWidth;

    menuButton.removeEventListener("click", pcMenuDisplay )
    menuButton.removeEventListener("click", mobileMenuDisplay )

    menuButton.addEventListener("click", innerWidth >= 720 ?
        pcMenuDisplay : mobileMenuDisplay
    )
}