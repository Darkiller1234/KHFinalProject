// 탭 게시물
$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');

        // 선택한 카테고리를 hidden input에 설정
        var categoryText = $("#" + tab_id + " li:first-child").text(); // 예시로 첫 번째 항목 가져오기 
        $('#category').val(categoryText);
    });
});


// 보드
function initInfoPage(contextPath) {
    libBoard(contextPath);
}
function libBoard(contextPath) {
    const boardList = document.querySelector('.board-lib');
    let data = {
        url: contextPath + "/info/board?no=",
        titleIndex: 1,
        header: [
            "제목",
            "작성자",
            "작성일",
            "조회",
        ],
        boardList: [
            [
                "1",
                "민간자격증 응시료 안내",
                "관리자",
                "2024.11.05",
                "111"
            ],
            [
                "2",
                "정보처리기사 시험 개정 안내",
                "관리자",
                "2024.11.05",
                "222"
            ],
            [
                "3",
                "국가공인 민간자격증 안내",
                "관리자",
                "2024.11.05",
                "222"
            ],
        ]
    }

    createList(boardList, data)
}



// 아코디언 메뉴 버튼
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
