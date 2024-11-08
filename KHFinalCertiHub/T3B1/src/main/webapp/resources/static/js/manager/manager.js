function initManagerPage(contextPath) {
    initManagerBoard(contextPath);
    initManagerPageBar(contextPath);
    
}


function initManagerBoard(contextPath){
    const boardList = document.querySelector('.board-notice');

    let data = {
        url: contextPath + "/manager/notice",
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
                "공지사항입니다.",
                "2023-10-5",
                "1354",
                "<button>삭제</button>"
            ],
            [
                "2",
                "공지사항입니다.",
                "2023-12-5",
                "894",
                "<button>삭제</button>"
            ]
        ]
    }
   
    createList(boardList, data)
}

function initManagerPageBar(contextPath) {
    const pagingBar = document.querySelector('.manager-bar');

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