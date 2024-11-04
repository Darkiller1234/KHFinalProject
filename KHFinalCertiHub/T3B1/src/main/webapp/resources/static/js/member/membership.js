document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("membershipForm");
    const userIdInput = document.getElementById("userId");
    const passwordInput = document.getElementById("userPwd");
    const confirmPasswordInput = document.getElementById("checkPwd");
    const emailInput = document.getElementById("Email");
    const nicknameInput = document.getElementById("nickName");
    const phoneInput = document.getElementById("phoneNumber");
    const nameInput = document.getElementById("name");

    const userIdError = document.getElementById("userIdError");
    const checkPwdError = document.getElementById("checkPwdError");
    const emailError = document.getElementById("emailError");
    const nicknameError = document.getElementById("nickNameError");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const nameError = document.getElementById("nameError");

    // 아이디 중복 체크 예시 (서버 확인 필요)
    checkIdBtn.addEventListener("click", function () {
        const userId = userIdInput.value.trim();
        if (userId.length < 4) {
            userIdError.style.display = "block";
            userIdError.textContent = "아이디는 4자 이상이어야 합니다.";
            return;
        }

        // 서버와의 중복 체크 예시 (가상의 검증)
        if (userId === "existingUser") {
            userIdError.style.display = "block";
            userIdError.textContent = "이미 사용 중인 아이디입니다.";
        } else {
            userIdError.style.display = "none";
            alert("사용 가능한 아이디입니다.");
        }
    });

    // 비밀번호 확인 일치 여부 검사
    confirmPasswordInput.addEventListener("input", function () {
        if (confirmPasswordInput.value !== passwordInput.value) {
            checkPwdError.style.display = "block";
            checkPwdError.textContent = "비밀번호가 일치하지 않습니다.";
        } else {
            checkPwdError.style.display = "none";
        }
    });

    // 가입하기 버튼 클릭 시 필수 입력 값 확인
    form.addEventListener("submit", function (event) {
        let isValid = true;

        // 이메일 확인
        if (!emailInput.value.trim()) {
            emailError.style.display = "block";
            emailError.textContent = "이메일을 입력해주세요.";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // 닉네임 확인
        if (!nicknameInput.value.trim()) {
            nicknameError.style.display = "block";
            nicknameError.textContent = "닉네임을 입력해주세요.";
            isValid = false;
        } else {
            nicknameError.style.display = "none";
        }

        // 이름 확인
        if (!nameInput.value.trim()) {
            nameError.style.display = "block";
            nameError.textContent = "이름을 입력해주세요.";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // 전화번호 확인
        if (!phoneInput.value.trim()) {
            phoneNumberError.style.display = "block";
            phoneNumberError.textContent = "전화번호를 입력해주세요.";
            isValid = false;
        } else {
            phoneNumberError.style.display = "none";
        }

        if (!isValid) {
            event.preventDefault(); // 폼 제출 중지
        }
    });
});