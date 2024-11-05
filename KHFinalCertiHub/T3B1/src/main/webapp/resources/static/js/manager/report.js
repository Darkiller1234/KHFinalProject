function initReportPage(contextPath) {
    const boardList = document.querySelector('.board-report');

    let data = {
        url : contextPath + "manager/report",
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
                "신고글",
                "2023-10-5",
                "처리",
                "<button>삭제</button>"
            ],
            [
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