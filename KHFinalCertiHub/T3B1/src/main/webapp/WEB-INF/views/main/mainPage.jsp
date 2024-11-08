<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>서티허브</title>
    
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <script src="${pageContext.request.contextPath}/resources/static/js/main/mainPage.js"></script>

</head>
<body>
    <%@ include file="../common/header.jsp" %>
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/main/mainPage.css">
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css"> 
        <div class="wrapper">

            <div class="banner">
                <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
                    <swiper-slide><img src="<%=contextPath%>/resources/static/img/banner/banner1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="<%=contextPath%>/resources/static/img/banner/banner2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="<%=contextPath%>/resources/static/img/banner/banner3.png" alt=""></swiper-slide>
                </swiper-container>
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