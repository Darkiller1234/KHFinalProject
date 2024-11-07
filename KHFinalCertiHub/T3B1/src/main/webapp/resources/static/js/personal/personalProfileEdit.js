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
            ['네트워크관리사',test],
            ['정보보안기사'],
            ['빅데이터분석기사']
        ]
    } 

    createSelectBox(selectBoxList[0], data1)
}

function test(){
    alert('까꿍')
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

    const wrapper = document.createElement('div')
    wrapper.className = 'look-license'

    const licenseName = document.createElement('div')
    licenseName.className = 'font-size-subtitle'
    licenseName.innerText = select.innerText

    const deleteButton = document.createElement('button')
    deleteButton.onclick = removeLookLicense;

    wrapper.appendChild(licenseName)
    wrapper.appendChild(deleteButton)


}

