// 셀렉트 박스
/* init 부터  */
function initcompilerPage(contextPath){
    languageSelectBox(contextPath)
}

function languageSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.language-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'language',
            default : '언어 선택',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                'Java',
                'C',
                'Python3',
                'SQL',
                'C++', 
                'C#',
            ]
        }

        createSelectBox(selectBox, data)
    })
}