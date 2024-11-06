<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/sitenotice/notice.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/sitenotice/notice.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

</head>
<body>

    <%@ include file="../common/header.jsp" %>

    <div class="wrapper">
        <div class="container">
            <!-- 콘텐츠 영역 -->
            <div class="content">
                <h2>공지사항</h2>

                <div class="search-form">
                    <input type="text">
                    <button class="rounded-circle" onclick="alert('클릭됨')">
                        <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                    </button> 
                </div>

                <!-- 셀렉트박스 -->
                <div class="site-select"></div>

                <!-- 테이블 -->
                <div class="site-notice"></div>

                <div class="btns">
                    <button type="submit" class="btn btn-primary">글쓰기</button>
                </div>

                <!-- 페이징바 -->
                <div class="pagination">
                    <span class="page-arrow">&lt;</span>
                    <span class="page-num">1</span>
                    <span class="page-num active">2</span>
                    <span class="page-num">3</span>
                    <span class="page-num">4</span>
                    <span class="page-num">5</span>
                    <span class="page-arrow">&gt;</span>
                </div>

            </div>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>