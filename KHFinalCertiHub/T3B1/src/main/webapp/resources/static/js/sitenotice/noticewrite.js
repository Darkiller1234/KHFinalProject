function initNoticeWrite(contextPath) {
    const summernote = $('#summernote')

    const fileUpload = (files) => {
        const formData = new FormData();
        const path = contextPath;

        for(let file of files) {
            formData.append("fileList", file);
        }

        insertFile(formData, (nameList)=>{
            for(let name of nameList) {
                $("#summernote").summernote("insertImage",path + "/resources/static/img/studyBoard" + name);
            }
        })
    }

    summernote.summernote({
        placholder: '이곳에 글을 작성해주세요.(3000Bytes 까지 가능)',
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