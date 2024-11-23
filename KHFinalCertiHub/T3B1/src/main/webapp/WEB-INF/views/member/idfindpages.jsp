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

                <form action="<%=contextPath%>/member/login" method="post" id="idfindpagesForm">
                    <div class="form-group">
                        <label for="memberId">아이디</label>
                        <input type="text" id="memberId" name="memberId" value="${memberId}" readonly>
                    </div>


                    <div class="next-button">
                        <button type="submit" class="btn-primary">메인으로</button>
                    </div>
                </form>
    </div>
</body>
</html>