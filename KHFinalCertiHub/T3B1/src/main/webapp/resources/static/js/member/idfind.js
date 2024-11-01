let sendMethod = ''; // 전송 방식 저장

function setSendMethod(method) {
    sendMethod = method; // 클릭한 전송 방식 저장
    document.getElementById('sendMethod').value = sendMethod; // 숨겨진 입력 필드에 저장
}

function handleSubmit(event) {
    if (sendMethod === '') {
        alert('전송 방식을 선택해주세요.');
        event.preventDefault(); // 기본 동작 방지
        return false;
    }
    return true; // 기본 동작 진행
}