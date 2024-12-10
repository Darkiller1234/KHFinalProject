<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/manager/certify.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/manager/certify.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper">
        <!-- 사이드바 -->
        <div class="sidebar">
            <ul>
                <li><a href="<%=contextPath%>/manager/manager">공지</a></li>
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
            <form class="search-section" action="certify">
                <div class="search-form">
                    <input type="text" name="keyword">
                    <button type="submit" class="rounded-circle">
                        <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                    </button> 
                </div>
            </form>

            <div class="board-certify"></div>

            <!-- 페이징바 -->
            <div class="certify-bar"></div>
        </div>
    </div>

    <div class="modal" id="licenseImg">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">                
                        <img 
                        src="<%=contextPath%>/resources/static/img/logo/logo_big.png"
                        ">
                    </h4>
                    <button id="closeButton" class="confirm" type="button" data-bs-dismiss="modal">
                        <img
                        src="<%=contextPath%>/resources/static/img/button/x_icon.png"
                        >
                    </button>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body">
                    <img id="license-img">
                    <div id="license-name" class="font-size-title"></div>
                    <div id="user-name" class="font-size-subtitle"></div>
                </div>
        
            </div>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>