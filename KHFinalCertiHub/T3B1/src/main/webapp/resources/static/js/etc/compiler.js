// 셀렉트 박스
function initcompilerPage(contextPath){
    languageSelectBox(contextPath)
    initButtonEvent(contextPath)
    initTextarea()
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

function initTextarea(){
    const textarea = document.getElementById('main')

    textarea.onkeydown = (ev) => {
        if(ev.key == 'Tab'){
            // 탭키 누를시 커서 이동 이벤트(기본이벤트) 방지
            ev.preventDefault();

            // input, textarea에서 사용 가능한 커서 위치 요소
            const cursor = textarea.selectionEnd; // 커서 끝지점

            // 현재 커서 위치에 탭 삽입
            textarea.value = textarea.value.substring(0, cursor) + '\t' + textarea.value.substring(cursor);

            // 커서를 탭 뒤로 이동 ( 삽입한 문자열 길이(1)만큼 더하기 )
            textarea.selectionEnd = cursor + 1;
        }
    }
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