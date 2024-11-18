// 현재 페이지의 URL 주소
const url = new URL(window.location.href);
// URL의 파라미터값을 가진 객체
const urlParam = url.searchParams;

function certiChange(certiNumber) {
    redirect(certiNumber);
}

function tabNoChange(certiNo, tabNo) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const preFilterNo = urlParam.get('filterNo');
    const preFilterText = urlParam.get('filterText');
    redirect(certiNo, tabNo, 1, $('input[name="array"]').val(), preFilterNo, preFilterText)

}

function pageChange(currentPage, certiNo, tabNo) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const preFilterNo = urlParam.get('filterNo');
    const preFilterText = urlParam.get('filterText');
    redirect(certiNo, tabNo, currentPage, $('input[name="array"]').val(), preFilterNo, preFilterText)
}

function searchExcute(certiNo, tabNo) {
    redirect(certiNo, tabNo, 1, $('input[name="array"]').val(), $('input[name="filter"]').val(), document.querySelector('#search-input-text').value)
}


function keypress(event, certiNo, tabNo) {
    if (event.key === 'Enter') {
        searchExcute(certiNo, tabNo);
    }
}

function DirectAttack(path) {
    location.href = path;
}

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

function commuDInit(contextPath) {
    let data1 = {
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
            // ['제목+내용', 4],
            ['글쓴이', 5]
        ]
    }
    // // 현재 페이지의 URL 주소
    // const url = new URL(window.location.href);
    // // URL의 파라미터값을 가진 객체
    // const urlParam = url.searchParams;
    const preOrderBy = urlParam.get('orderBy');
    const preFilterNo = urlParam.get('filterNo');


    createSelectBox(document.getElementById('selectbox1'), data1);
    createSelectBox(document.getElementById('selectbox2'), data2);

    boardLoading({ cno: urlParam.get('cno') }, function(ev) {
        boardLoadingExecute(ev, contextPath)
    })



    tabChange(contextPath);






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




    // if()
    // document.querySelector('input[name="array"]').value = "원하는 값";


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

    getLikeStatus({ cno: urlParam.get('cno') }, function (result) {
        if (result === 1) {
            document.querySelector('#like-btn').classList.add('selected');

            addModal("이미 좋아하신 게시글입니다.")
        }
        else if (result === 2) {
            document.querySelector('#hate-btn').classList.add('selected');

            addModal("이미 싫어하신 게시글입니다.")
        }
        else if (result === 0) {
            $("#like-btn").on("click", function () {
                $("#like-btn").off("click");
                $("#hate-btn").off("click");
                clickLikeButton(1, { cno: urlParam.get('cno') }, function (result) {
                    if (result === 1) {
                        document.querySelector('#like-btn').classList.add('selected');
                        addModal("이미 좋아하신 게시글입니다.")
                    }
                    boardLoading({ cno: urlParam.get('cno') }, boardLoadingExecute)
                })
            });
            $("#hate-btn").on("click", function () {
                $("#like-btn").off("click");
                $("#hate-btn").off("click");
                clickLikeButton(2, { cno: urlParam.get('cno') }, function (result) {
                    if (result === 1) {
                        document.querySelector('#hate-btn').classList.add('selected');
                        addModal("이미 싫어하신 게시글입니다.")
                    }
                    boardLoading({ cno: urlParam.get('cno') }, boardLoadingExecute)
                })
            });
        }
        else {
            addModal("로그인을 하세요.")
        }
    })


    $("#delete-btn").on("click", function () {
        clickDeleteBtn({ cno: urlParam.get('cno') }, function (result) {
            if (result === 1) {
                location.href = "main?" + "certiNo=" + urlParam.get('certiNo');
            }
        })
    });


    $("#edit-btn").on("click", function () {
        clickEditBtn({ cno: urlParam.get('cno') }, function (result) {
            if (result === 1) {
                location.href = "edit?" + "certiNo=" + urlParam.get('certiNo');
            }
        })
    });

    replyList({ cno: urlParam.get('cno'), cpage: -1 }, function(result){
        replyListReload(result, contextPath);
    });

    replyPaging({ cno: urlParam.get('cno'), cpage: -1 }, function(pi){
        replyPagingReload(pi, contextPath);
    });




    $("#reply-write-area").on("focus", function () {
        document.querySelector('#reply-write-btn').classList.add('reply-write-active');
    });
}

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

function boardLoadingExecute(board, context) {
    document.querySelector("#tabNameP").innerText = board.tabName;
    document.querySelector("#boardTitleP").innerText = board.boardTitle;
    document.querySelector("#nickNameP").innerText = board.memberNickname;
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
        document.querySelector('#nickNameP').innerHTML += `<img src="` + pathImg + `" alt=""></img>`;
    })
}


function replyPagingReload(pi, contextPath) {
    const paging = document.querySelector('#reply-pagination');
    paging.innerHTML = '';
    console.log(pi)
    // 조건 1: 현재 페이지가 1이 아닌 경우, 왼쪽 화살표 추가
    if (pi.currentPage != 1) {
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

            replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 1) }, function(pi){
                replyPagingReload(pi, contextPath);
            });
        });

        
    }

    replyList({ cno: urlParam.get('cno'), cpage: pi.currentPage }, function(result){
        replyListReload(result, contextPath)
    });

    

    $("#reply-cpageMf").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 4) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });


    $("#reply-cpageMthr").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 3) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    
    $("#reply-cpageMtw").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 2) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpageMo").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage - 1) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePo").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 1) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePtw").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 2) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePthr").on("click", function () {
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 3) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    $("#reply-cpagePf").on("click", function () {
            
        replyPaging({ cno: urlParam.get('cno'), cpage: (pi.currentPage + 4) }, function(pi){
            replyPagingReload(pi, contextPath);
        });
    });

    
}

function replyListReload(result, contextPath){
    document.querySelector('#replys').innerHTML = ``;
    result.forEach((reply) => {
        
        document.querySelector('#replys').innerHTML += `
            <div class="reply">
              <img src="` + contextPath + `${reply.memberImg}" alt="">
              <div>
                <p class="font-size-subtitle">${reply.memberNickname}</p>
                <p class="font-size-content">${reply.replyContent}</p>
                <div class="font-size-footer">
                  <button>답글</button>
                  |
                  <button>신고</button>
                  |
                  <button>삭제</button>
                  |
                  <button>수정</button>
                </div>
              </div>
            </div>
        `
    })
}