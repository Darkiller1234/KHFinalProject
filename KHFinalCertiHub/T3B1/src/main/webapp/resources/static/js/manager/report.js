function initReportPage(contextPath) {
    initReport(contextPath);
}

function initReport(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;

    // 테이블 요소 선택
    const table = $(".board-certify .board");

    // AJAX 요청
    loadAjax(contextPath, 1, null)
    
}

function loadAjax(contextPath, currentPage, keyword) {
    $.ajax({
        url: 'reportList', // API 엔드포인트 입력
        method: 'post',
        data: {
            keyword: keyword,
            currentPage: currentPage
        },
        success: function (data) {
            const pageInfo = JSON.parse(data.pageInfo);
            const board = JSON.parse(data.board);
            console.log(data)
            board.forEach(item => {
                
                // 새로운 tr 요소 생성
                const newRow = $("<tr></tr>");

                // td 데이터 생성 및 추가
                const rowData = [
                    item.accuserNickName,      // 신고자
                    item.accusedNickName,      // 피신고자
                ];
                

                rowData.forEach(data => {
                    const td = $("<td></td>").text(data); // td 생성
                    newRow.append(td); // tr에 추가
                });

                if(item.studyBoardNo !== 0){
                    const td = $("<td></td>").text("스터디"); // td 생성
                    newRow.append(td); // tr에 추가

                    const detailTd = $("<td></td>");
                    const detailButton = $("<button>내용</button>").attr("data-id", item.studyBoardNo); // ID 저장
                    detailButton.attr("data-name", "스터디");
                    detailTd.append(detailButton);
                    newRow.append(detailTd);

                }
                else if(item.replyNo !== 0){
                    const td = $("<td></td>").text("댓글"); // td 생성
                    newRow.append(td); // tr에 추가

                    const detailTd = $("<td></td>");
                    const detailButton = $("<button>내용</button>").attr("data-id", item.replyNo); // ID 저장
                    detailButton.attr("data-name", "댓글");
                    detailTd.append(detailButton);
                    newRow.append(detailTd);
                }
                else if(item.messageNo !== 0){
                    const td = $("<td></td>").text("메세지"); // td 생성
                    newRow.append(td); // tr에 추가

                    const detailTd = $("<td></td>");
                    const detailButton = $("<button>내용</button>").attr("data-id", item.messageNo); // ID 저장
                    detailButton.attr("data-name", "메세지");
                    detailTd.append(detailButton);
                    newRow.append(detailTd);
                }
                else if(item.boardNo !== 0){
                    const td = $("<td></td>").text("글"); // td 생성
                    newRow.append(td); // tr에 추가

                    const detailTd = $("<td></td>");
                    const detailButton = $("<button>내용</button>").attr("data-id", item.boardNo); // ID 저장
                    detailButton.attr("data-name", "글");
                    detailTd.append(detailButton);
                    newRow.append(detailTd);
                }
                else {
                    const td = $("<td></td>").text("유저"); // td 생성
                    newRow.append(td); // tr에 추가

                    const t_d = $("<td></td>").text("-"); // td 생성
                    newRow.append(t_d); // tr에 추가
                }

                const reportType = $("<td></td>").text(item.reportTypeDetail);
                newRow.append(reportType); // tr에 추가

                if(item.reportDetail === null || item.reportDetail === undefined){
                    const reportDetail = $("<td></td>").text("없음");
                    newRow.append(reportDetail); // tr에 추가
                }else {
                    const detailTd = $("<td></td>");
                    const detailButton = $("<button>보기</button>").attr("data-detail", item.reportDetail); // ID 저장
                    detailTd.append(detailButton);
                    newRow.append(detailTd);
                }
                





                // 삭제 버튼 추가
                const deleteTd = $("<td></td>");
                const deleteButton = $("<button>삭제</button>").attr("data-id", item.reportNo); // ID 저장

                if(item.studyBoardNo !== 0){
                    deleteButton.attr("data-name", "스터디")

                }
                else if(item.replyNo !== 0){
                    deleteButton.attr("data-name", "댓글")
                    
                }
                else if(item.messageNo !== 0){
                    deleteButton.attr("data-name", "메세지")
                    
                }
                else if(item.boardNo !== 0){
                    deleteButton.attr("data-name", "글")
                    
                }
                else {
                    
                    deleteButton.attr("data-name", "유저")
                }
                
                deleteTd.append(deleteButton);
                newRow.append(deleteTd);

                // 무시 버튼 추가
                const ignoreTd = $("<td></td>");
                const ignoreButton = $("<button>무시</button>").attr("data-id", item.reportNo); // ID 저장
                ignoreTd.append(ignoreButton);
                newRow.append(ignoreTd);

                // 테이블에 tr 추가
                table.append(newRow);
            });

            // 링크 버튼 클릭 이벤트
            // $('#apply-modal').modal('hide'); // 모달 닫기
            table.on("click", "button:contains('내용')", function () {
                $('#apply-modal .modal-body').html("잠시만 기다려주세요...");
                switch ($(this).data("name")) {
                    case "스터디":
                        $('#apply-modal').modal('show'); // 모달 띄우기
                        $.ajax({
                            url: "report/getStudy",
                            method: 'post',
                            data: {
                                boardNo: $(this).data("id")
                            },
                            success: function(res){
                                let string = "";
                                string += "제목: " + res.studyBoardTitle + "<br><br>" + res.studyBoardContent;
                                $('.modal-body').html(string);
                            },
                            error: function(res){
                                console.log("스터디 보드 ajax 오류");
                            }
                        })
                        break;
                    case "댓글":
                        $('#apply-modal').modal('show'); // 모달 띄우기
                        $.ajax({
                            url: "report/getReply",
                            method: 'post',
                            data: {
                                replyNo: $(this).data("id")
                            },
                            success: function(res){
                                let string = "";
                                string += res.replyContent;
                                $('.modal-body').html(string);
                            },
                            error: function(res){
                                console.log("댓글 ajax 오류");
                            }
                        })
                        break;
                    case "메세지":
                        $('#apply-modal').modal('show'); // 모달 띄우기
                        $.ajax({
                            url: "report/getMessage",
                            method: 'post',
                            data: {
                                messageNo: $(this).data("id")
                            },
                            success: function(res){
                                let string = "";
                                string += "제목: " + res.studyBoardTitle + "<br><br>" + res.studyBoardContent;
                                $('.modal-body').html(string);
                            },
                            error: function(res){
                                console.log("스터디 보드 ajax 오류");
                            }
                        })
                        break;
                    case "글":
                        $('#apply-modal').modal('show'); // 모달 띄우기
                        $.ajax({
                            url: "report/getBoard",
                            method: 'post',
                            data: {
                                boardNo: $(this).data("id")
                            },
                            success: function(res){
                                let string = "";
                                string += "제목: " + res.boardTitle + "<br><br>" + res.boardContent;
                                $('.modal-body').html(string);
                            },
                            error: function(res){
                                console.log("보드 ajax 오류");
                            }
                        })
                        break;
                    default:
                        $('.modal-body').html("이 버튼은 대체 뭐냐아아아...");
                        break;
                }
            });


            // 신고 사유 버튼 클릭 이벤트
            table.on("click", "button:contains('보기')", function () {
                const detail = $(this).data("detail"); // 버튼의 data-id 가져오기
                $('.modal-body').html("사유: " + detail);
                $('#apply-modal').modal('show'); // 모달 띄우기
            });




            $('#delete-modal .modal-body').html("정말 삭제하시겠습니까?");
                $('#delete-modal').modal('show'); // 모달 띄우기
            // 삭제 버튼 클릭 이벤트
            table.on("click", "button:contains('삭제')", function () {
                
                const name = $(this).data("name");
                const id = $(this).data("id"); // 버튼의 data-id 가져오기
                if(name === "스터디") {
                    $('#delete-modal .modal-body').html("스터디 홍보글<br>삭제를 하시겠습니까?");
                } else {
                    $('#delete-modal .modal-body').html(`${name}<br>삭제를 하시겠습니까?`);
                }
                $('#delete-modal').modal('show');
                $("#modalDeleteBtn").on("click", function(){
                    $("#modalDeleteBtn").off("click");
                    $('#apply-modal .modal-body').html("잠시만 기다려주세요...");
                    $('#delete-modal').modal('hide');
                    $('#apply-modal').modal('show');
                    $.ajax({
                        url: "report/deleteReport",
                        method: 'post',
                        data: {
                            name: name,
                            reportNo: id
                        },
                        success: function(res){
                            if(res > 0){
                                //삭제 성공 모달 띄우기
                                $('#apply-modal .modal-body').html("삭제를 성공하였습니다.");
                                loadAjax(contextPath, currentPage, keyword);
                            }
                        },
                        error: function(res){
                            console.log("삭제 ajax 오류");
                        }
                    })
                })
            });

            // 무시 버튼 클릭 이벤트
            table.on("click", "button:contains('무시')", function () {
                const id = $(this).data("id"); // 버튼의 data-id 가져오기
                $('#apply-modal .modal-body').html("잠시만 기다려주세요...");
                $('#apply-modal').modal('show');
                $.ajax({
                    url: "report/ignoreReport", // 무시 API 호출
                    method: 'post',
                    data:{
                        reportNo: id
                    },
                    success: function () {
                        $('#apply-modal .modal-body').html("정상적으로 처리되었습니다.");
                    },
                    error: function (xhr, status, error) {
                        $('#apply-modal .modal-body').html("실패! 서버 로그를 확인하세요");
                    }
                });
            });
        },
        error: function (xhr, status, error) { // 요청 실패 시 실행
            console.error("데이터 로드 실패:", error);
        }
    });
}