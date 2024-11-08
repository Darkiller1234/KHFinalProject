<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/personalChangePage.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalChangePage.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <title>개인정보 변경</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <h1 class="page-title">
            개인정보 변경
            <img src="<%=contextPath%>/resources/static/img/button/triangle_down.png" alt="Dropdown" class="dropdown-btn" onclick="toggleDropdown()">
        </h1>

        <!-- 드롭다운 메뉴 -->
        <div class="dropdown-content">
            <a href="#">프로필 편집</a>
            <a href="<%=contextPath%>/personalChangePage" selected>개인정보 변경</a>
            <a href="#">자격증 인증 신청</a>
            <a href="#">멘토 신청</a>
        </div>

        <!-- 탭 영역 -->
        <div class="tabs">
            <a href="#" class="tab">프로필 편집</a>
            <a href="<%=contextPath%>/personalChangePage" class="tab active">개인정보 변경</a>
            <a href="#" class="tab">자격증 인증 신청</a>
            <a href="#" class="tab">멘토 신청</a>
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
                        <button type="button" class="btn btn-secondary" id="change-password-btn">변경하기</button>
                    </div>

                    <!-- 회원 탈퇴 텍스트와 버튼 -->
                    <div class="account-delete">
                        <span class="label">회원 탈퇴</span>
                        <button type="button" class="btn btn-danger" id="delete-account-btn">회원 탈퇴</button>
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

    <%@ include file="../common/footer.jsp" %>
</body>
</html>