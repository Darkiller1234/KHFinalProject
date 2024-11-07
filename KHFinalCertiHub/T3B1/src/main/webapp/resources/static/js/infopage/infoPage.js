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
                '10개씩',
                '15개씩',
                '20개씩',
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