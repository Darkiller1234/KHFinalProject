<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalMakeSc.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/anotherPageViewSchedule.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/anotherPageView.css">
        <title>Document</title>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            

            <div class="wrapper padding">

                <div id="full-view">
                    <div class="top-view">
                        <div id="member-name" class="font-size-title">
                            스타레일고수가될거야 님의 페이지
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group" id="category-btn">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-primary" for="btnradio1">프로필 정보</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2">스케쥴</label>
                        </div>

                        <nav class="navbar bg-body-tertiary page-title font-size-subtitle" id="certiSelect">
                            <div class="container-fluid">
                                <a class="navbar-brand font-size-subtitle" href="#">프로필 정보</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon">ㅁ</span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">스케줄</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="middle-view">
                        <div class="left-view">
                            <div id="calendar">
                                <img src="<%=contextPath%>/resources/static/img/personalPage/calendar.png" alt="">
                            </div>
                        </div>
                        <div class="right-view">
                            <div id="today-job">
                                <div class="font-size-subtitle">
                                    오늘의 일정
                                </div>
                                <div>
                                    <div class="font-size-subtitle">
                                        11월 7일 18:00 ~ 20:00
                                    </div>
                                    <div class="font-size-content">
                                        야근
                                    </div>
                                </div>

                            </div>
                            <div id="job-list">
                                <div class="font-size-subtitle">
                                    전체 일정
                                </div>
                                
                                <div>
                                    <div class="font-size-subtitle">
                                        11월 8일 18:00 ~ 20:00
                                    </div>
                                    <div class="font-size-content">
                                        야근
                                    </div>
                                </div>
                                <div>
                                    <div class="font-size-subtitle">
                                        11월 9일 15:00 ~ 18:00
                                    </div>
                                    <div class="font-size-content">
                                        회의
                                    </div>
                                </div>
                                <div>
                                    <div class="font-size-subtitle">
                                        11월 10일 15:00 ~ 18:00
                                    </div>
                                    <div class="font-size-content">
                                        회의
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-view">

                    </div>

                    

                    

                </div>
                
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5 font-size-title" id="exampleModalLabel">일정 생성</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="date-set">
                            <div id="start-date">
                                <input id="start-cal" type="date" required>
                                <input type="time" value="08:00">
                            </div>
                            <div class="font-size-title">
                                ~
                            </div>
                            <div id="end-date">
                                <input id="end-cal" type="date" required>
                                <input type="time" value="19:00">
                            </div>
                        </div>

                        <div id="setting-grid-stuff">
                            <img src="<%=contextPath%>/resources/static/img/personalPage/alarm.png" alt="">
                            <div id="alarm-select" class="custom-select">

                            </div>
                            <img src="<%=contextPath%>/resources/static/img/personalPage/Repeat.png" alt="">
                            <div id="repeat-select" class="custom-select">

                            </div>
                            <div>

                            </div>
                            <div id="repeat-count-select" class="custom-select">

                            </div>
                        </div>

                        <div id="repeat-count-input">
                            반복횟수 : <input type="text">
                        </div>

                        <div id="repeat-date-set">
                            <div id="repeat-start-date">
                                <input id="repeat-start-cal" type="date" required>
                                <input type="time" value="08:00">
                            </div>
                            <div class="font-size-title">
                                ~
                            </div>
                            <div id="repeat-end-date">
                                <input id="repeat-end-cal" type="date" required>
                                <input type="time" value="19:00">
                            </div>
                        </div>

                        
                        
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-primary">일정 저장</button>
                    </div>
                </div>
                </div>
            </div>


            <%@ include file="../common/footer.jsp" %>
                
    </body>

    </html>