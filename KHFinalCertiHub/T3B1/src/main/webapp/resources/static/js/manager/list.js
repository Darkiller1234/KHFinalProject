function initListPage(contextPath) {
    const boardList = document.querySelector('.board-list');

    let data = {
        url: contextPath + "/manager/list",
        titleIndex : 2,
        header : [
            "NO.",
            "제목",
            "등록일",
            "조회수",
            "삭제"
        ],
        boardList : [
            [
                "1",
                "게시글",
                "2023-10-5",
                "246",
                "<button>삭제</button>"
            ],
            [
                "2",
                "게시글",
                "2023-10-5",
                "135",
                "<button>삭제</button>"
            ]
        ]
    }

    createList(boardList, data)
}