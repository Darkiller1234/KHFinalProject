function redirect(params) {
    window.location.href = params
}

function commuMInit(contextPath){
    let data1 = {
        name : 'array',
        default : '최신순',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['최신순'],
            ['추천순']
        ]
    }

    let data2 = {
        name : 'filter',
        default : '제목',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['제목'],
            ['내용'],
            ['제목+내용'],
            ['글쓴이']
        ]
    }

    createSelectBox(document.getElementById('selectbox1'), data1);
    createSelectBox(document.getElementById('selectbox2'), data2);
}