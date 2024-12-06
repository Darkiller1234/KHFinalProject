function persoCRInit(contextPath){
    

    let data1 = {
        name : 'array',
        default : '',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            
        ]
    }

    getNotOwnCertiList(null, function(result){
        if(result.length === 0){
            createSelectBox(document.getElementById('selectbox1'), data1);
        } else{
            data1.items = result.map(item => [item]);
            data1.default = result[0];
            createSelectBox(document.getElementById('selectbox1'), data1);
            document.querySelector('input[name="array"]').value = result[0];
        }
        
    })

    


    $("#regi-btn").on("click", () => regiBtnClick(contextPath))

    
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

function regiBtnClick(contextPath){
    $("#regi-btn").off("click");
    document.querySelector('#modal-text').textContent = "잠시만 기다려주세요..."
    
    const fileInput = document.querySelector('#profileInput');
    const formData = new FormData();
    // const licenseList = document.querySelector('.look-license-list');
    // const licenseNames = Array.from(licenseList.querySelectorAll('.look-license .font-size-subtitle')).map(license => license.innerText);


    // 파일이 있는 경우 추가
    if (fileInput.files.length > 0) {
        
        formData.append('memberImg', fileInput.files[0]);
    }
    else{
        document.querySelector('#modal-text').textContent = "자격증 파일을 올려주세요."
        $("#regi-btn").on("click", regiBtnClick);
        return;
    }
    formData.append('licenseName', document.querySelector('#selectbox1 > .custom-select > .button-select > div').textContent)
    regiCerti(formData, function (result) {
        if(result === 1){
            document.querySelector('#modal-text').textContent = "신청을 성공하셨습니다."
        } else {
            document.querySelector('#modal-text').textContent = "신청 실패"
        }
        document.querySelector('#selectbox1').innerHTML = '';
        let data1 = {
            name : 'array',
            default : '',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                
            ]
        }
    
        getNotOwnCertiList(null, function(result){
            if(result.length === 0){
                createSelectBox(document.getElementById('selectbox1'), data1);
            } else{
                data1.items = result.map(item => [item]);
                data1.default = result[0];
                createSelectBox(document.getElementById('selectbox1'), data1);
                document.querySelector('input[name="array"]').value = result[0];
                $("#regi-btn").on("click", () => regiBtnClick(contextPath))
            }
        })

        
    })
}