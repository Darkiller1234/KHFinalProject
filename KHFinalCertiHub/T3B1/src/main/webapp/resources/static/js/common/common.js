function init(contextPath){
    initSelectBox(contextPath)
    initBoard()
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'tab',
            default : '기본값',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                '내용1',
                '내용2',
                '내용3',
                '내용4'
            ]
        }

        createSelectBox(selectBox, data)
    })
}

function initBoard(){
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

/*
    셀렉트 박스 생성함수
    selectBox : selectBox를 생성할 div
    data : {
        name = 서버로 보낼 input명
        default = selectBox의 default값
        imgUrl = selectBox 화살표 이미지 경로
        items = [ '항목1', '항목2', '항목3'... ]
    }
*/
function createSelectBox(selectBox, data){
    // 서버에 보낼 숨겨진 input 값
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = data.name

    // 서버에 보낼 input값을 표시할 요소
    const button = document.createElement('button');
    button.className = 'button-select';

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
        list.innerText = item;

        // onmousedown으로 blur 처리되기 전에 값 변경
        list.onmousedown = () => {
            // firstChild = 자식요소중 첫번쨰, 텍스트
            // firstChild는 노드이므로 textContent로 읽어와야함
            button.firstChild.textContent = list.innerText;
            input.value = list.innerText;
            itemList.style.visibility = itemList.style.visibility = 'hidden';
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
}

/*
    테이블 생성 함수
    %주의사항 : 첫번째 데이터는 무조건 title로 간주 %

    div : 안에 테이블을 생성할 영역
    data = {
        header : [
            "제목",
            "작성자",
            "삭제",
            ...
        ],
        boardList : [
            [
                "제목입니다1",
                "user01",
                "<button>삭제</button>",
                ...
            ],
            [
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
    header.firstChild.className = "title"
    board.appendChild(header)
    
    data.boardList.forEach(post => {
        let tr = document.createElement('tr')

        post.forEach(data => {
            let td = document.createElement('td')
            td.innerHTML = data;
            
            tr.appendChild(td)
        })
        tr.firstChild.className = "title"
        board.appendChild(tr)
    })

    div.appendChild(board)
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