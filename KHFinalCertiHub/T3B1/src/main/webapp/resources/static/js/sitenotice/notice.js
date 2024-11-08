function initNoticePage(contextPath) {
    initBoardList(contextPath);
    initSelectPage(contextPath);
    initNoticePageBar(contextPath);
}

function initBoardList(contextPath){
    const boardList = document.querySelector('.site-notice');

    let data = {
        url : contextPath + "/sitenotice/notice",
        titleIndex: 1,
        header : [
            "제목",
            "작성자",
            "작성일",
            "조회"
        ],
        boardList : [
            [
                "공지: 주의사항 읽어주세요",
                "관리자1",
                "2023-10-5",
                "1500"
            ],
            [
                "정보처리기사 3차 실기 가답안 확인 ( 9:00 시험 종료 )",
                "관리자2",
                "2024-10-5",
                "3000"
            ]
        ]
    }

    createList(boardList, data)
}

function initSelectPage(contextPath) {
    const selectBoxList = document.querySelector(".site-select");

    const data = {
        name : 'number',
        default : '갯수',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['5개'],
            ['10개'],
            ['15개'],
            ['20개']
        ]
    }

    createSelectBox(selectBoxList,data)
}

function initNoticePageBar(contextPath) {
    const pagingBar = document.querySelector('.notice-bar');

    const data = {
        startPage : 1,
        endPage : 5,
        currentPage : 1,
        pageUrl : 'notice?',
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }
    createPageBar(pagingBar, data)
}
