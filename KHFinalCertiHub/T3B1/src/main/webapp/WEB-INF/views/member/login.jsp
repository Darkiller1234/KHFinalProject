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

            <form action="login.me" method="post" id="login">
                <div class="form-group">
                    <label for="memberId">아이디</label> 
                    <input type="text" class="form-control" id="memberId" name="memberId" required>

                    <label for="memberPwd">비밀번호</label>
                    <input type="password" class="form-control" id="memberPwd" name="memberPwd" required>

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
                        <input type ="button" onclick="naverLogin()" value="네이버 로그인"></input>
                    </div>
                </div>
            </form>
            <!-- 
                function naverLogin() {
                    const clientId = "4LJAnwIdn34_pwVH8xJ8";
                    // 리다이렉트 URL을 utf-8로 인스코딩해서 저장
                    const redirectURL = encodeURLIComponent("http://localhost:5500/T3B1/member/login");

                    const state = Math.random().toString(36).subString(2);

                    let apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code";
                    apiURL += "&client_id=" + clientId;
                    apiURL += "&redirect_uri=" + redirectURL;
                    apiURL += "&state=" + state;

                    location.href = apiURL;
                }
            -->
        </div>
    </div>
</body>
</html>