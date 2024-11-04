<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/idfindpages.css">
    <title>아이디 찾기 페이지</title>
</head>
<body>
    
    <div class="wrapper">
        <h2>아이디 찾기</h2>
        <div class="hr"></div>
        <h4>고객님의 정보와 일치하는 아이디입니다.</h4>

        <form action="login" method="post" id="idfind">
            <div class="form-group">
                <label for="userId">아이디</label>
                <input type="text" id="userId" value="사용자아이디" readonly>
            </div>
            <div class="form-group">
                <label for="registrationDate">가입일</label>
                <input type="text" id="registrationDate" value="2024-11-04" readonly>
            </div>

            <div class="next-button">
                <button type="submit" class="btn-primary">메인으로</button>
            </div>
        </form>
    </div>
</body>
</html>