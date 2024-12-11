<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/sitenotice/noticewrite.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/sitenotice/noticeEdit.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

    <title>공지사항</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>
        <div class="wrapper">

            <div class="notice-title">공지사항</div>

            <form class="write-section" method="post" action="${pageContext.request.contextPath}/notice/updateBoard">
                <input type="hidden" value="${board.boardNo}" name="boardNo">
                <input type="text" class="title" name="boardTitle" placeholder="이곳에 제목을 입력해주세요.(300Bytes 까지 가능)" value="${board.boardTitle}">
                <div class="board-content">

                    <textarea id="summernote" name="boardContent">${board.boardContent}</textarea>

                </div>
        
                <div class="board-option">
                    <button type="submit" class="btn btn-primary" onclick="location.href='${pageContext.request.contextPath}/notice/notice'">작성완료</button>
                </div>
            </form>
        </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>