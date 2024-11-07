function sideClick(_this){
    const selected = _this.value;
    const extendMenu = document.querySelector('.side-extend');
    /* 
        previousOption = html data태그값
        이전에 눌렀던 side menu 선택값을 저장해둠
        1 : 멘토 , 2 : 스터디그룹 , 3 : 알림
    */

    /* 눌렀던 사이드 메뉴를 또 누른다면 */
    if(extendMenu.dataset.previousOption === _this.value){
        /* extend 메뉴를 펼치지 않음 */
        extendMenu.style.display = 'none';
        extendMenu.dataset.previousOption = "";
        return;
    }

    /* 다른 사이드 메뉴 선택시 실행 */
    extendMenu.style.display = 'block';
    extendMenu.dataset.previousOption = selected;
}

function talkroomClick(_this){
    const messageNotFound = document.querySelector('.message-section .not-found');

    messageNotFound.style.display = 'none';
}