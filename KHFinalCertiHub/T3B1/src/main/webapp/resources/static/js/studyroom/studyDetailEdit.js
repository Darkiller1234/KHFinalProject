function initStudyDetailEdit(contextPath, isRecruit){
    initForm()
    initSelectBox(contextPath, isRecruit)
}

function loadImg(_input){
    // 파일이 선택됬다면 files에 파일이 들어있을 것
    if(_input.files.length == 1){
        const reader = new FileReader();

        // 해당 파일을 읽어들여 해당 파일만의 고유한 URL 부여
        reader.readAsDataURL(_input.files[0])

        // 파일을 읽어들였다면 실행
        reader.onload = (ev)=>{
            document.querySelector('#profile').src = ev.target.result;
        }
    }
}

function initForm(){
    const studyForm = document.getElementById('studyForm')
    
    studyForm.onsubmit = () => {
        const text =  studyForm.querySelector("textarea[name=studyInfo]");
        text.value = text.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
}


function initSelectBox(contextPath, isRecruit){
    const selectBoxList = document.querySelectorAll('.recruit-option');

    const data = {
        name : 'studyRecruit',
        default : isRecruit == 'Y' ? '모집중' : '모집마감',
        defaultValue : isRecruit ,
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['모집중','Y'],
            ['모집마감','N'],
        ]
    }

    createSelectBox(selectBoxList[0], data)
}