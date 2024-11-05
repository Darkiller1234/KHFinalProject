function initMentorSearch(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    const data1 = {
        name : 'license',
        default : '자격증',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            '정보처리기사',
            '네트워크관리사',
            '정보보안기사',
            '빅데이터분석기사'
        ]
    } 

    const data2 = {
        name : 'sort',
        default : '최신순',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            '최신순',
            '인기순(좋아요)',
        ]
    } 

    createSelectBox(selectBoxList[0], data1)
    createSelectBox(selectBoxList[1], data2)
}