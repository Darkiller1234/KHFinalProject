<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/manager/user.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/manager/user.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

    <title>관리자 페이지</title>
</head> 

<body>
    <%@ include file="../common/header.jsp" %>
        <div class="wrapper">
            <div class="container">
                <!-- 사이드바 -->
                <div class="sidebar">
                    <ul>
                        <li><a href="<%=contextPath%>/manager/certify">자격증 인증</a></li>
                        <li><a href="<%=contextPath%>/manager/commulist">커뮤니티 게시글 관리</a></li>
                        <li><a href="<%=contextPath%>/manager/list">홍보 게시글 관리</a></li>
                        <li><a href="<%=contextPath%>/manager/report">신고 목록</a></li>
                        <li><a href="<%=contextPath%>/manager/user">유저 관리</a></li>
                    </ul>
                </div>
                <!-- 콘텐츠 영역 -->
                <div class="content">
                    <h2>관리자 페이지</h2>

                    <!-- 검색 폼 -->
                    <form class="search-form">
                        <input type="text" name="keyword" value="${keyword}">
                        <button type="submit">
                            <img src="<%=contextPath%>/resources/static/img/button/search_icon.png" alt="검색">
                        </button>
                    </form>
                    <br>

                    <div class="board-user"></div>
                    <br>

                    <!-- 페이징바 -->
                    <div class="user-bar"></div>
                </div>
            </div>
        </div>
        <%@ include file="../common/footer.jsp" %>
</body>

</html>