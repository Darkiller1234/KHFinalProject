<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyBoard.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyBoard.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="board" items="${boardList}">
                    <tr>
                        <td>${board.dataBoardTitle}</td>
                        <td>${board.memberNo}</td>
                        <td>${board.boardDate}</td>
                        <td>${board.viewCount}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>

        <!-- 페이징 처리 -->
        <div>
            <c:forEach var="i" begin="1" end="${pi.maxPage}">
                <a href="?cpage=${i}">${i}</a>
            </c:forEach>
        </div>


    <%@ include file="../common/footer.jsp" %>
</body>
</html>