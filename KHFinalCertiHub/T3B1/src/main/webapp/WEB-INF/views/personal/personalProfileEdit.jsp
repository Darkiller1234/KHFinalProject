<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

        <link rel="stylesheet"
            href="${pageContext.request.contextPath}/resources/static/css/personal/personalCertiRegi.css">
        <link rel="stylesheet"
            href="${pageContext.request.contextPath}/resources/static/css/personal/personalProfileEdit.css">

        <link rel="stylesheet"
            href="${pageContext.request.contextPath}/resources/static/css/personal/commonPersonal.css">
        <script
            src="${pageContext.request.contextPath}/resources/static/js/personal/personalProfileEditAjax.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalProfileEdit.js"></script>

        <title>Document</title>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>

            <div class="wrapper padding">

                <div id="full-view">

                    <div class="top-view">
                        <div id="member-name" class="font-size-title">
                            개인 페이지
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group"
                            id="category-btn">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-primary" for="btnradio1"
                                onclick="location.href='<%=contextPath%>/personal/profile'">프로필 편집</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2"
                                onclick="location.href='<%=contextPath%>/personal/Change'">개인정보 변경</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio3"
                                onclick="location.href='<%=contextPath%>/personal/certiRegi'">자격증 인증 신청</label>

                            <c:choose>
                                <c:when test="${loginMember.mentorStatus eq 'Y'}">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4"
                                        autocomplete="off">
                                    <label class="btn btn-outline-primary" for="btnradio4"
                                        onclick="location.href='<%=contextPath%>/personal/mentor'">멘토 정보 수정</label>
                                </c:when>
                                <c:otherwise>
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4"
                                        autocomplete="off">
                                    <label class="btn btn-outline-primary" for="btnradio4"
                                        onclick="location.href='<%=contextPath%>/personal/mentor/enroll'">멘토 신청</label>
                                </c:otherwise>
                            </c:choose>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio5"
                                onclick="location.href='<%=contextPath%>/personal/makeSc'">계획표 만들기</label>
                        </div>

                        <nav class="navbar bg-body-tertiary page-title font-size-subtitle" id="certiSelect">
                            <div class="container-fluid">
                                <div class="container-fluid" id="testdiv" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <a class="navbar-brand font-size-title" href="#" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav">프로필 편집</a>
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
                                                href="<%=contextPath%>/personal/profile">프로필 편집</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page"
                                                href="<%=contextPath%>/personal/Change">개인정보 변경</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page"
                                                href="<%=contextPath%>/personal/certiRegi">자격증 인증 신청</a>
                                        </li>
                                        <li class="nav-item">
                                            <c:choose>
                                                <c:when test="${loginMember.mentorStatus eq 'Y'}">
                                                    <a class="nav-link active" aria-current="page"
                                                        href="<%=contextPath%>/personal/mentor">멘토 정보 수정</a>
                                                </c:when>
                                                <c:otherwise>
                                                    <a class="nav-link active" aria-current="page"
                                                        href="<%=contextPath%>/personal/mentor/enroll">멘토 신청</a>
                                                </c:otherwise>
                                            </c:choose>

                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page"
                                                href="<%=contextPath%>/personal/makeSc">계획표 만들기</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="middle-view">
                        <div class="left-view">
                            <img id="profile" src="${pageContext.request.contextPath}${loginMember.memberImg}" alt="저장">
                            <button class="btn btn-primary" onclick="chooseImg()">파일 업로드</button>
                            <div class="file">
                                <input type="file" id="profileInput" name="memberImg" onchange="loadImg(this)">
                            </div>
                        </div>

                        <div class="right-view">
                            <div class="font-size-title">닉네임 변경</div>
                            <input type="text" class="form-control" name="memberNickname"
                                value="${loginMember.memberNickname}">
                            <div class="font-size-title">자기소개</div>
                            <textarea class="form-control" id="member-intro" name="member-intro" >${loginMember.memberIntro}</textarea>
                            <div class="font-size-title">관심 자격증</div>

                            <div class="choose-menu">
                                <div class="license-choose">
                                </div>
                                <button onclick="addLookLicense(`${pageContext.request.contextPath}`)"
                                    class="btn btn-primary add-license">추가</button>
                            </div>

                            <div class="look-license-list">

                            </div>

                        </div>
                    </div>

                    <div class="bottom-view">
                        <div class="font-size-subtitle">
                            <button id="save-btn" class="btn-primary" data-bs-toggle="modal"
                                data-bs-target="#apply-modal"><img
                                    src="<%=contextPath%>/resources/static/img/button/save_icon.png"
                                    alt="저장">저장</button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 모달창 -->
            <div class="modal" id="apply-modal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">
                                <img src="<%=contextPath%>/resources/static/img/logo/logo_big.png" ">
                </h4>
                </div>

                <!-- Modal body -->
                <div class=" modal-body">
                                저장되었습니다.
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal">닫기</button>
                        </div>

                    </div>
                </div>
            </div>

            <%@ include file="../common/footer.jsp" %>

    </body>

    </html>