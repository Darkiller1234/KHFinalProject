function initStudySearch(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    const data1 = {
        name : 'license',
        default : '모집중',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['모집중'],
            ['모집마감'],
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