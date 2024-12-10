function initListPage(contextPath) {
    let state = {
        contextPath: contextPath,
        boardLimit: 10,
        pageLimit: 5,
        memberNo: null,
        memberName: null,
        licenseNo: null,
        licenseName: null,
        licenseImg: null,
    }

    initListBoard(state);
}

function initListBoard(state) {
    // 현재 페이지의 URL 주소
    const url =  new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')
    const currentPage = urlParam.get('p') ?? 1

    // pageInfo = 객체 리터럴
    let pageInfo = {
        currentPage : currentPage,
        boardLimit : state.boardLimit,
        pageLimit : state.pageLimit,
        keyword : keyword,
        contextPath : state.contextPath,
    }

    // 콜백 함수
    const onBoardLoad = (data) => {
        if(data) {
            initList(state, JSON.parse(data.board))
            initPageBar(state, JSON.parse(data.pageInfo))
        }
    }

    ajaxLoadBoard(pageInfo, onBoardLoad);
}

function initList(state, data) {
    const boardList = document.querySelector('.board-list');

    const displayModal = (data) => {
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
        url: state.contextPath + "/study/board?no=",
        titleIndex : 2,
        header : [
            "NO.",
            "제목",
            "등록일",
            "조회수",
            "삭제"
        ],
        boardList : data.map( board => [
            board.boardNo,
            board.boardNo,
            board.boardTitle,
            board.boardDate,
            board.viewCount,
            '<button>삭제</button>',
        ]) 
    }

    // 테이블 생성
    createList(boardList, boardInfo)

    // 각 테이블 컬럼에 이벤트 부여
    boardList.querySelectorAll('.trow').forEach((row, index) => {
        let deleteBtn = row.children[4]

        deleteBtn.onclick = () => {
            // 삭제버튼 누르면 실행할 이벤트 ajax요청
        }
    })
}

function initPageBar(state, data) {
    const pagingBar = document.querySelector('.list-bar');
    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')

    const pageInfo = {
        startPage : data.startPage,
        endPage : data.endPage,
        currentPage : data.currentPage,
        maxPage : data.maxPage,
        pageUrl : 'list?' + (keyword ? "keyword=" + keyword : ""),
        imgUrl : [
            state.contextPath + '/resources/static/img/button/arrow_left.png',
            state.contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }
     createPageBar(pagingBar, pageInfo)
}

function ajaxLoadBoard(pageInfo, callback) {
        $.ajax({
            type:"post",
            url:"promoteList",
            data: {
                "currentPage" : pageInfo.currentPage,
                "boardLimit" : pageInfo.boardLimit,
                "pageLimit" : pageInfo.pageLimit,
                "keyword" : pageInfo.keyword,
            },
            success: callback,
            error: () => {
                console.log("게시글 목록 불러오기 실패")
            }
        })
}

function ajaxConfirmLicense(data, callback){
    $.ajax({
        type:"post",
        url:"confirmLicense",
        data: {
            licenseNo: data.licenseNo,
            memberNo: data.memberNo,
        },
        success: callback,
        error: () => {
            console.log("홍보 게시글 삭제 실패")
        }
    })
}