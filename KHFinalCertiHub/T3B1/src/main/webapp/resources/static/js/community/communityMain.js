function certiChange(certiNumber) {
    redirect(certiNumber);
}

function tabNoChange(certiNo, tabNo){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const preFilterNo = urlParam.get('filterNo');
    const preFilterText = urlParam.get('filterText');
    redirect(certiNo, tabNo, 1, $('input[name="array"]').val(), preFilterNo, preFilterText)
    
}

function pageChange(currentPage, certiNo, tabNo){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const preFilterNo = urlParam.get('filterNo');
    const preFilterText = urlParam.get('filterText');
    redirect(certiNo, tabNo, currentPage, $('input[name="array"]').val(), preFilterNo, preFilterText)
}

function searchExcute(certiNo, tabNo){
    redirect(certiNo, tabNo, 1, $('input[name="array"]').val(), $('input[name="filter"]').val(), document.querySelector('#search-input-text').value)
}


function keypress(event, certiNo, tabNo){
    console.log("asdf")
    if (event.key === 'Enter') {
        searchExcute(certiNo, tabNo);
    }
}

function DirectAttack(path){ // 함수명 직관적으로 지어주세요 = 일동
    location.href=path;
}

function redirect(certiNo, tabNo, currentPage, orderBy, filterNo, filterText){
    let path = "main?";
    if(certiNo){
        path += `certiNo=${certiNo}&`;
    }
    if(tabNo){
        path += `tabNo=${tabNo}&`;
    }
    if(currentPage){
        path += `cpage=${currentPage}&`;
    }
    if(orderBy){
        path += `orderBy=${orderBy}&`;
    }
    if(filterNo){
        path += `filterNo=${filterNo}&`;
    }
    if(filterText){
        path += `filterText=${filterText}&`;
    }
    location.href=path;
}

function commuMInit(contextPath){
    let data1 = {
        name : 'array',
        default : '최신순',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['최신순', 1],
            ['추천순', 2],
            ['조회순', 3]
        ]
    }

    let data2 = {
        name : 'filter',
        default : '제목',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['전체', 1],
            ['제목', 2],
            ['내용', 3],
            // ['제목+내용', 4],
            ['글쓴이', 5]
        ]
    }

    createSelectBox(document.getElementById('selectbox1'), data1);
    createSelectBox(document.getElementById('selectbox2'), data2);

    tabChange(contextPath);


    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const preOrderBy = urlParam.get('orderBy');
    const preFilterNo = urlParam.get('filterNo');

    if(preOrderBy !== undefined){
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

    if(preFilterNo !== undefined){
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
}

function tabChange(contextPath) {
    document.querySelectorAll('.listArea-div1-tab, .listArea-div2-tab').forEach(function(ev){


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



function poppularAll(data, callback){
    $.ajax({
        url: "detail/poppularAll",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("전체개시판 인기글 ajax 오류");
        }
    })
}

function poppularThis(data, callback){
    $.ajax({
        url: "detail/poppularThis",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("현재개시판 인기글 ajax 오류");
        }
    })
}