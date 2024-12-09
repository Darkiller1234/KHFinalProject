function initCertifyPage(contextPath) {
    let state = {
        contextPath: contextPath,
        memberNo: null,
        memberName: null,
        licenseNo: null,
        licenseName: null,
        licenseImg: null,
    }

    initBoard(state);
}

function initBoard(state) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')
    const currentPage = urlParam.get('p') ?? 1
    const pageLimit = 5
        
    // pageInfo = 객체 리터럴
    let pageInfo = {
        currentPage : currentPage,
        boardLimit : 10,
        pageLimit : pageLimit,
        keyword : keyword,
        contextPath : state.contextPath,
    }

    // 콜백 함수
    const onBoardLoad = (data) => {
        if(data){
            initList(state, JSON.parse(data.board))
            initPageBar(state, JSON.parse(data.pageInfo))
        }
    }

    ajaxLoadBoard(pageInfo, onBoardLoad);
}

function initList(state, data){
    const boardList = document.querySelector('.board-certify');

    const displayModal = () => {
        const modal = new bootstrap.Modal(document.getElementById('licenseImg'))
        const licenseImg = document.getElementById('license-img')
        const licenseName = document.getElementById('license-name')
        const userName = document.getElementById('user-name')

        licenseImg.src = state.contextPath + data.licenseImg
        userName.innerHTML = data.memberName
        licenseName.innerHTML = data.licenseName
        
        modal.show()
    }

    let boardInfo = {
        url: state.contextPath + "/manager/certify?no=",
        titleIndex: 2,
        events: [
            [
                2, displayModal
            ],
            [
                3, displayModal
            ],
            [
                4, displayModal
            ],
        ],
        header : [
            "신청자",
            "신청자격증",
            "수락",
            "거절",
        ],
    }

    boardInfo.boardList = data.map( board => [
        null,
        board.memberName,
        board.licenseName,
        '<button>수락</button>',
        '<button>거절</button>',
    ])
    
    createList(boardList, boardInfo)
}

function initPageBar(state, data) {
    const pagingBar = document.querySelector('.certify-bar');
    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')

    const pageInfo = {
        startPage : data.startPage,
        endPage :  data.endPage,
        currentPage : data.currentPage,
        maxPage : data.maxPage,
        pageUrl : 'certify?' + (keyword ? "&keyword=" + keyword : ""),
        imgUrl : [
            state.contextPath + '/resources/static/img/button/arrow_left.png',
            state.contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }

    createPageBar(pagingBar, pageInfo)
}

function ajaxLoadBoard(pageInfo, callback){
    $.ajax({
        type:"post",
        url:"licenseList",
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
