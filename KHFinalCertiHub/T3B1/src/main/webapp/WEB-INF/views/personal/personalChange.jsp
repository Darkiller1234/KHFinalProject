<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet"
            href="${pageContext.request.contextPath}/resources/static/css/personal/commonPersonal.css">
        <link rel="stylesheet"
            href="${pageContext.request.contextPath}/resources/static/css/personal/personalChange.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalChangeAjax.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalChange.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <title>개인정보 변경</title>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>

            <div class="wrapper padding">

                <div class="top-view">
                    <div id="member-name" class="font-size-title">
                        개인 페이지
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group" id="category-btn">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio1"
                            onclick="location.href='<%=contextPath%>/personal/profile'">프로필 편집</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
                        <label class="btn btn-outline-primary" for="btnradio2"
                            onclick="location.href='<%=contextPath%>/personal/Change'">개인정보 변경</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio3"
                            onclick="location.href='<%=contextPath%>/personal/certiRegi'">자격증 인증 신청</label>

                        <c:choose>
                            <c:when test="${loginMember.mentorStatus eq 'Y'}">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btnradio4"
                                    onclick="location.href='<%=contextPath%>/personal/mentor'">멘토 정보 수정</label>
                            </c:when>
                            <c:otherwise>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
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
                                    data-bs-target="#navbarNav" aria-controls="navbarNav">개인정보 변경</a>
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
                <script>
                    console.log(`${loginMember}`)
                </script>
                <!-- 콘텐츠 영역 -->
                <div class="content">
                    <h2>비밀번호 입력</h2>
                    <div class="input-container">
                        <input type="password" class="form-control" id="userPwd" placeholder="여기에 PlaceHolder 입력"
                            name="userPwd" required>
                    </div>
                    <div class="btns">
                        <button type="button" class="btn btn-primary font-size-title" onclick="validateAndRedirect()">입력</button>
                    </div>
                </div>
            </div>

            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>