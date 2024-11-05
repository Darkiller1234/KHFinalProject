function initCertifyPage(contextPath) {
    const boardList = document.querySelector('.board-certify');

    let data = {
        url: contextPath + "/manager/certify",
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
                "자격증 인증합니다.",
                "2023-10-5",
                "수락하기",
                "<button>삭제</button>"
            ],
            [
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