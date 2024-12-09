function initReportPage(contextPath) {
    initReportBoard(contextPath);
    initReportPageBar(contextPath);
}

function initReportBoard(contextPath) {
    const boardList = document.querySelector('.board-report');

    let data = {
        url : contextPath + "/communit/report?no=",
        titleIndex : 2,
        header : [
            "NO.",
            "제목",
            "등록일",
            "처리여부",
            "삭제"
        ],
        boardList : [
            [   
                "1",
                "1",
                "신고글",
                "2023-10-5",
                "처리",
                "<button>삭제</button>"
            ],
            [   
                "2",
                "2",
                "신고글",
                "2023-12-5",
                "미처리",
                "<button>삭제</button>"
            ]
        ]
    }

    createList(boardList, data)
}

function initReportPageBar(contextPath) {
    const pagingBar = document.querySelector('.report-bar');

    const data = {
        startPage : 1,
        endPage : 5,
        currentPage : 1,
        pageUrl : 'report?',
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }
    createPageBar(pagingBar, data)
}