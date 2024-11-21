<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/findephone.css">
<script src="<%=contextPath%>/resources/static/js/member/findephone.js"></script>
    <title>아이디 찾기 페이지</title>
</head>
<body>
    <div class="wrapper">
        <h2>아이디 찾기</h2>

        <div class="hr"></div>

        <form action="idfindpages" method="post" id="membershipForm">
            <div class="form-group">
                <label for="memberName">이름</label>
                <input type="text" class="form-control" id="memberName" placeholder="이름 입력" name="memberName" required>
                <span class="error-msg" id="mambernameError"></span>

                <label for="phone">전화번호</label>
                <input type="text" class="form-control" id="phone" placeholder="전화번호 입력" name="phone" required>
                <span class="error-msg" id="phoneError"></span>

                <div class="next-button">
                    <button type="submit" class="btn-primary" id="findButton">찾기</button>
                </div>
            </div>
        </form>
    </div>
</body>
</html>