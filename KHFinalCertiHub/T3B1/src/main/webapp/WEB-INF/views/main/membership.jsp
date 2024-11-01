<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/common/membership.css">
	<script src="${pageContext.request.contextPath}/resources/static/js/common/membership.js"></script>
<title>회원가입</title>
</head>
<body>
    <div class="wrapper">
        <div class="content">
            <br><br>
            <div class="innerOuter">
                <h2>회원가입</h2>

                <br>
                
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
                        <input type="text" class="form-control" id="userId" placeholder="여기에 PlaceHolder 입력" name="userId" required>

                        <label for="userPwd">* 비밀번호</label>
                        <input type="text" class="form-control" id="userPwd" placeholder="여기에 PlaceHolder 입력" name="userPwd" required>

                        <label for="checkPwd">* 비밀번호 확인</label>
                        <input type="text" class="form-control" id="checkPwd" placeholder="여기에 PlaceHolder 입력" name="checkPwd" required>
                        
                        <label for="Name">* 이름</label>
                        <input type="text" class="form-control" id="Name" placeholder="여기에 PlaceHolder 입력" name="Name" required>

                        <label for="nickName">* 닉네임</label>
                        <input type="text" class="form-control" id="nickName" placeholder="여기에 PlaceHolder 입력" name="nickName" required>

                        <label for="Email">* 이메일</label>
                        <input type="text" class="form-control" id="Email" placeholder="여기에 PlaceHolder 입력" name="Email" required>

                        <label for="Phone">* 전화번호</label>
                        <input type="text" class="form-control" id="Phone" placeholder="여기에 PlaceHolder 입력(-없이)" name="Phone" required>
                        </div>
                        <br>
                        <div class="btns">
                            <button type="reset" class="btn btn-danger">취소</button>
                            <button type="submit" class="btn btn-primary" disabled>가입하기</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>