// 현재 페이지의 URL 주소
const url = new URL(window.location.href);
// URL의 파라미터값을 가진 객체
const urlParam = url.searchParams;

//전역변수 없는게 좋기는 한데 어쩔 수 없는거같기는한데 몰루겠다
let cPage = -1;
if(urlParam.get('cpage') != null){
    cPage = urlParam.get('cpage');
}


//~~~게시판 검색쪽 js~~~
//게시판 바꾸기(자격증 바꾸기)
function certiChange(certiNumber) {     
    redirect(certiNumber);
}

//탭 바꾸기(자유, 질문 등)
function tabNoChange(certiNo, tabNo) {
    const preFilterNo = urlParam.get('filterNo');
    const preFilterText = urlParam.get('filterText');
    redirect(certiNo, tabNo, 1, $('input[name="array"]').val(), preFilterNo, preFilterText)

}

//하단 페이징 바꾸기 (< 1 2 3 4 5 >)
function pageChange(currentPage, certiNo, tabNo) {
    const preFilterNo = urlParam.get('filterNo');
    const preFilterText = urlParam.get('filterText');
    redirect(certiNo, tabNo, currentPage, $('input[name="array"]').val(), preFilterNo, preFilterText)
}

//텍스트기반 검색 (돋보기모양 누르면 실행, 정렬기준 등 포함)
function searchExcute(certiNo, tabNo) {
    redirect(certiNo, tabNo, 1, $('input[name="array"]').val(), $('input[name="filter"]').val(), document.querySelector('#search-input-text').value)
}


//엔터 누르면
function keypress(event, certiNo, tabNo) {
    if (event.key === 'Enter') {
        searchExcute(certiNo, tabNo);
    }
}


//글 리스트 onclick 이벤트 그냥이거쓸래
//detail로 이동
function DirectAttack(path) {
    location.href = path;
}


//글 리스트 전환시 링크
//main 그대로
function redirect(certiNo, tabNo, currentPage, orderBy, filterNo, filterText) {
    let path = "main?";
    if (certiNo) {
        path += `certiNo=${certiNo}&`;
    }
    if (tabNo) {
        path += `tabNo=${tabNo}&`;
    }
    if (currentPage) {
        path += `cpage=${currentPage}&`;
    }
    if (orderBy) {
        path += `orderBy=${orderBy}&`;
    }
    if (filterNo) {
        path += `filterNo=${filterNo}&`;
    }
    if (filterText) {
        path += `filterText=${filterText}&`;
    }
    location.href = path;
}

//페이지 로드 완료시 실행
function commuDInit(contextPath) {
    let data1 = {       //selectbox 만들기용 데이터
        name: 'array',
        default: '최신순',
        imgUrl: `${contextPath}/resources/static/img/button/triangle_down.png`,
        items: [
            ['최신순', 1],
            ['추천순', 2],
            ['조회순', 3]
        ]
    }

    let data2 = {
        name: 'filter',
        default: '제목',
        imgUrl: `${contextPath}/resources/static/img/button/triangle_down.png`,
        items: [
            ['전체', 1],
            ['제목', 2],
            ['내용', 3],
            ['제목+내용', 4],
            ['글쓴이', 5]
        ]
    }
    

    const preOrderBy = urlParam.get('orderBy');
    const preFilterNo = urlParam.get('filterNo');

    //selectbox 만들기
    createSelectBox(document.getElementById('selectbox1'), data1);
    createSelectBox(document.getElementById('selectbox2'), data2);

    //글 내용 불러오기 ajax
    boardLoading({ cno: urlParam.get('cno') }, function (ev) {
        boardLoadingExecute(ev, contextPath)    //DOM에 내용 집어넣기 function
    })



    //탭 글씨에서 이미지(아이콘)으로 전환 (글 리스트) (글 리스트는 jsp쪽에서 만들어줌)
    tabChange(contextPath);





    //원래 선택했던 selectbox 적용 (근데 사실 Detail에서는 어차피 초기화시켜서 의미없음)
    if (preOrderBy !== undefined) {
        document.querySelector('input[name="array"]').value = preOrderBy;
        switch (preOrderBy) {
            case "1":
                document.querySelector('#selectbox1 > .custom-select > .button-select > div').innerText = '최신순';
                break;
            case "2":
                document.querySelector('#selectbox1 > .custom-select > .button-select > div').innerText = '추천순';
                break;
            case "3":
                document.querySelector('#selectbox1 > .custom-select > .button-select > div').innerText = '조회순';
                break;
            default:
                break;
        }
    }

    if (preFilterNo !== undefined) {
        document.querySelector('input[name="filter"]').value = preFilterNo;
        switch (preFilterNo) {
            case "1":
                document.querySelector('#selectbox2 > .custom-select > .button-select > div').innerText = '전체';
                break;
            case "2":
                document.querySelector('#selectbox2 > .custom-select > .button-select > div').innerText = '제목';
                break;
            case "3":
                document.querySelector('#selectbox2 > .custom-select > .button-select > div').innerText = '내용';
                break;
            case "4":
                document.querySelector('#selectbox2 > .custom-select > .button-select > div').innerText = '제목+내용';
                break;
            case "5":
                document.querySelector('#selectbox2 > .custom-select > .button-select > div').innerText = '글쓴이';
                break;
            default:
                break;
        }
    }


    //탭 좌우스크롤용 js코드
    const scrollContainer = document.querySelector('.scroll-container');

    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return; // 드래그 상태가 아닐 때 종료
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // 스크롤 속도를 조절하세요
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
    //여기까지 탭 좌우스크롤


    //좋아요 눌렀는지 확인하는 ajax
    getLikeStatus({ cno: urlParam.get('cno') }, function (result) {
        if (result === 1) {
            document.querySelector('#like-btn').classList.add('selected');

            addModal("이미 좋아하신 게시글입니다.")
        }
        else if (result === 2) {
            document.querySelector('#hate-btn').classList.add('selected');

            addModal("이미 싫어하신 게시글입니다.")
        }
        else if (result === 0) {    //좋아요 싫어요 누른 적 없으면
            $("#like-btn").on("click", function () {    //좋아요 누르면
                $("#like-btn").off("click");        //버튼들 이벤트 삭제
                $("#hate-btn").off("click");
                clickLikeButton(1, { cno: urlParam.get('cno') }, function (result) {
                    if (result === 1) {         //모달 활성화 후 문구 수정
                        document.querySelector('#like-btn').classList.add('selected');
                        addModal("이미 좋아하신 게시글입니다.") 
                    }
                    boardLoading({ cno: urlParam.get('cno') }, function (ev) {  //글 재로드(좋아요/싫어요 숫자 반영용)
                        boardLoadingExecute(ev, contextPath)
                    })
                })
            });
            $("#hate-btn").on("click", function () {    //싫어요 누르면 (이하 동일)
                $("#like-btn").off("click");
                $("#hate-btn").off("click");
                clickLikeButton(2, { cno: urlParam.get('cno') }, function (result) {
                    if (result === 1) {
                        document.querySelector('#hate-btn').classList.add('selected');
                        addModal("이미 싫어하신 게시글입니다.")
                    }
                    boardLoading({ cno: urlParam.get('cno') }, function (ev) {
                        boardLoadingExecute(ev, contextPath)
                    })
                })
            });
        }
        else {      //result가 값이 없으면 로그인 안되어있는거임
            addModal("로그인을 하세요.")
        }
    })


    //글 삭제버튼에 이벤트 삽입
    $("#delete-btn").on("click", function () {
        clickDeleteBtn({ cno: urlParam.get('cno') }, function (result) {
            if (result === 1) {
                location.href = "main?" + "certiNo=" + urlParam.get('certiNo');
            }
        })
    });


    //글 수정버튼에 이벤트 삽입
    $("#edit-btn").on("click", function () {
        clickEditBtn({ cno: urlParam.get('cno') }, function (result) {
            if (result === 1) {
                location.href = "edit?" + "certiNo=" + urlParam.get('certiNo');
            }
        })
    });

    //댓글 페이징 ( 이 함수 안쪽에 댓글 불러오는것도 포함 )
    replyPaging({ cno: urlParam.get('cno'), cpage: cPage }, function (pi) {
        replyPagingReload(pi, contextPath);
    });



    //댓글 작성 textarea누르면 댓글 작성 버튼 활성화
    $("#reply-write-area").on("focus", function () {
        document.querySelector('#reply-write-btn').classList.add('reply-write-active');
    });



    //전체 개시판에서 select하는 인기글
    poppularAll(null, function(result){
        result.forEach((boardT) => {
            document.querySelector('#popular-list-area-all').innerHTML += `
                <div class="popular-div" id="popularAll${boardT.boardNo}">
                    <span>${boardT.boardTitle}</span><span>[${boardT.replyCount}]</span><span>${boardT.likeCount - boardT.hateCount}</span>
                </div>
            `
        });
        result.forEach((boardT) => {
            $(`#popularAll${boardT.boardNo}`).on("click", function(){
                location.href= `detail?cno=${boardT.boardNo}&certiNo=${boardT.licenseNo}`
            });
        })
    })
    
    //현재 게시판에서 select하는 인기글
    poppularThis({licenseNo: urlParam.get('certiNo')}, function(result){
        result.forEach((boardT) => {
            document.querySelector('#popular-list-area-this').innerHTML += `
                <div class="popular-div" id="popularThis${boardT.boardNo}">
                    <span>${boardT.boardTitle}</span><span>[${boardT.replyCount}]</span><span>${boardT.likeCount - boardT.hateCount}</span>
                </div>
            `
    
        });
        result.forEach((boardT) => {
            $(`#popularThis${boardT.boardNo}`).on("click", function(){
                location.href= `detail?cno=${boardT.boardNo}&certiNo=${boardT.licenseNo}`
            });
        })
    })

    

    
    getLoginInfo(0, function (re) {
        if(re !== null){
            $("#repoerBtn").on("click", function () {
                checkReportBoard({ cno: urlParam.get('cno') }, function(result){
                    if(result < 1){
                        $("#report-board-modal #report-submit-button").off("click");
                        $("#report-board-modal #report-submit-button").on("click", function(){
                            const selectedElement = document.querySelector('#report-board-modal input[name="reportNumber"]:checked');
                            if (selectedElement) {
                                const selectedReportNumber = selectedElement.value;
                                const reportReason = document.querySelector('#report-board-modal textarea[name=reportReason').value;
                                insertReportBoard({
                                    boardNo: urlParam.get('cno'),
                                    reportTypeNo: selectedReportNumber,
                                    reportDetail: reportReason
                                }, function(result){
                                    if(result > 0){
                                        alert("신고가 정상적으로 처리되었습니다.")
                                        location.reload(true);
                                    }else{
                                        alert("신고가 실패하였습니다. 다시 시도해주세요.")
                                    }
                                })
                            } else {
                                alert("신고 사유를 선택해주세요.")
                            }
                        })
                    } else {
                        document.querySelector("#report-board-modal .modal-body").innerHTML = "이미 신고하신 글입니다."
                        document.querySelector("#report-board-modal .modal-footer").innerHTML = ""  
                    }
                })
            });
        }
    })
    


    

}

//탭 텍스트 >> 이미지 (글 리스트)
function tabChange(contextPath) {
    document.querySelectorAll('.listArea-div1-tab, .listArea-div2-tab').forEach(function (ev) {


        switch (ev.textContent.trim()) {
            case '공지':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_notice.png" alt="">`
                break;
            case '자유':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_free.png" alt="">`
                break;
            case '질문(자유)':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_ask_free.png" alt="">`
                break;
            case '질문(코딩)':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_ask_coding.png" alt="">`
                break;
            case '후기':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_feedback.png" alt="">`
                break;
            case '문제집/강의 추천':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_reco.png" alt="">`
                break;
            case '문제집 거래':
                ev.innerHTML = `<img src="${contextPath}/resources/static/img/community/cate_trade.png" alt="">`
                break;
            default:
                break;
        }


    });
}


//modal 활성화 및 문구 추가
function addModal(string) {
    // data-bs-toggle 속성 추가
    document.querySelector('#like-btn').setAttribute("data-bs-toggle", "modal");

    // data-bs-target 속성 추가
    document.querySelector('#like-btn').setAttribute("data-bs-target", "#myModal");

    // data-bs-toggle 속성 추가
    document.querySelector('#hate-btn').setAttribute("data-bs-toggle", "modal");

    // data-bs-target 속성 추가
    document.querySelector('#hate-btn').setAttribute("data-bs-target", "#myModal");

    document.querySelector('#modal-body').innerText = string;
}

//글 내용 불러오기
function boardLoadingExecute(board, context) {
    document.querySelector("#tabNameP").innerText = board.tabName;
    document.querySelector("#boardTitleP").innerText = board.boardTitle;
    document.querySelector("#nickNameP").innerText = board.memberNickname;
    $("#nickNameP").on("click", function(){
        location.href=`${context}/personal/view?pno=${board.memberNo}`
    })
    document.querySelector("#likehatereplyviewdateCountP").innerText = `좋아요 ` + board.likeCount + ` | 싫어요 ` + board.hateCount + ` | 댓글 ` + board.replyCount + ` | 조회수 ` + board.viewCount + ` | ` + board.boardDate;
    document.querySelector("#boardContentP").innerHTML = board.boardContent;
    switch (document.querySelector('#tabNameP').textContent.trim()) {
        case '공지':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_notice.png" alt="">`
            break;
        case '자유':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_free.png" alt="">`
            break;
        case '질문(자유)':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_ask_free.png" alt="">`
            break;
        case '질문(코딩)':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_ask_coding.png" alt="">`
            break;
        case '후기':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_feedback.png" alt="">`
            break;
        case '문제집/강의 추천':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_reco.png" alt="">`
            break;
        case '문제집 거래':
            document.querySelector('#tabNameP').innerHTML = `<img src="` + context + `/resources/static/img/community/cate_trade.png" alt="">`
            break;
        default:
            break;
    }
    getWriterProfileImg({ cno: urlParam.get('cno') }, function (result) {

        pathImg = context + result;
        document.querySelector('#profile_img').src = pathImg;
    })
}


//댓글 페이징( < 1 2 3 4 5 > ) 작성하기
function replyPagingReload(pi, contextPath) {
    

    cPage = pi.currentPage
    const paging = document.querySelector('#reply-pagination');
    paging.innerHTML = '';
    // 조건 1: 현재 페이지가 1이 아닌 경우, 왼쪽 화살표 추가
    if (pi.currentPage != 1 && pi.currentPage > 0) {
        paging.innerHTML += `
        <span class="page-arrow" id="reply-leftArrow">
            <img src="${contextPath}/resources/static/img/button/arrow_left.png" alt="">
        </span>
    `;

    }

    // 조건 2: 현재 페이지가 최대 페이지이고, 최대 페이지가 5 이상인 경우
    if (pi.currentPage == pi.maxPage && pi.maxPage >= 5) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpageMf">${pi.currentPage - 4}</span>
    `;

    }

    // 조건 3: 현재 페이지 - 3이 유효한 경우
    if (pi.currentPage >= pi.maxPage - 1 && pi.maxPage >= 4) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpageMthr">${pi.currentPage - 3}</span>
    `;

    }

    // 조건 4: 현재 페이지 - 2가 유효한 경우
    if (pi.currentPage - 2 >= 1) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpageMtw">${pi.currentPage - 2}</span>
    `;
    }

    // 조건 5: 현재 페이지 - 1이 유효한 경우
    if (pi.currentPage - 1 >= 1) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpageMo">${pi.currentPage - 1}</span>
    `;

    }

    // 현재 페이지 표시 (활성 상태)
    paging.innerHTML += `
    <DDAAAAspan class="page-num active">${pi.currentPage}</DDAAAAspan>
    `;

    // 조건 6: 현재 페이지 + 1이 최대 페이지 이하인 경우
    if (pi.currentPage + 1 <= pi.maxPage) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpagePo">${pi.currentPage + 1}</span>
    `;

    }

    // 조건 7: 현재 페이지 + 2가 최대 페이지 이하인 경우
    if (pi.currentPage + 2 <= pi.maxPage) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpagePtw">${pi.currentPage + 2}</span>
    `;

    }

    // 조건 8: 현재 페이지가 2 이하이고 최대 페이지가 4 이상인 경우
    if (pi.currentPage <= 2 && pi.maxPage >= 4) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpagePthr">${pi.currentPage + 3}</span>
    `;

    }

    // 조건 9: 현재 페이지가 1이고 최대 페이지가 5 이상인 경우
    if (pi.currentPage == 1 && pi.maxPage >= 5) {
        paging.innerHTML += `
        <span class="page-num" id="reply-cpagePf">${pi.currentPage + 4}</span>
    `;

    }

    // 조건 10: 현재 페이지가 최대 페이지보다 작은 경우, 오른쪽 화살표 추가
    if (pi.currentPage < pi.maxPage) {
        paging.innerHTML += `
        <span class="page-arrow" id="reply-rightArrow">
            <img src="${contextPath}/resources/static/img/button/arrow_right.png" alt="">
        </span>
    `;
        $("#reply-rightArrow").on("click", function () {

            replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 1) }, function (pi) {
                replyPagingReload(pi, contextPath);
            });
        });


    }

    //댓글 불러오기
    replyList({ cno: urlParam.get('cno'), cpage: pi.currentPage }, function (result) {
        replyListReload(result, contextPath, urlParam.get('cno'), pi.currentPage)
    });


    //페이징 버튼별 이벤트 부여
    $("#reply-leftArrow").on("click", function () {

        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 1) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpageMf").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 4) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });


    $("#reply-cpageMthr").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 3) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });


    $("#reply-cpageMtw").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 2) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpageMo").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 1) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePo").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 1) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePtw").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 2) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePthr").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 3) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePf").on("click", function () {

        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 4) }, function (pi) {
            replyPagingReload(pi, contextPath);
        });
    });


}

//댓글 리스트 가져오기 및 적용하기
function replyListReload(result, contextPath, a, b) {
    document.querySelector('#replys').innerHTML = '';
    let loginInfo;
    getLoginInfo(0, function (re) {
        if(re !== null){
            loginInfo = re.memberNo;
        }
        else {
            loginInfo = null;
        }
        result.forEach((reply) => {
            let temp = '';
            if(reply.replyPNo === 0){
                temp += `
                    <div class="mother-reply" data-group-id="${reply.replyNo}" data-reply-no="${reply.replyNo}">
                `;
            }
            if(reply.replyPNo !== 0){
                temp += `
                    <div class="child-reply" data-group-id="${reply.replyGroup}" data-reply-no="${reply.replyNo}" data-mother-no="${reply.replyPNo}">
                `;
            }
            if(reply.status === 'N'){
                temp += `
                    <div class="reply" id="reply${reply.replyNo}">
                     삭제된 댓글입니다.
                    
                    </div>

                `

            } else {
                temp += `
                    <div class="reply" id="reply${reply.replyNo}">
                        <input type="hidden" value="${reply.replyNo}" name="replyNo">
                    <img src="` + contextPath + `${reply.memberImg}" alt="">
                    <div>
                        <p class="font-size-subtitle" id="reply_nick" onclick='location.href="${contextPath}/personal/view?pno=${reply.memberNo}"'>${reply.memberNickname}</p>
                        <p class="font-size-content">${reply.replyContent}</p>
                        <div class="font-size-footer">
                `
                
                if (loginInfo != null) {
                    temp += `
                        <button id="re-reply${reply.replyNo}">답글</button>
                        |
                        <button id="replyReport${reply.replyNo}" data-bs-toggle="modal" data-bs-target="#report-reply-modal">신고</button>
                    `
                }

                if (loginInfo != null && loginInfo === reply.memberNo) {
                    temp += `
                        |
                        <button id="delete-reply${reply.replyNo}">삭제</button>
                        |
                        <button id="edit-reply${reply.replyNo}">수정</button>
                    `
                }
                temp += `
                        </div>
                    </div>
                    </div>
                
                `
            }
            temp += `</div>`
            if(reply.replyPNo === 0){
                document.querySelector('#replys').innerHTML += temp;
            }
            if(reply.replyPNo !== 0){
                document.querySelector(`[data-reply-no="${reply.replyPNo}"]`).innerHTML += temp;
            }
        })
        result.forEach((reply) => {
            // 신고 버튼 이벤트 등록
            $(`#replyReport${reply.replyNo}`).on('click', function () {
                getLoginInfo(0, function (re) {
                    if(re !== null){
                            checkReportReply({ cno: reply.replyNo }, function(result){
                                if(result < 1){
                                    $("#report-reply-modal #report-submit-button").off("click");
                                    $("#report-reply-modal #report-submit-button").on("click", function(){
                                        const selectedElement = document.querySelector('#report-reply-modal input[name="reportNumber"]:checked');
                                        if (selectedElement) {
                                            const selectedReportNumber = selectedElement.value;
                                            const reportReason = document.querySelector('#report-reply-modal textarea[name=reportReason').value;
                                            insertReportReply({
                                                replyNo: reply.replyNo,
                                                reportTypeNo: selectedReportNumber,
                                                reportDetail: reportReason
                                            }, function(result){
                                                if(result > 0){
                                                    alert("신고가 정상적으로 처리되었습니다.")
                                                    location.reload(true);
                                                }else{
                                                    alert("신고가 실패하였습니다. 다시 시도해주세요.")
                                                }
                                            })
                                        } else {
                                            alert("신고 사유를 선택해주세요.")
                                        }
                                    })
                                } else {
                                    alert("이미 신고하신 댓글입니다.");
                                    document.querySelector("#report-reply-modal .modal-footer button[data-bs-dismiss=modal]").click();  
                                }
                            })
                    }
                })
            })


            // jQuery로 삭제 버튼 이벤트 등록
            $(`#delete-reply${reply.replyNo}`).on('click', function () {
                deleteReply({replyNo: reply.replyNo}, function (res) {
                    if (res > 0) {
                        document.querySelector(`#reply${reply.replyNo}`).innerHTML = `
                        삭제된 댓글입니다.
                        `
                    }
                });
    
    
    
    
            });
    
            // jQuery로 수정 버튼 이벤트 등록
            $(`#edit-reply${reply.replyNo}`).on('click', function () {
                document.querySelector(`#reply${reply.replyNo}`).innerHTML = `
                <div class="reply-write">
                    <textarea id="reply-write-area2" name="replyContent">`+ reply.replyContent.replace(/<br\s*\/?>/gi, '\n') + `</textarea>
                    <button id="reply-write-btn2" class="reply-write-active"><img src="${contextPath}/resources/static/img/button/Vector.png" alt=""><span class="font-size-subtitle">작성</span></button>
                </div>
                
                `
                $(`#reply-write-btn2`).on('click', function(){
                    editReply({ replyNo: reply.replyNo, replyContent: document.querySelector('#reply-write-area2').value }, function (pi) {
                        if(pi>0){
                            replyList({ cno: a, cpage: b }, function (result) {
                                replyListReload(result, contextPath, a, b)
                            });
                        }
                    });
                })
    
            });

            //jQuery로 답글 버튼 이벤트 등록
            $(`#re-reply${reply.replyNo}`).on('click', function(){
                $(`#re-reply${reply.replyNo}`).off("click");
                const target = document.querySelector(`#reply${reply.replyNo}`);
                if (target && target.nextElementSibling) {
                    target.nextElementSibling.insertAdjacentHTML('afterbegin', `
                        <form class="reply-section" method="post" action="detail/replyWrite">
                            <div class="reply-write">
                                <textarea id="reply-write-area" placeholder="댓은 거울" name="replyContent"></textarea>
                                <input type="hidden" name="cno" value="${a}">
                                <input type="hidden" name="certiNo" value="${urlParam.get('certiNo')}">
                                <input type="hidden" name="replyGroup" value="${reply.replyGroup}">
                                <input type="hidden" name="replyPNo" value="${reply.replyNo}">
                                <input type="hidden" name="cpage" value="${cPage}">
                                <button id="reply-write-btn" class="reply-write-active">
                                    <img src="${contextPath}/resources/static/img/button/Vector.png" alt="">
                                    <span class="font-size-subtitle">작성</span>
                                </button>
                            </div>
                        </form>
                    `);
                } else {
                    document.querySelector(`[data-reply-no="${reply.replyNo}"]`).innerHTML += `
                        <form class="reply-section" method="post" action="detail/replyWrite">
                            <div class="reply-write">
                                <textarea id="reply-write-area" placeholder="댓은 거울" name="replyContent"></textarea>
                                <input type="hidden" name="cno" value="${a}">
                                <input type="hidden" name="certiNo" value="${urlParam.get('certiNo')}">
                                <input type="hidden" name="replyGroup" value="${reply.replyGroup}">
                                <input type="hidden" name="replyPNo" value="${reply.replyNo}">
                                <input type="hidden" name="cpage" value="${cPage}">
                                <button id="reply-write-btn" class="reply-write-active">
                                    <img src="${contextPath}/resources/static/img/button/Vector.png" alt="">
                                    <span class="font-size-subtitle">작성</span>
                                </button>
                            </div>
                        </form>
                    `;
                }
            })
    
        })
    });
}