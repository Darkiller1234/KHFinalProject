<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/membership.css">
<script src="<%=contextPath%>/resources/static/js/member/membership.js" defer></script>
<title>회원가입</title>
</head>
<body>
    <div class="wrapper">
        <div class="content">
            <h2>회원가입</h2>
            <div class="hr"></div>

            <h2>간편 회원가입</h2>
            <div class="social-login">
                <button class="google-btn">Sign up with Google</button>
                <button class="kakao-btn">네이버로 가입하기</button>
            </div>

            <p>또는</p>

            <form action="insert.me" method="post" id="membershipForm">
                <div class="form-group">
                    <label for="userId">* 아이디</label>
                    <div style="display: flex; gap: 10px;">
                        <input type="text" class="form-control" id="userId" placeholder="아이디 입력" name="userId" required>
                        <button type="button" class="btn btn-secondary" id="checkIdBtn">중복 확인</button>
                    </div>
                    <span class="error-msg" id="userIdError"></span>

                    <label for="userPwd">* 비밀번호</label>
                    <input type="password" class="form-control" id="userPwd" placeholder="비밀번호 입력" name="userPwd" required minlength="4">

                    <label for="checkPwd">* 비밀번호 확인</label>
                    <input type="password" class="form-control" id="checkPwd" placeholder="비밀번호 확인" name="checkPwd" required>
                    <span class="error-msg" id="checkPwdError"></span>

                    <label for="name">* 이름</label>
                    <input type="text" class="form-control" id="name" placeholder="이름 입력" name="name" required>
                    <span class="error-msg" id="nameError"></span>

                    <label for="nickName">* 닉네임</label>
                    <input type="text" class="form-control" id="nickName" placeholder="닉네임 입력" name="nickName" required>
                    <span class="error-msg" id="nickNameError"></span>

                    <label for="Email">* 이메일</label>
                    <input type="email" class="form-control" id="Email" placeholder="이메일 입력" name="Email" required>
                    <span class="error-msg" id="emailError"></span>

                    <label for="phoneNumber">* 전화번호</label>
                    <input type="text" class="form-control" id="phoneNumber" placeholder="전화번호 입력(-없이)" name="phoneNumber" required>
                    <span class="error-msg" id="phoneNumberError"></span>
                </div>
                <div class="btns">
                    <button type="reset" class="btn btn-danger">취소</button>
                    <button type="submit" class="btn btn-primary">가입하기</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>