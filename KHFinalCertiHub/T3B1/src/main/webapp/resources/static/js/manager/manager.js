function initManagerPage(contextPath) {
    initManagerBoard(contextPath);
    initManagerPageBar(contextPath);
    
}


function initManagerBoard(contextPath){
    const boardList = document.querySelector('.board-manager');

    let data = {
        url: contextPath + "/notice/noticepost?no=",
        titleIndex : 2,
        header : [
                "NO.",
                "제목",
                "등록일",
                "조회수"
                
            ],
            boardList : [
            [
                "1",
                "1",
                "공지사항입니다.",
                "2023-10-5",
                "1354"
                
            ],
            [
                "2",
                "2",
                "공지사항입니다.",
                "2023-12-5",
                "894"
                
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
        pageUrl : contextPath +'/manager/manager?',
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }
    createPageBar(pagingBar, data)
}