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
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/personal/anotherPageView.css">

            <div class="wrapper padding">

                <div id="full-view">
                    <div class="top-view">
                        <div id="member-name" class="font-size-title">
                            스타레일고수가될거야 님의 페이지
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-primary" for="btnradio1">프로필 정보</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2">스케쥴</label>
                        </div>
                    </div>
                    <div id="middle-view-profileInfo">
                        <div class="left-view">
                            <div id="simple-profile-view">
                                <img class="profile-image" src="" alt="">
                                <p class="font-size-subtitle">스타레일고수가될거야</p>
                                <div class="like-heart">
                                    <img src="" alt="하트">
                                    <p>234</p>
                                </div>
                                <p class="font-size-content">청계천</p>
                                <div id="favor-certi">
                                    <p class="font-size-subtitle">관심 자격증</p>
                                    <span>정보처리기사</span>
                                    <span>네트워크관리사</span>
                                    <span>빅데이터분석기사</span>
                                    <span>정보보안기사</span>
                                </div>
                            </div>
                            <div id="own-certi-view">
                                <p class="font-size-subtitle">보유 자격증</p>
                                <div id="own-certi">
                                    <p class="font-size-content">정보처리기사, 정보보안기사</p>
                                </div>
                            </div>
                        </div>
                        <div class="right-view">
                            <div id="history-view">
                                <p class="font-size-subtitle">경력</p>
                                <div id="history-list" class="font-size-content">
                                    <p>IT 전문 회사 5초 근무
                                        2000 ~ 2000 네이버 개발직
                                        2000 ~ 2000 네이트 임원
                                        2000 ~ 2000 넥슨 잠복근무</p>
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
                        <div>
                            <img src="" alt="체크">
                            <p>질문가능</p>
                        </div>
                        <div>
                            <img src="" alt="전화중아이콘">
                            <p>신청하기</p>
                        </div>
                    </div>

                </div>
                <div id="non-full-view">
                    <nav class="navbar bg-body-tertiary page-title font-size-title" id="certiSelect">
                        <div class="container-fluid">
                            <a class="navbar-brand font-size-title" href="#">스타레일고수가될거야 님의 페이지</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon">ㅁ</span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">프로필 정보</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">스케줄</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div id="simple-profile-view">
                        <img class="profile-image" src="" alt="">
                        <p class="font-size-subtitle">스타레일고수가될거야</p>
                        <div class="like-heart">
                            <img src="" alt="하트">
                            <p>234</p>
                        </div>
                        <p class="font-size-content">청계천</p>
                        <div id="favor-certi">
                            <p class="font-size-subtitle">관심 자격증</p>
                            <span>정보처리기사</span>
                            <span>네트워크관리사</span>
                            <span>빅데이터분석기사</span>
                            <span>정보보안기사</span>
                        </div>
                    </div>

                    <div id="history-view">
                        <p class="font-size-subtitle">경력</p>
                        <div id="history-list" class="font-size-content">
                            <p>IT 전문 회사 5초 근무
                                2000 ~ 2000 네이버 개발직
                                2000 ~ 2000 네이트 임원
                                2000 ~ 2000 넥슨 잠복근무</p>
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

                    <div class="bottom-view">
                        <div>
                            <img src="" alt="체크">
                            <p>질문가능</p>
                        </div>
                        <div>
                            <img src="" alt="전화중아이콘">
                            <p>신청하기</p>
                        </div>
                    </div>
                    
                </div>

                <div id="full-view-schedule">

                </div>

                <div id="non-full-view-schedule">

                </div>
            </div>
            <%@ include file="../common/footer.jsp" %>
                <script src="<%=contextPath%>/resources/static/js/community/communityMain.js"></script>
    </body>

    </html>