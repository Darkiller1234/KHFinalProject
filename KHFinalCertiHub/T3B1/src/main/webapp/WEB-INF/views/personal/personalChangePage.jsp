<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/personalChangePage.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalChangePage.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/commonPersonal.css">
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
                            <label class="btn btn-outline-primary" for="btnradio1" onclick="location.href='<%=contextPath%>/personal/profile'">프로필 편집</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
                            checked>
                            <label class="btn btn-outline-primary" for="btnradio2" onclick="location.href='<%=contextPath%>/personalChangePage'">개인정보 변경</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
                                >
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
                                            <a class="nav-link active" aria-current="page" href="<%=contextPath%>/personalChangePage">개인정보 변경</a>
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

        <!-- 콘텐츠 영역 -->
        <div class="content">

            <div id="middle-view">

                <div class="left-view">
                    <label for="name">이름</label>
                    <input type="text" class="form-control" id="name" placeholder="이름 입력" name="name" required>

                    <label for="nickName">닉네임</label>
                    <input type="text" class="form-control" id="nickName" placeholder="닉네임 입력" name="nickName" required>

                    <label for="Email">이메일</label>
                    <input type="email" class="form-control" id="Email" placeholder="이메일 입력" name="Email" required>

                    <div class="btns">
                        <button type="submit" class="btn btn-primary">
                        <img src="<%=contextPath%>/resources/static/img/button/Save.png" >
                        저장
                        </button>
                    </div>

                </div>

                <div class="right-view">

                    <!-- 비밀번호 변경 텍스트와 버튼 -->
                    <div class="password-change">
                        <span class="label">비밀번호 변경</span>
                        <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#change-modal">변경하기</button>
                    </div>

                    <!-- 회원 탈퇴 텍스트와 버튼 -->
                    <div class="account-delete">
                        <span class="label">회원 탈퇴</span>
                        <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#delete-modal">회원 탈퇴</button>
                    </div>
                </div>
            </div>
        </div>

            <!-- 비밀번호 변경 모달창 -->
            <div class="modal" id="change-modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">
                                <img src="<%=contextPath%>/resources/static/img/logo/logo_big.png">
                            </h4>
                        </div>
                        <!-- Modal body -->
                        <div class="modal-body">
                            <label for="userPwd">기존 비밀번호</label>
                            <input type="password" class="form-control" id="userPwd" name="userPwd" required>
                            <label for="newcheckPwd">새로운 비밀번호</label>
                            <input type="password" class="form-control" id="newcheckPwd" name="newcheckPwd" required>
                            <label for="checkPwd">새로운 비밀번호 확인</label>
                            <input type="password" class="form-control" id="checkPwd" name="checkPwd" required>
                        </div>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal">변경</button>
                            <button type="button" data-bs-dismiss="modal">취소</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 회원 탈퇴 모달창 -->
            <div class="modal" id="delete-modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">
                                <img src="<%=contextPath%>/resources/static/img/logo/logo_big.png">
                            </h4>
                        </div>
                        <!-- Modal body -->
                        <div class="modal-body">
                            비밀번호를 입력하세요.
                            <input type="password" class="form-control" id="userPwddelete" name="userPwddelete" required>
                        </div>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal">탈퇴</button>
                            <button type="button" data-bs-dismiss="modal">취소</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>