<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>자료실게시판</title>
        <link rel="stylesheet"
            href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyBoardView.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyBoardView.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/infoPage/infoPage.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <div class="wrapper padding">
                <input id="boardNo" type="hidden" value="${board.studyNo}">
                <div class="subtitle">
                    <div class="page-title font-size-content">자료실게시판</div>

                    <c:if test="${loginMember.memberNo eq board.managerNo}">
                        <div class="title-option">
                            <div class="custom-select"></div>
                        </div>
                    </c:if>
                </div>
            </div>

            <c:forEach var="board" items="${boardList}">
                <div class="page-title font-size-title">${board.dataBoardTitle}</div>

                <div class="content">
                    ${board.dataBoardContent}
                </div>
            </c:forEach>

            <!-- 페이징 처리 -->
            <!-- <div>
                <c:forEach var="i" begin="1" end="${pi.maxPage}">
                    <a href="?cpage=${i}">${i}</a>
                </c:forEach>
            </div> -->


            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>