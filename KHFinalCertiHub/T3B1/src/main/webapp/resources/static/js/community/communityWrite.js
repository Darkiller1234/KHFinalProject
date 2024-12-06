//썸머노트에 이미지업로드가 발생하였을 때 동작하는 함수
function fileUpload(files, contextPath) {
    //썸머노트는 이미지를 추가하면 해당 이미지파일을 전달해준다.
    //callbacks에 onImageUpload를 작성하지 않을경우 자동으로 이미지를 string으로 변환하여 준다.
    //callbacks에 onImageUpload를 작성할 경우 해당 이미지 경로를 직접 작성해 주어야 한다.

    //파일업로드 할 때는 form태그에서 encType을 multipart/form-data형식으로
    //요청했던 것처럼 js객체에 FormData객체를 이용해서 ajax요청을 전달해준다.

    const fd = new FormData();
    for (let file of files) {
        fd.append("fileList", file);
    }

    insertFile(fd, function (nameList) {
        for (let name of nameList) {
            $("#summernote").summernote("insertImage", contextPath + "/resources/static/img/board/" + name);
        }
    })
}

function insertFile(data, callback){
    		
    $.ajax({
        url: "write/upload",
        type: "POST",
        data: data,
        processData: false, //기본이 true -> 전송하는 data를 string으로 변환해서 요청
        contentType: false, //
        dataType: "json", //받을 때 타입 
        success: function(res){
            callback(res)
        },
        error: function(){
            console.log("파일업로드 api요청 실패")
        } 
    })
}

function commuWInit(contextPath) {
    const summernote = $('#summernote')

    summernote.summernote({
        placeholder: '이곳에 글을 작성해주세요. (3000Bytes 까지 가능)',
        tabsize: 2,
        height: 500,
        disableResizeEditor: true,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ],
        callbacks: {
            onImageUpload: (files) => fileUpload(files, contextPath)
            // onImageUpload: function(files) {
            // 	fileUpload(files, contextPath);
            // }
        }
    });

    const scrollContainer = document.querySelector('.scroll-container');

    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return; // 드래그 상태가 아닐 때 종료
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // 스크롤 속도를 조절하세요
        scrollContainer.scrollLeft = scrollLeft - walk;
    });



    $("#submitWrite").on("click", function() {
        const checkedRadio = document.querySelector('input[name="btnradio"]:checked');
        document.querySelector('input[name="tabNo"]').value = checkedRadio.value;
    });




    poppularAll(null, function(result){
        result.forEach((boardT) => {
            document.querySelector('#popular-list-area-all').innerHTML += `
                <div class="popular-div" id="popularAll${boardT.boardNo}">
                    <span>${boardT.boardTitle}</span><span>[${boardT.replyCount}]</span><span>${boardT.likeCount - boardT.hateCount}</span>
                </div>
            `
        });
        result.forEach((boardT) => {
            $(`#popularAll${boardT.boardNo}`).on("click", function(){
                location.href= `detail?cno=${boardT.boardNo}&certiNo=${boardT.licenseNo}`
            });
        })
    })
    
    poppularThis({licenseNo: urlParam.get('certiNo')}, function(result){
        result.forEach((boardT) => {
            document.querySelector('#popular-list-area-this').innerHTML += `
                <div class="popular-div" id="popularThis${boardT.boardNo}">
                    <span>${boardT.boardTitle}</span><span>[${boardT.replyCount}]</span><span>${boardT.likeCount - boardT.hateCount}</span>
                </div>
            `
    
        });
        result.forEach((boardT) => {
            $(`#popularThis${boardT.boardNo}`).on("click", function(){
                location.href= `detail?cno=${boardT.boardNo}&certiNo=${boardT.licenseNo}`
            });
        })
    })
}





function getCheckedRadioValue() {
    const checkedRadio = document.querySelector('input[name="btnradio"]:checked');
    document.querySelector('input[name="tabNo"]').value = checkedRadio.value;
}



function poppularAll(data, callback){
    $.ajax({
        url: "detail/poppularAll",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("전체개시판 인기글 ajax 오류");
        }
    })
}

function poppularThis(data, callback){
    $.ajax({
        url: "detail/poppularThis",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("현재개시판 인기글 ajax 오류");
        }
    })
}