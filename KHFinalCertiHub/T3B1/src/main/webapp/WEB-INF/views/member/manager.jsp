<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/manager.css">
    <script src="<%=contextPath%>/resources/static/js/member/manager.js"></script>

    <div class="wrapper">
        <div class="container">
            <!-- 사이드바 -->
            <div class="sidebar">
                <ul>
                    <li><a href="#공지">공지</a></li>
                    <li><a href="#자격증인증">자격증 인증</a></li>
                    <li><a href="#게시글관리">게시글 관리</a></li>
                    <li><a href="#신고목록">신고 목록</a></li>
                    <li><a href="#유저관리">유저 관리</a></li>
                </ul>
            </div>
            <!-- 콘텐츠 영역 -->
            <div class="content">
                <h2>관리자 페이지</h2>

                <div class="search-form">
                    <input type="text">
                    <button class="rounded-circle" onclick="alert('클릭됨')">
                        <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                    </button> 
                </div>
            </div>
        </div>
    </div>
    <%@ include file="../common/footer.jsp" %>
</body>
</html>