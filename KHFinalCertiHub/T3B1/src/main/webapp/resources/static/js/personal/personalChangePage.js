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