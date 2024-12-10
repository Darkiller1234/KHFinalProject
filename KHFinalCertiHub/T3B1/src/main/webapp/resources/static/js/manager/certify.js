function initCertifyPage(contextPath) {
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

    initBoard(state);
}

function initBoard(state) {
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

function initList(state, data){
    const boardList = document.querySelector('.board-certify');

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
        url: state.contextPath + "/manager/certify?no=",
        titleIndex: 2,
        header : [
            "신청자",
            "신청정보",
            "수락",
            "거절",
        ],
        boardList : data.map( board => [
            null,
            board.memberName,
            board.licenseImg,
            '<button>수락</button>',
            '<button>거절</button>',
        ])
    }
    
    // 테이블 생성
    createList(boardList, boardInfo)

    // 각 테이블 컬럼에 이벤트 부여
    boardList.querySelectorAll('.trow').forEach((row, index) => {
        let title = row.querySelector('.title')
        let confirmBtn = row.children[2]
        let rejectBtn = row.children[3]

        title.onclick = () => {
            displayModal(data[index])
        }

        confirmBtn.onclick = () => {
            ajaxConfirmLicense(data[index], (res) => {
                if(res.success == 'Y'){
                    title.innerHTML = "승인완료"
                    confirmBtn.disabled = true
                    rejectBtn.disabled = true
                    title.onclick = null
                } else {
                    alert('승인에 실패했습니다.')
                }
            })
        }
        
        rejectBtn.onclick = () => {
            ajaxRejectLicense(data[index], (res) => {
                if(res.success == 'Y'){
                    title.innerHTML = "거절완료"
                    confirmBtn.disabled = true
                    rejectBtn.disabled = true
                    title.onclick = null
                } else {
                    alert('거절에 실패했습니다.')
                }
            })
        }
    })
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
            console.log("자격증 승인 실패")
        }
    })
}

function ajaxRejectLicense(data, callback){
    $.ajax({
        type:"post",
        url:"rejectLicense",
        data: {
            licenseNo: data.licenseNo,
            memberNo: data.memberNo,
        },
        success: callback,
        error: () => {
            console.log("자격증 거절 실패")
        }
    })
}