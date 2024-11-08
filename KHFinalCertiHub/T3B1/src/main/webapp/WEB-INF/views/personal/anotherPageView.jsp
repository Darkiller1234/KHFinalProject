<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/commonPersonal.css">

        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/anotherPageView.css">
        <title>Document</title>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            

            <div class="wrapper padding">

                <div id="full-view">
                    
                    <div class="top-view">
                        <div id="member-name" class="font-size-title">
                            스타레일고수가될거야님의 페이지
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group" id="category-btn">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                            checked>
                            <label class="btn btn-outline-primary" for="btnradio1" onclick="location.href='<%=contextPath%>/personal/view'">프로필 정보</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2" onclick="location.href='<%=contextPath%>/personal/viewSc'">스케줄</label>
                        </div>

                        <nav class="navbar bg-body-tertiary page-title font-size-subtitle" id="certiSelect">
                            <div class="container-fluid">
                                <div class="container-fluid" id="testdiv" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                    <a class="navbar-brand font-size-title" href="#" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav">프로필 정보</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"><img src="<%=contextPath%>/resources/static/img/button/triangle_down.png" alt=""></span>
                                    </button>
                                </div>
                                
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personal/view">프로필 정보</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personal/viewSc">스케줄</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="middle-view-profileInfo">
                        <div class="left-view">
                            <div id="simple-profile-view">
                                <img class="profile-image" src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" alt="">
                                <p class="font-size-subtitle">스타레일고수가될거야</p>
                                <div class="like-heart">
                                    <button><img src="<%=contextPath%>/resources/static/img/profile/heart.png" alt="하트"></button>
                                    <p>234</p>
                                </div>
                                <p class="font-size-content">청계천</p>
                                <div id="favor-certi">
                                    <p class="font-size-subtitle">관심 자격증</p>
                                    <div class="look-license">
                                        <div class="tag bgcolor3 font-size-content">정보처리기사</div>
                                        <div class="tag bgcolor3 font-size-content">빅데이터분석기사</div>
                                        <div class="tag bgcolor3 font-size-content">네트워크관리사</div>
                                        <div class="tag bgcolor3 font-size-content">정보보안기사</div>
                                        <div class="tag bgcolor3 font-size-content">빅데이터분석기사</div>
                                    </div>
                                </div>
                            </div>
                            <div id="own-certi-view">
                                <p class="font-size-subtitle">보유 자격증</p>
                                <div class="look-license">
                                    <div class="tag bgcolor3 font-size-content">정보처리기사</div>
                                    <div class="tag bgcolor3 font-size-content">정보보안기사</div>
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



                    <!-- 모달창 -->
                    <div class="modal" id="apply-modal">
                        <div class="modal-dialog">
                        <div class="modal-content">
                    
                            <!-- Modal Header -->
                            <div class="modal-header">
                            <h4 class="modal-title">                
                                <img 
                                src="<%=contextPath%>/resources/static/img/logo/logo_big.png"
                                ">
                            </h4>
                            </div>
                    
                            <!-- Modal body -->
                            <div class="modal-body">
                            신청되었습니다.
                            </div>
                    
                            <!-- Modal footer -->
                            <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal">닫기</button>
                            </div>
                    
                        </div>
                        </div>
                    </div>

                </div>
                
            </div>
            <%@ include file="../common/footer.jsp" %>
                <script src="<%=contextPath%>/resources/static/js/community/communityMain.js"></script>
    </body>

    </html>