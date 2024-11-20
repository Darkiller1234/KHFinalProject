function initStudyCreate(contextPath){
    initForm()
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
        const textarea = document.createElement('textarea')
        textarea.name = "studyInfo"
        textarea.value = input.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br>')
        studyForm.appendChild(textarea)
    }

    const input = studyForm.querySelector('.study-info')
    input.contentEditable = true;
}