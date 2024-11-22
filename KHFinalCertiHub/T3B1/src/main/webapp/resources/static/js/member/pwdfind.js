// 전송 방법을 설정하는 함수
function setSendMethod(method) {
    const sendMethodInput = document.getElementById('sendMethod');
    const phoneButton = document.querySelector('.btn.phone');
    const emailButton = document.querySelector('.btn.email');

    // 현재 선택된 전송 방법이 기존 버튼과 같은 경우 해제
    if (sendMethodInput.value === method) {
        sendMethodInput.value = ''; // 선택 해제
        phoneButton.classList.remove('active');
        emailButton.classList.remove('active');
    } else {
        sendMethodInput.value = method; // 새로운 전송 방법 저장
        highlightButton(method); // 선택된 버튼 강조
    }
}

// 버튼 색상을 강조하는 함수
function highlightButton(method) {
    const phoneButton = document.querySelector('.btn.phone');
    const emailButton = document.querySelector('.btn.email');

    // 기본 스타일로 초기화
    phoneButton.classList.remove('active'); // 기본 상태로 되돌림
    emailButton.classList.remove('active'); // 기본 상태로 되돌림

    // 선택된 버튼의 색상 변경
    if (method === 'phone') {
        phoneButton.classList.add('active'); // 클릭된 버튼에 active 클래스 추가
    } else if (method === 'email') {
        emailButton.classList.add('active'); // 클릭된 버튼에 active 클래스 추가
    }
}

// 다음 버튼 클릭 시 페이지 이동 처리 함수
function handleSubmit(event) {
    const sendMethod = document.getElementById('sendMethod').value; // 현재 선택된 전송 방법 가져오기

    // 전송 방법이 선택되지 않은 경우
    if (!sendMethod) {
        event.preventDefault(); // 폼 전송을 막음
        alert('휴대전화 번호 전송이나 이메일로 전송을 선택해주세요.'); // 경고 메시지 표시
    } else {
        // 전송 방법에 맞는 페이지로 이동
        if (sendMethod === 'phone') {
            window.location.href = 'pwdfindphone'; // 휴대전화 번호로 전송을 선택한 경우
        } else if (sendMethod === 'email') {
            window.location.href = 'pwdfindemail'; // 이메일로 전송을 선택한 경우
        }
    }
}