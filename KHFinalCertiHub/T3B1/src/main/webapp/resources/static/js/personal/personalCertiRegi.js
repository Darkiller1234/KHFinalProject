function persoCRInit(contextPath){
    

    let data1 = {
        name : 'array',
        default : '정보처리기사',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            
        ]
    }

    getNotOwnCertiList(null, function(result){
        data1.items = result.map(item => [item]);
        console.log(result)
        console.log(data1.items)
        createSelectBox(document.getElementById('selectbox1'), data1);
    })

    


    $("#regi-btn").on("click", regiBtnClick)

    
}

// 숨겨진 파일 입력창을 클릭
function chooseImg(){
    const profileInput = document.querySelector('#profileInput');
    profileInput.click();
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

function regiBtnClick(){
    $("#regi-btn").off("click");
    const fileInput = document.querySelector('#profileInput');
    const formData = new FormData();
    const licenseList = document.querySelector('.look-license-list');
    const licenseNames = Array.from(licenseList.querySelectorAll('.look-license .font-size-subtitle')).map(license => license.innerText);


    // 파일이 있는 경우 추가
    if (fileInput.files.length > 0) {
        
        formData.append('memberImg', fileInput.files[0]);
    }
    else{
        document.querySelector('#modal-text').textContent = "자격증 파일을 올려주세요."
        $("#regi-btn").on("click", regiBtnClick);
        return;
    }
    formData.append('nickName', document.querySelector('input[name="memberNickname"]').value)
    formData.append('intro', document.querySelector('textarea[name="member-intro"]').textContent)
    formData.append('licenseNames', JSON.stringify(licenseNames));
    saveProfile(formData, function (result) {
        console.log(result);
    })
    $("#regi-btn").on("click", regiBtnClick)
}