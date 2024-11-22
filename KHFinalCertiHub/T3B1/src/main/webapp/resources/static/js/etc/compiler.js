// 셀렉트 박스
function initcompilerPage(contextPath){
    languageSelectBox(contextPath)
    initButtonEvent(contextPath)
}

function languageSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.language-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'language',
            default : '언어 선택',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                ['Java'],
                ['C'],
                ['Python3'],
                ['SQL'],
                ['C++'], 
                ['C#'],
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function initButtonEvent(contextPath){
    const executeButton = document.getElementById('executeButton')
    const result = document.getElementById('result')

    let state = {
        contextPath: contextPath,
    }

    const onRunCode = (res)=> {
        result.innerText = res.result
    }

    executeButton.onclick = () => {
        const textarea = document.getElementById('main')
        state.code = textarea.value
        ajaxRunCode(state, onRunCode)
    }
}

function ajaxRunCode(state, callback){
    $.ajax({
        url: state.contextPath + '/compiler/run',
        type:'post',
        data: {
            code: state.code,
        },
        success: callback,
        error: ()=> {
            console.log('코드 실행 요청 실패')
        }
    })
}