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

                <form class="search-section" action="notice">
                    <div class="search-form">
                        <input type="text" name="keyword">
                        <button type="submit" class="rounded-circle">
                            <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                        </button> 
                    </div>
                </form>

                <!-- 셀렉트박스 -->
                <div class="site-select"></div>

                <!-- 테이블 -->
                <div class="site-notice"></div>

                <!-- 버튼 -->
                <div class="board-option">
                    <button class="btn btn-primary" onclick="location.href='${pageContext.request.contextPath}/notice/noticewrite'">
                        <img src="${pageContext.request.contextPath}/resources/static/img/button/pencil_icon.png">
                        글쓰기
                    </button>
                </div>

                <!-- 페이징바 -->
                <div class="notice-bar">
                </div>

            </div>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>