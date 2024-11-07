<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

        <title>Document</title>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/personal/personalCertiRegi.css">

            <div class="wrapper padding">

                <div id="full-view">
                    <div class="top-view">
                        <div id="member-name" class="font-size-title">
                            개인 페이지
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group" id="category-btn">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio1">프로필 편집</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2">개인정보 변경</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-primary" for="btnradio3">자격증 인증 신청</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio4">멘토 신청</label>
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
                    <div id="middle-view-profileInfo">
                        <div class="left-view">
                            <div id="certi-select">
                                <div class="font-size-subtitle">
                                    인증 신청할 자격증
                                    <div id="selectbox1" class="custom-select">

                                    </div>
                                </div> 

                            </div>
                        </div>
                        <div class="right-view">
                            <div id="history-view">
                                <p class="font-size-subtitle">경력</p>
                                <div id="history-list" class="font-size-content">
                                    IT 전문 회사 5초 근무<br>
                                        2000 ~ 2000 네이버 개발직<br>
                                        2000 ~ 2000 네이트 임원<br>
                                        2000 ~ 2000 넥슨 잠복근무<br>
                                </div>
                            </div>
                            <div id="intro-view">
                                <p class="font-size-subtitle">자기소개</p>
                                <div id="intro-detail" class="font-size-content">
                                    <p>
                                        김용하 청계천에 빠뜨리고 싶어
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-view">
                        <div class="font-size-content">
                            <img src="<%=contextPath%>/resources/static/img/personalPage/check.png" alt="체크">
                            <p>질문가능</p>
                        </div>
                        <div class="font-size-subtitle">
                            <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#apply-modal"><img src="<%=contextPath%>/resources/static/img/personalPage/Phonecall.png" alt="전화중아이콘">신청하기</button>
                        </div>
                    </div>



                    

                </div>
                
            </div>
            <%@ include file="../common/footer.jsp" %>
                <script src="<%=contextPath%>/resources/static/js/personal/personalCertiRegi.js"></script>
    </body>

    </html>