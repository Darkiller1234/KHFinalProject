function persoCRInit(contextPath){
    let data1 = {
        name : 'array',
        default : '정보처리기사',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['정보처리기사'],
            ['정보보안기사'],
            ['네트워크관리사'],
            ['빅데이터분석기사']
        ]
    }

    createSelectBox(document.getElementById('selectbox1'), data1);
    
}