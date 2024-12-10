<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/manager/commulist.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/manager/commulist.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper">
            <!-- PC 메뉴 -->
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

                <nav class="navbar bg-body-tertiary page-title font-size-subtitle" id="manageSelect">

                    <!-- 모바일 메뉴 -->
                    <div class="container-fluid">
                        <div class="container-fluid" id="testdiv" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <a class="navbar-brand font-size-title" href="#" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav">메뉴 선택</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"><img
                                        src="<%=contextPath%>/resources/static/img/button/triangle_down.png"
                                        alt=""></span>
                            </button>
                        </div>
    
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        href="<%=contextPath%>/manager/certify">자격증 인증</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        href="<%=contextPath%>/manager/commulist">커뮤니티 게시글 관리</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        href="<%=contextPath%>/manager/list">홍보 게시글 관리</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        href="<%=contextPath%>/manager/report">신고 목록</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        href="<%=contextPath%>/manager/user">유저 관리</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <!-- 검색 폼 -->
                <form class="search-section" action="commulist">
                    <div class="search-form">
                        <input type="text" name="keyword">
                        <button type="submit" class="rounded-circle">
                            <img src="<%=contextPath%>/resources/static/img/button/search_icon.png" alt="검색">
                        </button>
                    </div>
                </form>

                <div class="board-commulist"></div>

                <!-- 페이징바 -->
                <div class="commulist-bar"></div>
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