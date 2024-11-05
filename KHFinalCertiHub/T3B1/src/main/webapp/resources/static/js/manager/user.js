function initUserPage(contextPath) {
    const boardList = document.querySelector('.board-user');

    let data = {
        url : contextPath + "/manager/user",
        titleIndex : 2,
        header : [
            "NO.",
            "유저명",
            "이메일",
            "등록일",
            "멘토여부",
            "삭제"
        ],
        boardList : [
            [
                "1",
                "user01",
                "sadasd@naver.com",
                "2023-10-5",
                "Y",
                "<button>삭제</button>"
            ],
            [
                "2",
                "user02",
                "safrq@naver.com",
                "2023-12-5",
                "N",
                "<button>삭제</button>"
            ]
        ]
    }

    createList(boardList, data)
}