<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/commonPersonal.css">
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
                            <label class="btn btn-outline-primary" for="btnradio1" onclick="location.href='<%=contextPath%>/personal/profile'">프로필 편집</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2" onclick="location.href='<%=contextPath%>/personalChange'">개인정보 변경</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-primary" for="btnradio3" onclick="location.href='<%=contextPath%>/personal/certiRegi'">자격증 인증 신청</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio4" onclick="location.href='<%=contextPath%>/personal/mentor'">멘토 정보 수정</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio5" onclick="location.href='<%=contextPath%>/personal/makeSc'">계획표 만들기</label>
                        </div>

                        <nav class="navbar bg-body-tertiary page-title font-size-subtitle" id="certiSelect">
                            <div class="container-fluid">
                                <div class="container-fluid" id="testdiv" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                    <a class="navbar-brand font-size-title" href="#" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav">자격증 인증 신청</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"><img src="<%=contextPath%>/resources/static/img/button/triangle_down.png" alt=""></span>
                                    </button>
                                </div>
                                
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personal/profile">프로필 편집</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personalChange">개인정보 변경</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personal/certiRegi">자격증 인증 신청</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personal/mentor">멘토 정보 수정</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personal/makeSc">계획표 만들기</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="middle-view">
                        <div class="left-view">
                            <div id="certi-select">
                                <div class="font-size-subtitle">
                                    인증 신청할 자격증
                                    <br><br>
                                    <div id="selectbox1" class="custom-select font-size-content">

                                    </div>
                                </div> 
                                

                            </div>
                        </div>
                        <div class="right-view">
                            <div id="certi-file">
                                
                                <br><br>
                                <div id="upload-btn-div">
                                    <div class="font-size-subtitle">
                                    자격증 파일
                                </div>
                                <br><br>
                                <div id="certi-file-upload">

                                </div>
                                    <img id="profile"src="${pageContext.request.contextPath}/resources/static/img/profile/profileTest.webp" alt="저장">
                                    <button class="font-size-content" id="upload-btn" onclick="chooseImg()">파일 업로드</button>
                                    <div class="file">
                                        <input type="file" id="profileInput" name="memberImg" onchange="loadImg(this)">
                                    </div>
                                    <br><br>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="bottom-view">
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
                <script src="<%=contextPath%>/resources/static/js/personal/personalCertiRegi.js"></script>
    </body>

    </html>