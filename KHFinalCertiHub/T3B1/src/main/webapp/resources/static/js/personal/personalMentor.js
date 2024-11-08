function initPersonalMentor(contextPath){
    initSelectBox(contextPath)
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.valid-choose');

    const data1 = {
        name : 'license',
        default : '가능',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['가능'],
            ['불가능'],
        ]
    } 

    createSelectBox(selectBoxList[0], data1)
}