<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/pwdfindpage.css">
<script src="<%=contextPath%>/resources/static/js/member/pwdfindpage.js"></script>
    <title>비밀번호 찾기 페이지</title>
</head>
<body>
    <div class="wrapper">
        <h2>비밀번호 찾기</h2>

        <div class="hr"></div>

        <form action="pwdfindpages" method="post" id="membershipForm">
            <div class="form-group">
                <label for="name">아이디</label>
                <input type="text" class="form-control" id="userId" placeholder="아이디 입력" name="userId" required>
                <span class="error-msg" id="userIdError"></span>

                <label for="Email">이메일</label>
                <input type="email" class="form-control" id="Email" placeholder="이메일 입력" name="Email" required>
                <span class="error-msg" id="emailError"></span>

                <div class="next-button">
                    <button type="button" class="btn-primary" id="nextButton" onclick="handleSubmit(event)">다음</button>
                </div>
            </div>
        </form>
    </div>
</body>
</html>