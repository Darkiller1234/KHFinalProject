<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper">
        <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
        <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/manager.css">
        <script src="<%=contextPath%>/resources/static/js/member/manager.js"></script>

        <!-- 검색창 -->
        <div class="search-form">
            <input type="text">
            <button class="rounded-circle" onclick="alert('클릭됨')">
                <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
            </button> 
        </div>

        <!-- 리스트 영역 -->
        <div id="listArea">
            <div class="list-item">
                <div class="item-header">
                    <div>No.1</div>
                    <div class="title">제목</div>
                </div>
                <div class="item-footer">
                    <div>등록일</div>
                    <div>조회수</div>
                    <div>삭제</div>
                </div>
            </div>
        </div>

        <!-- 페이징 바 -->
        <div class="pagination">
            <span class="page-arrow"><</span>
            <span class="page-num">1</span>
            <span class="page-num active">2</span>
            <span class="page-num">3</span>
            <span class="page-num">4</span>
            <span class="page-num">5</span>
            <span class="page-arrow">></span>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>