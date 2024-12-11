function initCommulistPage(contextPath) {
    let state = {
        contextPath: contextPath,
        boardLimit: 10,
        pageLimit: 5,
        memberNo: null,
        memberName: null,
        boardNo: null,
        licenseName: null,
        licenseImg: null,
    }

    initCommuBoard(state);
}

function initCommuBoard(state) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
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
        if(data){
            initList(state, JSON.parse(data.board))
            initPageBar(state, JSON.parse(data.pageInfo))
        }
    }

    ajaxLoadBoard(pageInfo, onBoardLoad);
}

function initList(state, data) {
    const boardList = document.querySelector('.board-commulist');

    const displayModal = (data) => {
        const modal =  new bootstrap.Modal(document.getElementById('licenseImg'))
        const licenseImg = document.getElementById('license-img')
        const licenseName = document.getElementById('license-name')
        const userName = document.getElementById('user-name')

        licenseImg.src = state.contextPath + data.licenseImg
        userName.innerHTML = data.memberName
        licenseName.innerHTML = data.licenseName

        modal.show()
    }

    let boardInfo = {
        url: state.contextPath + "/community/detail?certiNo=&cno=",
        titleIndex: 2,
        header : [
            "NO.",
            "제목",
            "등록일",
            "조회수",
            "삭제",
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

    //테이블 생성
    createList(boardList, boardInfo)

    //각 테이블 컬럼에 이벤트 부여
    boardList.querySelectorAll('.trow').forEach((row, index) => {
        let deleteBtn = row.children[4]

        deleteBtn.onclick = () => {
            // 삭제버튼 누르면 실행할 이벤트 ajax요청
            ajaxDeleteLicense(data[index], (res) =>{
                if(res.success == 'Y'){
                    deleteBtn.disabled = true
                }else {
                    alert('게시글 삭제에 실패했습니다.')
                }
            })
        }
    })
}

function initPageBar(state, data) {
    const pagingBar = document.querySelector('.commulist-bar');
    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword')

    const pageInfo = {
        startPage : data.startPage,
        endPage : data.endPage,
        pageLimit : data.pageLimit,
        currentPage : data.currentPage,
        maxPage : data.maxPage,
        pageUrl : 'commulist?' + (keyword ? "&keyword=" + keyword : ""),
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
            url:"commulistList",
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

function ajaxDeleteLicense(data, callback){
    $.ajax({
        type:"post",
        url:"deleteLicense",
        data: {
            boardNo: data.boardNo,
            memberNo: data.memberNo,
        },
        success: callback,
        error: () => {
            console.log("커뮤 게시글 삭제 실패")
        }
    })
}