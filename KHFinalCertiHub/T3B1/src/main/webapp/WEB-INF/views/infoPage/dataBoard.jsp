<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>자료실게시판</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/infopage/dataBoard.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/infopage/dataBoard.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/infoPage/infoPage.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <div class="wrapper padding">
                <input id="boardNo" type="hidden" value="${board.studyNo}">
                <div class="subtitle">
                    <div class="page-title font-size-content">자료실게시판</div>
                </div>

                <c:forEach var="board" items="${boardList}">
                    <div class="page-title font-size-title">${board.dataBoardTitle}</div>
    
                    <div class="content">
                        ${board.dataBoardContent}
                    </div>
                </c:forEach>
            </div>

            <button class="back-btn" onclick="location.href='${pageContext.request.contextPath}/info/lib'">
                <img src="${pageContext.request.contextPath}/resources/static/img/button/menu_icon.png">
                목록
            </button>
            <div class="bottom-options">
                <button onclick="topScroll()" class="top-button rounded-circle"><img
                        src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
            </div>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>