function initStudyWrite(contextPath){
    initSummernote(contextPath);
    initSelectBox(contextPath);
}

function initSummernote(contextPath){
    const summernote = $('#summernote')

    const fileUpload = (files) => {
        const formData = new FormData();
        const path = contextPath;
    
        for(let file of files) {
            formData.append("fileList", file);
        }
    
        insertFile(formData, (nameList)=>{
            for(let name of nameList){
                $("#summernote").summernote("insertImage", path + "/resources/static/img/studyBoard/" + name);
            }
        })
    }

    summernote.summernote({
        placeholder: '이곳에 글을 작성해주세요. (3000Bytes 까지 가능)',
        tabsize: 2,
        height: 500, 
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
          ],
        disableResizeEditor: true,
        callbacks: {
            onImageUpload: fileUpload
        }
    });
}

function insertFile(data, callback){
    $.ajax({
        url:"uploadImg",
        type:"POST",
        data:data,
        processData: false,
        contentType: false,
        dataType: "json",
        success: callback,
        error: ()=>{
            console.log("파일 업로드 api 요청 실패")
        }
    })
}

function initSelectBox(contextPath){
    const selectBox = document.querySelector('#study-list');

    let data = {
        name : 'studyNo',
        default : '스터디 그룹 선택',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
    }

    // 매니저인 스터디 그룹 목록을 동기로 불러옴
    const onStudyLoad = (res) => {
        data.items = res.map(item => [item.studyName, item.studyNo])
    }
    ajaxLoadManagerStudy(onStudyLoad)

    createSelectBox(selectBox, data)
}

function ajaxLoadManagerStudy(callback){
    $.ajax({
        url:"manageStudy",
        async: false, // ajax를 동기로 사용
        success: callback,
        error: () => {
            console.log("스터디 목록 조회 실패")
        }
    })
}