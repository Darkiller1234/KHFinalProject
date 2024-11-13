<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/login.css">
<script src="<%=contextPath%>/resources/static/js/member/login.js"></script>
<title>로그인</title>
</head>
<body>
    <div class="wrapper">
        <div class="content">
            <br><br>
            <h2>로그인</h2>

            <br>

            <div class="hr"></div>

            <h3>로그인이 필요한 서비스입니다.</h3>

            <form action="main" method="post" id="login">
                <div class="form-group">
                    <label for="memberId">아이디</label> 
                    <input type="text" class="form-control" id="memberId" placeholder="여기에 PlaceHolder 입력" name="memberId" required>

                    <label for="memberPwd">비밀번호</label>
                    <input type="password" class="form-control" id="memberPwd" placeholder="비밀번호 입력" name="memberPwd" required>

                    <div class="btns">
                        <button type="submit" class="btn btn-primary">로그인</button>
                    </div>

                    <div>
                        <a href="<%=contextPath%>/member/membership">회원가입</a> |
                        <a href="<%=contextPath%>/member/idfind">아이디 찾기</a> |
                        <a href="<%=contextPath%>/member/pwdfind">비밀번호 찾기</a>
                    </div>

                    <p>또는</p>

                    <div class="social-login">
                        <button class="google-btn">Sign up with Google</button>
                        <button class="kakao-btn">네이버 로그인</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>