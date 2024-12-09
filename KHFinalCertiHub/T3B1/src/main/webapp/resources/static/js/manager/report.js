function initReportPage(contextPath) {
    initReport(contextPath);
}

function initReport(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const keyword = urlParam.get('keyword');
    const currentPage = urlParam.get('cpage') ?? 1;

    // 테이블 요소 선택
    const table = $(".board-certify .board");

    // AJAX 요청
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
                    item.reporter,      // 신고자
                    item.reported,      // 피신고자
                    item.type,          // 무엇을?
                    item.content || "-", // 신고당한 내용 (없으면 "-")
                    item.category,      // 신고종류
                    item.reason         // 신고 사유
                ];

                rowData.forEach(data => {
                    const td = $("<td></td>").text(data); // td 생성
                    newRow.append(td); // tr에 추가
                });

                // 삭제 버튼 추가
                const deleteTd = $("<td></td>");
                const deleteButton = $("<button>삭제</button>").attr("data-id", item.id); // ID 저장
                deleteTd.append(deleteButton);
                newRow.append(deleteTd);

                // 무시 버튼 추가
                const ignoreTd = $("<td></td>");
                const ignoreButton = $("<button>무시</button>").attr("data-id", item.id); // ID 저장
                ignoreTd.append(ignoreButton);
                newRow.append(ignoreTd);

                // 테이블에 tr 추가
                table.append(newRow);
            });

            // 삭제 버튼 클릭 이벤트
            table.on("click", "button:contains('삭제')", function () {
                const id = $(this).data("id"); // 버튼의 data-id 가져오기
                $.ajax({
                    url: `/your/api/delete/${id}`, // 삭제 API 호출
                    type: 'DELETE',
                    success: function () {
                        alert(`ID ${id} 삭제 완료`);
                        location.reload(); // 테이블 새로고침
                    },
                    error: function (xhr, status, error) {
                        alert(`삭제 실패: ${error}`);
                    }
                });
            });

            // 무시 버튼 클릭 이벤트
            table.on("click", "button:contains('무시')", function () {
                const id = $(this).data("id"); // 버튼의 data-id 가져오기
                $.ajax({
                    url: `/your/api/ignore/${id}`, // 무시 API 호출
                    type: 'POST',
                    success: function () {
                        alert(`ID ${id} 무시 완료`);
                        location.reload(); // 테이블 새로고침
                    },
                    error: function (xhr, status, error) {
                        alert(`무시 실패: ${error}`);
                    }
                });
            });
        },
        error: function (xhr, status, error) { // 요청 실패 시 실행
            console.error("데이터 로드 실패:", error);
        }
    });
}
