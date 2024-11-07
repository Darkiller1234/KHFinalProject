// 탭 게시물
$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})
// 셀렉트박스
function initInfoPage(contextPath){
    initSelectBox(contextPath)
    initList(contextPath)
    SiSelectBox(contextPath)
    GunSelectBox(contextPath)
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'boardLimit',
            default : '10개씩',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                '10개씩',
                '15개씩',
                '20개씩',
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function SiSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.si-select');
    console.log(selectBoxList[0]);
    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'si-list',
            default : '서울',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                '경기도',
                '인천',
                '부산',
                '경북',
                '경남',
                '전북',
                '전남',
                '충북',
                '충남',
                '강원도',
                '대전',
                '제주',
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function GunSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.gun-select');
    console.log(selectBoxList[0]);
    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'gun-list',
            default : '강남',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                '강서',
                '도봉',
                '서부'
            ]
        }

        createSelectBox(selectBox, data)
    })
}




function initList(contextPath){
    const boardList = document.querySelector('.board-content'); 
    console.log(boardList);
    
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
