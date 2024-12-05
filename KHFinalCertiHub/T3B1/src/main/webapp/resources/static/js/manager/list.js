function initListPage(contextPath) {
    // initListBoard(contextPath);
    // initListPageBar(contextPath);
}

// function initListBoard(contextPath) {
//     const boardList = document.querySelector('.board-list');

//     let data = {
//         url: contextPath + "/manager/list?no=",
//         titleIndex : 2,
//         header : [
//             "NO.",
//             "제목",
//             "등록일",
//             "조회수",
//             "삭제"
//         ],
//         boardList : [
//             [   
//                 "1",
//                 "1",
//                 "게시글",
//                 "2023-10-5",
//                 "246",
//                 "<button>삭제</button>"
//             ],
//             [   
//                 "2",
//                 "2",
//                 "게시글",
//                 "2023-10-5",
//                 "135",
//                 "<button>삭제</button>"
//             ]
//         ]
//     }

//     createList(boardList, data)
// }

// function initListPageBar(contextPath) {
//     const pagingBar = document.querySelector('.list-bar');

//     const data = {
//         startPage : 1,
//         endPage : 5,
//         currentPage : 1,
//         pageUrl : '/manager/list?',
//         imgUrl : [
//             contextPath + '/resources/static/img/button/arrow_left.png',
//             contextPath + '/resources/static/img/button/arrow_right.png'
//         ]
//     }
//      createPageBar(pagingBar, data)
// }