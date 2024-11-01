<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>searchPage</title>
    <!-- <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/common/default.css">  -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/infopage/searchPage.css">
</head>
<body>
    <%@ include file="../common/header.jsp" %>
    <div id="wrapper">
        <h1 class="title">자격증 정보 검색</h1>
    </div>
    <form class="search-form" action="" method="get">
        <input type="text">
        <button type="submit">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/search_icon.png"
             alt="">
        </button>
    </form>
    <div class="container">
        <ul class="tabs">
            <li>분야</li>
            <li>자격증 종류</li>
            <li>일정 상태</li>
        </ul>
    </div>
    <ul class="search-result">
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <%@ include file="../common/footer.jsp" %>
</body>
</html>   