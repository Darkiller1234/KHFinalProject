function initCertifyPage(contextPath) {
    initCertifyBoard(contextPath);
    initCertifyPageBar(contextPath);
}

function initCertifyBoard(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')
    const currentPage = urlParam.get('p') ?? 1
    const boardLimit = urlParam.get("display") ?? 10
    const pageLimit = 5
        
    const boardList = document.querySelector('.board-certify');
    const pagingBar = document.querySelector('.certify-bar');

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
        }
    }

    const loadStudy = ajaxLoadBoard(pageInfo, onBoardLoad)
    loadStudy(); 
}

function initCertifyPageBar(contextPath) {
    const pagingBar = document.querySelector('.paging-bar');
    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')

    const pageInfo = {
        startPage : data.startPage,
        endPage :  data.endPage,
        currentPage : data.currentPage,
        maxPage : data.maxPage,
        pageUrl : 'list?display=' + data.boardLimit + (keyword ? "&keyword=" + keyword : ""),
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }

    createPageBar(pagingBar, pageInfo)
}

function ajaxLoadBoard(pageInfo, callback){
    return function() {
        $.ajax({
            type:"post",
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
