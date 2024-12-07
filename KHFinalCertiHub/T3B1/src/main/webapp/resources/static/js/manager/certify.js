function initCertifyPage(contextPath) {
    initCertifyBoard(contextPath);
    initCertifyPageBar(contextPath);
}

function initCertifyBoard(contextPath) {
    const boardList = document.querySelector('.board-certify');

    let data = {
        url: contextPath + "/manager/certify?no=",
        titleIndex : 2,
        header : [
            "NO.",
            "제목",
            "등록일",
            "수락하기",
            "삭제"
        ],
        boardList : [
            [
                "1",
                "1",
                "자격증 인증합니다.",
                "2023-10-5",
                "수락하기",
                "<button>삭제</button>"
            ],
            [   
                "1",
                "1",
                "자격증 인증합니다.",
                "2023-10-5",
                "수락하기",
                "<button>삭제</button>"
            ]
        ]
    }

    createList(boardList, data)
}

function initCertifyPageBar(contextPath) {
    const pagingBar = document.querySelector('.certify-bar');

    const data = {
        startPage : 1,
        endPage : 5,
        currentPage : 1,
        pageUrl : contextPath + '/manager/certify?',
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }
    createPageBar(pagingBar, data)
}