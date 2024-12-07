<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>서티허브</title>

        <!-- jQuery 먼저 로드 -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <!-- Swiper JS -->
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        <!-- Link Swiper's CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <!-- FullCalendar CSS (CDN) -->
        <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.css" rel="stylesheet" />
        <!-- FullCalendar JS (CDN) -->
        <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/main/mainPage.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/main/mainPage2.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/calendar/calendar.js"></script>
        <!-- <script src="${pageContext.request.contextPath}/resources/static/config/apikey.js"></script> -->

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/main/mainPage.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <div class="wrapper">

                <div class="banner">
                    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
                        space-between="30" centered-slides="true" autoplay-delay="2500"
                        autoplay-disable-on-interaction="false">
                        <swiper-slide><img src="<%=contextPath%>/resources/static/img/banner/banner1.png"
                                alt=""></swiper-slide>
                        <swiper-slide><img src="<%=contextPath%>/resources/static/img/banner/banner2.png"
                                alt=""></swiper-slide>
                        <swiper-slide><img src="<%=contextPath%>/resources/static/img/banner/banner3.png"
                                alt=""></swiper-slide>
                    </swiper-container>
                </div>

                <div class="layer1">
                    <div class="calendar">
                        <div id="calendar"></div>
                    </div>
                    <div id="certies" class="schedule">
                        <h1>이번 달 일정</h1>
                        <select id="cert-select" class="cert-select">
                            <option value="1">기술사 일정</option>
                            <option value="2">기사, 산업기사 일정</option>
                            <option value="3">기능장 일정</option>
                            <option value="4">기능사 일정</option>
                        </select>

                        <ul id="schedule-list">
                            <!-- 선택된 자격증에 맞는 일정이 <li>로 표시됨 -->
                        </ul>
                    </div>
                </div>
            </div>

            <div class="layer2">

                <div class="bestBoard">
                    <h1>베스트 게시물</h1>
                    <div class="BB">
                        <ul>
                            <c:forEach var="board" items="${topPosts}">
                                <li>
                                    <a
                                        href="${pageContext.request.contextPath}/community/detail?certiNo=${board.tabNo}&cno=${board.boardNo}">
                                        ${board.boardTitle} (${board.viewCount} 조회)
                                    </a>
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>

                <div class="notice">
                    <h1>공지사항</h1>
                    <div class="NB">
                        <ul>
                            <c:forEach var="board" items="${latestNotices}">
                                <li>
                                    <a
                                        href="${pageContext.request.contextPath}/community/detail?certiNo=${board.tabNo}&cno=${board.boardNo}">
                                        ${board.boardTitle} (${board.viewCount} 조회)
                                    </a>
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>