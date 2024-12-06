<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/membership.css">
<script src="<%=contextPath%>/resources/static/js/member/membership.js"></script>

<!-- jQuery -->
<script 
src="https://code.jquery.com/jquery-3.7.1.min.js"
integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
crossorigin="anonymous">
</script>
<script
src="https://code.jquery.com/ui/1.14.0/jquery-ui.min.js"
integrity="sha256-Fb0zP4jE3JHqu+IBB9YktLcSjI1Zc6J2b6gTjB0LpoM="
crossorigin="anonymous">
</script>

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

            <form action="naverJoin" method="post" id="membershipForm">
                <div class="form-group">
                    <label for="memberName">* 이름</label>
                    <input type="text" class="form-control" id="memberName" placeholder="이름 입력" name="memberName" required
                    value="${naverRegi.memberName}">

                    <label for="memberNickname">* 닉네임</label>
                    <input type="text" class="form-control" id="memberNickname" placeholder="닉네임 입력" name="memberNickname" required>
                    <div id="checkResultnickName" style="font-size:0.7em; display:none;"></div>
                    

                    <label for="email">* 이메일</label>
                    <input type="email" class="form-control" id="email" placeholder="이메일 입력" name="email" required
                    value="${naverRegi.email}">
                    

                    <label for="phone">* 전화번호</label>
                    <input type="text" class="form-control" id="phone" placeholder="전화번호 입력" name="phone" required
                    value="${naverRegi.phone}">
                    
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