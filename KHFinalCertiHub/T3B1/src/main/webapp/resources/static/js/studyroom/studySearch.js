function initStudySearch(contextPath){
    initSelectBox(contextPath)
    initBoard()
}

function initSelectBox(contextPath){
    const selectBoxList = document.querySelectorAll('.custom-select');

    selectBoxList.forEach(selectBox => {
        let data = {
            name : 'boardLimit',
            default : '10개씩',
            imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
            items : [
                '10개씩',
                '15개씩',
                '20개씩',
            ]
        }

        createSelectBox(selectBox, data)
    })
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
function initBoard(){
    const boardList = document.querySelector('.board-content');
    
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
            ],
            [
                "제목입니다3",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다4",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다5",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다6",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다7",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다8",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다9",
                "user01",
                "2024.11.05",
                "222",
            ],
            [
                "제목입니다10",
                "user01",
                "2024.11.05",
                "222",
            ],
        ]
    }

    createList(boardList, data)
}