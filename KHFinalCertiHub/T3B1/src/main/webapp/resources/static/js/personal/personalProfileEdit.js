function initPersonalProfileEdit(contextPath){
    initSelectBox(contextPath);
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.license-choose');

    const data1 = {
        name : 'license',
        default : '정보처리기사',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['정보처리기사'],
            ['네트워크관리사'],
            ['정보보안기사'],
            ['빅데이터분석기사']
        ]
    } 

    createSelectBox(selectBoxList[0], data1)

    $("#save-btn").on("click", function(){
        const fileInput = document.querySelector('#profileInput');
        const formData = new FormData();
        const licenseList = document.querySelector('.look-license-list');
        const licenseNames = Array.from(licenseList.querySelectorAll('.look-license .font-size-subtitle')).map(license => license.innerText);


        // 파일이 있는 경우 추가
        if (fileInput.files.length > 0) {
            formData.append('memberImg', fileInput.files[0]);
        }
        formData.append('nickName', document.querySelector('input[name="memberNickname"]').value)
        formData.append('intro', document.querySelector('textarea[name="member-intro"]').textContent)
        formData.append('licenseNames', JSON.stringify(licenseNames));
        saveProfile(formData, function (result) {
            console.log(result);
        })
    })


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

function removeLookLicense(_this){
    _this.parentNode.remove();
}

function addLookLicense(){
    const select = document.querySelector('.button-select div')
    const licenseList = document.querySelector('.look-license-list')

    // 중복 체크: 이미 추가된 요소의 텍스트와 비교
    const existingLicenses = Array.from(licenseList.querySelectorAll('.look-license .font-size-subtitle'));
    if (existingLicenses.some(license => license.innerText === select.innerText)) {
        alert('이미 추가된 항목입니다.');
        return;
    }

    const wrapper = document.createElement('div')
    wrapper.className = 'look-license'

    const licenseName = document.createElement('div')
    licenseName.className = 'font-size-subtitle'
    licenseName.innerText = select.innerText

    const deleteButton = document.createElement('button')
    deleteButton.onclick = () =>{
        wrapper.remove()
    };

    const buttonImage = document.createElement('img')
    buttonImage.src = '../resources/static/img/button/x_icon_red.png';
    
    deleteButton.appendChild(buttonImage)

    wrapper.appendChild(licenseName)
    wrapper.appendChild(deleteButton)

    licenseList.append(wrapper)
}

