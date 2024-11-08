function initStudyBoard(contextPath){
    initSelectBox(contextPath)
    initBoard(contextPath)
    initPageBar(contextPath)
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

function initBoard(contextPath){
    const boardList = document.querySelector('.board-content');
    
    let data = {
        url: contextPath + "/study/board",
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

/*
    페이징바 생성함수
    data = {
        startPage : 시작번호,
        endPage : 끝번호,
        currentPage : 현재 선택된 페이지 번호,
        imgUrl : [
            "왼쪽 화살표 이미지 주소",
            "오른쪽 화살표 이미지 주소"
        ]
    }
*/
function initPageBar(contextPath){
    const pagingBar = document.querySelector('.paging-bar');

    const data = {
        startPage : 1,
        endPage : 5,
        currentPage : 1,
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }

    createPageBar(pagingBar, data)
}