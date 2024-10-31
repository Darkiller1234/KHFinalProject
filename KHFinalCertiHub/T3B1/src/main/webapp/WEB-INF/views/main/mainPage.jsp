<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>서티허브</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/common/mainPage.css">
</head>

<body>
    <%@ include file="../common/header.jsp" %>
        <div class="wrapper">
            <div class="banner">
                <img src="<%=contextPath%>/resources/static/img/temporary/mainBanner.png" alt="">
            </div>

            <div class="layer1">
                <div class="calendar">
                    <img src="<%=contextPath%>/resources/static/img/temporary/calendar.png" alt="">
                </div>
                <div class="schedule">
                    <h1>10월 일정</h1>
                </div>

            </div>

            <div class="layer2">
                <div class="bestBoard">
                    <h1>베스트 게시물</h1>
                </div>
                <div class="notice">
                    <h1>공지사항</h1>
                </div>
            </div>
        </div>

        <%@ include file="../common/footer.jsp" %>
</body>

</html>