function persoMSInit(contextPath){
    document.getElementById('start-cal').value = new Date().toISOString().substring(0, 10);
    document.getElementById('end-cal').value = new Date().toISOString().substring(0, 10);
    

    let data1 = {
        name : 'array',
        default : '정보처리기사',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            '정보처리기사',
            '정보보안기사',
            '네트워크관리사',
            '빅데이터분석기사'
        ]
    }

    createSelectBox(document.getElementById('alarm-select'), data1);

    let data2 = {
        name : 'array',
        default : '정보처리기사',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            '정보처리기사',
            '정보보안기사',
            '네트워크관리사',
            '빅데이터분석기사'
        ]
    }

    createSelectBox(document.getElementById('repeat-select'), data2);

    let data3 = {
        name : 'array',
        default : '정보처리기사',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            '정보처리기사',
            '정보보안기사',
            '네트워크관리사',
            '빅데이터분석기사'
        ]
    }

    createSelectBox(document.getElementById('repeat-count-select'), data3);
}