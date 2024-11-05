function initNoticePage(contextPath) {
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