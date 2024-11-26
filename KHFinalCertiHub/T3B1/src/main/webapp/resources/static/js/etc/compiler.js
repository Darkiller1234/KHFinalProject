// 셀렉트 박스
function initcompilerPage(contextPath){
    let state = {
        contextPath: contextPath,
        selectedLang: 1,
    }

    languageSelectBox(state)
    initButtonEvent(state)
    initTextarea()
}

function languageSelectBox(state){
    const selectBoxList = document.querySelectorAll('.language-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'language',
            default : 'Java',
            imgUrl : `${state.contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                ['Java', null, changeSelectedLang(state, 1)],
                ['Python3', null, changeSelectedLang(state, 2)],
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function changeSelectedLang(state, langNum){
    return () => {
        state.selectedLang = langNum;

        // 컴파일러 입력창 맨 위 표시되는 파일 이름
        const title = document.querySelector('.title')
        let titleText = ""

        // 셀렉트 박스에 사용자가 선택한 언어 표시
        const langDisplay = document.querySelector('.button-select div')
        let langDisplayText = ""

        // 코드 입력창에 기본 코드를 입력해줌
        const textarea = document.getElementById('main')
        let defaultCode = ""


        switch(langNum){
            case 1:
               titleText = "Main.java"
               langDisplayText = "Java"
               defaultCode = `import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}`
                break;
            case 2:
                titleText = "Main.py"
                langDisplayText = "Python3"
                defaultCode = `print("Hello, world!")`
                break;
        }

        title.innerHTML = titleText
        langDisplay.innerHTML = langDisplayText
        textarea.innerHTML = defaultCode
    }
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

function initButtonEvent(state){
    const executeButton = document.getElementById('executeButton')
    const result = document.getElementById('result')

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
            selectedLang: state.selectedLang
        },
        success: callback,
        error: ()=> {
            console.log('코드 실행 요청 실패')
        }
    })
}
