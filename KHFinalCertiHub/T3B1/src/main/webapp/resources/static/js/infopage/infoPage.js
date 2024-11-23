// 탭 게시물
$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        
        // 선택한 카테고리를 hidden input에 설정
        var categoryText = $("#" + tab_id + " li:first-child").text(); // 예시로 첫 번째 항목 가져오기 // css에 child 요소 많이쓰면 유지보수가 힘들어요 - 김동영
        $('#category').val(categoryText);
    });
});


// 검색기능 


// 셀렉트박스
function initInfoPage(contextPath){
    initSelectBox(contextPath)
    initList(contextPath)
}


function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');
    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'boardLimit',
            default : '10개씩',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                ['10개씩'],
                ['15개씩'],
                ['20개씩'],
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function initList(contextPath){
    const boardList = document.querySelector('.board-content'); 
    let data = {
        url: contextPath + "/info",
        header : [
            "제목",
            "작성자",
            "작성일",
            "조회",
        ],
        boardList : [
            [
                "제목입니다1",
                "user01",
                "2024.11.05",
                "111",
            ],
            [
                "제목입니다2",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다3",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다4",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다5",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다6",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다7",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다8",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다9",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다10",
                "user01",
                "2024.11.05",
                "222",
            ],
        ]
    }

    createList(boardList, data)
}

// 아코디언 메뉴 버튼
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () { // element.onclick 으로 바꾸면 유지보수가 더 좋습니다 - 김동영
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
