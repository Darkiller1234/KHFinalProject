function initStudyDetail(contextPath){
    initSelectBox(contextPath);
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');
    
    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'isRecruit',
            default : '마감',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                '모집중',
                '마감'
            ]
        }

        createSelectBox(selectBox, data)
    })
}