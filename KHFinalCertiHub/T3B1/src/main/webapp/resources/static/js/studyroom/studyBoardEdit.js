function initStudyBoardEdit(contextPath){
    initSummernote(contextPath);
}

function initSummernote(contextPath){
    const summernote = $('#summernote')

    const fileUpload = (files) => {
        const formData = new FormData();
        const path = contextPath;
    
        for(let file of files) {
            formData.append("fileList", file);
        }
    
        insertFile(formData, contextPath, (nameList)=>{
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

function insertFile(data, contextPath, callback){
    $.ajax({
        url: contextPath + "/study/uploadImg",
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