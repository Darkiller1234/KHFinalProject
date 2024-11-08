// 드롭다운 버튼을 클릭하면 드롭다운 메뉴를 토글합니다.
function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

// 화면 크기가 바뀔 때 드롭다운을 숨깁니다.
window.addEventListener('resize', function() {
    // 화면 크기가 721px 이상이면 드롭다운을 숨깁니다.
    if (window.innerWidth > 720) {
        var dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 비밀번호 변경 함수
    function submitChange() {
        var userPwd = document.getElementById("userPwd").value;
        var newcheckPwd = document.getElementById("newcheckPwd").value;
        var checkPwd = document.getElementById("checkPwd").value;

        // 필수 입력값 검증
        if (!userPwd || !newcheckPwd || !checkPwd) {
            alert("모든 필드를 입력해주세요.");
            return; // 입력값이 비어 있으면 모달을 닫지 않음
        }

        // 비밀번호 일치 여부 검증
        if (newcheckPwd !== checkPwd) {
            alert("새로운 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
            return; // 비밀번호가 일치하지 않으면 모달을 닫지 않음
        }

        // 여기에 실제 비밀번호 변경 로직을 추가 (예: 폼 제출)
        alert("비밀번호가 변경되었습니다.");

        // 모달 닫기
        document.getElementById("change-btn").click();
    }

    // 회원 탈퇴 함수
    function submitDelete() {
        var userPwdDelete = document.getElementById("userPwddelete").value;

        // 비밀번호 입력 여부 검증
        if (!userPwdDelete) {
            alert("비밀번호를 입력해주세요.");
            return; // 비밀번호가 비어 있으면 모달을 닫지 않음
        }

        // 여기에 실제 탈퇴 로직을 추가 (예: 폼 제출)
        alert("회원 탈퇴가 완료되었습니다.");

        // 모달 닫기
        document.getElementById("delete-btn").click();
    }

    // 비밀번호 변경 버튼 클릭 시 submitChange 함수 실행
    document.getElementById("change-btn").addEventListener("click", submitChange);

    // 회원 탈퇴 버튼 클릭 시 submitDelete 함수 실행
    document.getElementById("delete-btn").addEventListener("click", submitDelete);
});