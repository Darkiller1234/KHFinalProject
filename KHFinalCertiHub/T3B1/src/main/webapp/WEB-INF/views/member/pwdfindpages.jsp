<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/pwdfindpages.css">
    <script src="<%=contextPath%>/resources/static/js/member/pwdfindpages.js"></script>
    <title>비밀번호 찾기 페이지</title>
</head>
<body>
    
    <div class="wrapper">
        <h2>비밀번호 찾기</h2>
        <div class="hr"></div>

        <form action="login" method="post" id="pwdfindpages">
            <div class="form-group">
                <div class="image-text-container">
                    <div class="image-container">
                        <img src="<%=contextPath%>/resources/static/img/member/Email.png" alt="이메일 아이콘">
                    </div>
                    <span class="notification-text">작성하신 이메일로 임시 비밀번호가 전송되었습니다.</span>
                </div>
            </div>

            <div class="next-button">
                <button type="submit" class="btn-primary">메인으로</button>
            </div>
        </form>
    </div>
</body>
</html>