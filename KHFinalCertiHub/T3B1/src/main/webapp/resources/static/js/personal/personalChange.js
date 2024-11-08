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

// 입력을 체크하고 페이지 이동을 처리하는 함수
function validateAndRedirect() {
    var userPwd = document.getElementById("userPwd").value; // 입력된 값을 가져옴
    
    // 입력값이 비어있으면 경고 메시지를 띄움
    if (userPwd.trim() === "") {
        alert("비밀번호를 입력해주세요.");
    } else {
        // 값이 있으면 페이지로 이동
        location.href = "personalChangePage";
    }
}




