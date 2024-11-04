function handleSubmit(event) {
    event.preventDefault(); // 기본 동작 방지 (폼 제출 막기)

    const userIdInput = document.getElementById('userId');
    const emailInput = document.getElementById('Email');

    if (!userIdInput.value.trim()) {
        alert("아이디를 입력해 주세요."); // 이름 입력이 비어있을 경우 경고 메시지
        userIdInput.focus(); // 이름 입력 필드로 포커스 이동
        return;
    }

    if (!emailInput.value.trim()) {
        alert("이메일을 입력해 주세요."); // 이메일 입력이 비어있을 경우 경고 메시지
        emailInput.focus(); // 이메일 입력 필드로 포커스 이동
        return;
    }

    // 모든 입력이 완료되면 폼 제출
    document.getElementById('membershipForm').submit(); // 폼 제출
}