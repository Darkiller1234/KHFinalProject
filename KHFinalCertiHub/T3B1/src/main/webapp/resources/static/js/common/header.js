function init(){
    const navi = document.querySelector(".navi");
    const naviBody = document.querySelector(".navi-body")

    navi.addEventListener("mouseover", ()=>{
        naviBody.style.display = "block";
    })

    navi.addEventListener("mouseout",()=>{
        naviBody.style.display = "none";
    })

    naviBody.addEventListener("mouseover", ()=>{
        naviBody.style.display = "block";
    })

    naviBody.addEventListener("mouseout",()=>{
        naviBody.style.display = "none";
    })
}