<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/member/login.css">
<script src="${pageContext.request.contextPath}/resources/static/js/common/login.js"></script>
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

            <form action="insert.me" method="post" id="login">
                <div class="form-group">
                    <label for="userId">아이디</label> 
                    <input type="text" class="form-control" id="userId" placeholder="여기에 PlaceHolder 입력" name="userId" required>

                    <label for="userPwd">비밀번호</label>
                    <input type="text" class="form-control" id="userPwd" placeholder="여기에 PlaceHolder 입력" name="userPwd" required>

                    <div class="btns">
                        <button type="submit" class="btn btn-primary">로그인</button>
                    </div>

                    <div>
                        <a href="membership">회원가입</a> |
                        <a href="#">아이디 찾기</a> |
                        <a href="#">비밀번호 찾기</a>
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