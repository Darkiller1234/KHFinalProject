<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/findemail.css">
<script src="<%=contextPath%>/resources/static/js/member/findemail.js"></script>
    <title>아이디 찾기 페이지</title>
</head>
<body>
    <div class="wrapper">
        <h2>아이디 찾기</h2>

        <div class="hr"></div>

        <form action="<%=contextPath%>/member/idfindpages" method="post" id="membershipForm">
            <div class="form-group">
                <label for="memberName">이름</label>
                <input type="text" class="form-control" id="memberName" placeholder="이름 입력" name="memberName" required>
                <span class="error-msg" id="mambernameError"></span>

                <label for="email">이메일</label>
                <input type="email" class="form-control" id="email" placeholder="이메일 입력" name="email" required>
                <span class="error-msg" id="emailError"></span>

                <div class="next-button">
                    <button type="submit" class="btn-primary" id="findButton">찾기</button>
                </div>
            </div>
        </form>
    </div>
</body>
</html>