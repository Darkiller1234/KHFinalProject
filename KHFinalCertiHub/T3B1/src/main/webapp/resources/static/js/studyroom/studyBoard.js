function initStudyBoard(contextPath){
    initBoard(contextPath)
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.search-option');

    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'boardLimit',
            default : '10개씩',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                ['10개씩',1, () => {
                    location.href='list?display=10&p=1' +
                        (keyword ? '&keyword=' + keyword : "")
                }],
                ['15개씩',2, () => {
                    location.href='list?display=15&p=1' +
                        (keyword ? '&keyword=' + keyword : "")
                }],
                ['20개씩',3, () => {
                    location.href='list?display=20&p=1' +
                        (keyword ? '&keyword=' + keyword : "")
                }],
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function initBoard(contextPath){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')
    const currentPage = urlParam.get('p') ?? 1
    const boardLimit = urlParam.get("display") ?? 10
    const pageLimit = 5
    
    // pageInfo = 객체 리터럴
    let pageInfo = {
        currentPage : currentPage,
        boardLimit : boardLimit,
        pageLimit : pageLimit,
        keyword : keyword,
        isEnd : false,
        contextPath : contextPath,
    }

    // 콜백 함수
    const onBoardLoad = (data) => {
        if(data){
            initList(contextPath, JSON.parse(data.board))
            initPageBar(contextPath, JSON.parse(data.pageInfo))
            initSelectBox(contextPath, JSON.parse(data.pageInfo))
        }
    }

    const loadStudy = ajaxLoadBoard(pageInfo, onBoardLoad)
    loadStudy(); 
}

function ajaxLoadBoard(pageInfo, callback){
    return function() {
        $.ajax({
            url:"boardList",
            data: {
                "currentPage" : pageInfo.currentPage,
                "boardLimit" : pageInfo.boardLimit,
                "pageLimit" :  pageInfo.pageLimit,
                "keyword" : pageInfo.keyword,
            },
            success: callback,
            error: () => {
                console.log("게시글 목록 불러오기 실패")
            }
        })
    }
}

function initList(contextPath, data){
    const boardList = document.querySelector('.board-content');
    
    let boardInfo = {
        url: contextPath + "/study/board?no=",
        header : [
            "제목",
            "작성자",
            "작성일",
            "조회",
        ],
    }

    boardInfo.boardList = data.map( board => [
        board.boardNo,
        board.boardTitle,
        board.managerName,
        board.boardDate,
        board.viewCount,
    ])
    
    createList(boardList, boardInfo)
}

function initPageBar(contextPath, data){
    const pagingBar = document.querySelector('.paging-bar');
    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')

    const pageInfo = {
        startPage : data.startPage,
        endPage :  data.endPage,
        currentPage : data.currentPage,
        pageLimit : data.pageLimit,
        maxPage : data.maxPage,
        pageUrl : 'list?display=' + data.boardLimit + (keyword ? "&keyword=" + keyword : ""),
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }

    createPageBar(pagingBar, pageInfo)
}