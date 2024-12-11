<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/sitenotice/noticepost.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/sitenotice/noticepost.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper">
        <div class="subtitle">
            <div class="page-title font-size-content">공지사항</div>

        </div>

        <div class="page-title font-size-title">${board.boardTitle}</div>

        <div class="content">
            ${board.boardContent}
        </div>
    </div>

    <div class="option">
        <button class="delete btn-primary">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/trash_icon.png">
            삭제
        </button>
        <button class="modify btn-primary">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/scissors_icon.png">
            수정
        </button>
        <button class="back btn-primary" onclick="location.href='${pageContext.request.contextPath}/notice/notice'">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/menu_icon.png">
            목록
        </button>
    </div>


    <div class="bottom-options">
        <button onclick="topScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>