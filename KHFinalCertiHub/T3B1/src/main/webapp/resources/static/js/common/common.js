/* init 부터  */
function init(contextPath){
    testSelectBox(contextPath)
    testBoard()
}

function testSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'tab',
            default : '기본값',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                ['내용1'],
                ['내용2'],
                ['내용3'],
                ['내용4']
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function testBoard(){
    const testBoard = document.querySelector('.test-board');
    
    let data = {
        header : [
            "제목",
            "작성자",
            "작성일",
            "조회",
        ],
        boardList : [
            [
                "제목입니다1",
                "user01",
                "2024.11.05",
                "111",
            ],
            [
                "제목입니다2",
                "user01",
                "2024.11.05",
                "222",
            ]
        ]
    }

    createList(testBoard, data)
}
/* 여기까지 완성시 없앨것 */

/*
    셀렉트 박스 생성함수
    selectBox : selectBox를 생성할 div
    data : {
        name = 서버로 보낼 input명
        default = selectBox의 표시되는 default값
        defaultValue = selectBox의 default value 값 ( 실제 전송되는 값 )
        imgUrl = selectBox 화살표 이미지 경로
        items = [
            ['항목1'], 
            ['항목2', 항목에 부여할 값(dataset.value에 부여), 항목에 부여할 onmousedonw 함수 ],
            ['항목3'],
            ... 
        ]
    }
*/
function createSelectBox(div, data){
    const selectBox = document.createElement('div');
    selectBox.className = 'custom-select';

    // 서버에 보낼 숨겨진 input 값
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = data.name
    if(data.defaultValue){
        input.value = data.defaultValue
    }

    // 서버에 보낼 input값을 표시할 요소
    const button = document.createElement('button');
    button.className = 'button-select';
    button.type = "button";

    const buttonText = document.createElement('div');
    buttonText.innerText = data.default;

    button.appendChild(buttonText);

    // 셀렉트박스의 삼각형 이미지
    const buttonImg = document.createElement('img');
    buttonImg.src = data.imgUrl;

    button.appendChild(buttonImg);

    // 셀렉트박스의 옵션
    const itemList = document.createElement('ul')
    itemList.className = 'item-list';
    itemList.style.visibility = 'hidden';
    
    data.items.forEach(item => {
        let list = document.createElement('li');
        list.className = 'item';
        list.innerText = item[0];

        if(item.length === 2 && item != null){
            list.dataset.value = item[1]
        }

        // onmousedown으로 blur 처리되기 전에 값 변경
        list.onmousedown = () => {
            // firstChild = 자식요소중 첫번쨰, 텍스트
            // firstChild는 노드이므로 textContent로 읽어와야함
            button.firstChild.textContent = list.innerText;
            input.value = list.dataset.value;
            itemList.style.visibility = itemList.style.visibility = 'hidden';
        }

        
        if(item.length === 3){
            list.onmousedown = item[2] // item[1] : 직접 작성한 함수
        }

        itemList.appendChild(list);
    })

    // 이벤트 부여
    // 버튼 누를때마다 옵션 리스트 토글
    button.onclick = () => {
        itemList.style.visibility = itemList.style.visibility === 'hidden' ? 'visible' : 'hidden';
        if(itemList.style.visibility === 'hidden')
            button.blur();
    }

    // 포커스 해재시 옵션 리스트 숨김처리
    button.onblur = () => {
        itemList.style.visibility = itemList.style.visibility = 'hidden';
    }

    selectBox.appendChild(input);
    selectBox.appendChild(button);
    selectBox.appendChild(itemList);

    div.appendChild(selectBox);
}

/*
    테이블 생성 함수
    %주의사항 : 첫번째 데이터는 무조건 키값으로 간주 %

    div : 안에 테이블을 생성할 영역
    data = {
        url: contextPath + "이동할 경로?no=" ex) contextPath + "/study/board?no=",
        titleIndex: n( n번째 요소를 타이틀로 설정 ),
        events: [
            [
                2(이벤트 부여할 컬럼번호), eventfunction(부여할 이벤트 함수명)
            ],
            [
                3, eventfunction
            ]
        ],
        header : [
            "제목",
            "작성자",
            "삭제",
            ...
        ],
        boardList : [
            [
                "해당 보드 기본키값",
                "제목입니다1",
                "user01",
                "<button>삭제</button>",
                ...
            ],
            [
                "해당 보드 기본키값",
                "제목입니다2",
                "user01",
                "<button>삭제</button>",
                ...
            ]
        ]
    }
*/
function createList(div, data){
    const board = document.createElement('table')
    board.className = 'board'

    const header = document.createElement('tr')
    header.className = 'header bgcolor2'

    /* 테이블 헤더 생성 */
    data.header.forEach(head => {
        let th = document.createElement('th')
        th.innerText = head

        header.appendChild(th)
    })

    // titleIndex를 data에 넣지않으면, 맨 앞 요소를 title로 간주
    // titleIndex 값이 있다면 해당 숫자번째 요소를 title로 설정
    const titleIndex = data?.titleIndex === undefined ? 0 : data.titleIndex - 1;
    const events = data.events;

    header.children[titleIndex].className = "title"
    board.appendChild(header)

    data.boardList.forEach(post => {
        let tr = document.createElement('tr')
        post.slice(1,post.length).forEach(data => {
            let td = document.createElement('td')
            td.innerHTML = data;

            tr.appendChild(td)
        })
        tr.children[titleIndex].className = "title"
        if(post[0] != null) {
            tr.children[titleIndex].onclick = () => {
                location.href= data.url + post[0]
            }
        }

        // ev[0] : 이벤트를 부여할 컬럼 번호
        // ev[1] : 해당 컬럼에 부여할 이벤트 함수
        if(events != null){
            events.forEach(ev => {
                let eventIndex = ev[0] <= 0 ? 0 :ev[0] - 1;
                tr.children[eventIndex].onclick = () => { 
                    ev[1]()
                }
            })
        }

        board.appendChild(tr)
    })

    div.appendChild(board)
}

/*
    페이징바 생성함수
    data = {
        startPage : 시작번호,
        endPage : 끝번호,
        currentPage : 현재 선택된 페이지 번호,
        pageUrl : 클릭시 이동할 페이지 경로, ex) contextPath + '/study/list?',
        imgUrl : [
            "왼쪽 화살표 이미지 주소",
            "오른쪽 화살표 이미지 주소"
        ]
    }
*/
function createPageBar(div, data){
    const pageDiv = document.createElement('div')
    pageDiv.className = "pagination"

    const leftArrow = document.createElement('span')
    const rightArrow = document.createElement('span')
    leftArrow.className = "page-arrow"
    rightArrow.className = "page-arrow"

    const leftArrowImg = document.createElement('img')
    const rightArrowImg = document.createElement('img')
    leftArrowImg.src = data.imgUrl[0];
    rightArrowImg.src = data.imgUrl[1];

    leftArrow.appendChild(leftArrowImg)
    rightArrow.appendChild(rightArrowImg)

    if(data.currentPage !== 1) {
        leftArrow.onclick = () => {
            location.href = data.pageUrl + '&p=' + (data.currentPage - 1)
        }
    }
    if(data.currentPage !== data.maxPage){
        rightArrow.onclick = () => {
            location.href = data.pageUrl + '&p=' + (data.currentPage + 1)
        }
    }

    // 페이지바 생성
    pageDiv.appendChild(leftArrow)
    for(let i = data.startPage; i <= data.endPage; i++){
        let pageButton = document.createElement('span')
        pageButton.className = "page-num"
        pageButton.innerText = i

        if(i == data.currentPage){
            pageButton.className +=" active"
        }

        pageButton.onclick = () => {
            location.href = data.pageUrl + '&p=' + i;
        }

        pageDiv.appendChild(pageButton)
    }
    pageDiv.appendChild(rightArrow)

    div.appendChild(pageDiv)
}

// 자리수 변환 함수 ( K, M )
function converseDigit(num){
    const isKilo = new RegExp('^[0-9]{4,6}$')
    const isMillion = new RegExp('^[0-9]{7,}$')

    if(isKilo.test(num)){
        num = (num / 1000).toFixed(1) +'K'
    } else if(isMillion.test(num)){
        num = (num / 1000000).toFixed(1) + 'M'
    }
    return num
}

function topScroll(){
    /*
        IE, FireFox
        document.documentElement.scrollTop = y축 스크롤 거리
        => 크롬, 사파리 등등에도 존재하나 값이 항상 0

        Chrome, safari, opera, edge ...
        document.body.scrollTop : y  = y축 스크롤 거리

        브라우저마다 다르므로 둘다 체크
        만약 Y축 스크롤이 된 상태일 경우 실행한다.
    */
    const position =
    document.documentElement.scrollTop || document.body.scrollTop;
    
    if (position) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}