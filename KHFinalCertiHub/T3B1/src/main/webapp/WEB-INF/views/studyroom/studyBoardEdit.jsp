<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyWrite.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyBoardEdit.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="page-title font-size-title">스터디 홍보 게시판</div>

        <div class="board-title">
            <div class="page-title font-size-subtitle">게시글 수정</div>
        </div>

        <form class="write-section" method="post" action="${pageContext.request.contextPath}/study/updateBoard">
            <input type="hidden" value="${board.boardNo}" name="boardNo">
            <input type="text" class="title" name="boardTitle" placeholder="이곳에 제목을 입력해주세요.(300Bytes 까지 가능)" value="${board.boardTitle}">
            <div class="board-content">
                <textarea id="summernote" name="boardContent">${board.boardContent}</textarea>
            </div>
    
            <div class="board-option">
                <button id="updateButton" type="submit" class="btn btn-primary">수정완료</button>
            </div>
        </form>

    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>