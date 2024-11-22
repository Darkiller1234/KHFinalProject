<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/pwdfind.css">
    <title>비밀번호 찾기</title>
</head>
<body>
    <div class="wrapper">
        <h2>비밀번호 찾기</h2> 
        <div class="hr"></div>
        <h3>비밀번호를 받을 방식을 선택해주세요.</h3>

        <form action="" method="post" id="pwdfind" onsubmit="return handleSubmit(event);">
            <div class="form-group">
                <button type="button" class="btn phone" id="phoneButton" onclick="setSendMethod('phone')">
                    휴대전화 번호로 전송
                    <img src="<%=contextPath%>/resources/static/img/member/Phone.png">
                </button>
                <button type="button" class="btn email" id="emailButton" onclick="setSendMethod('email')">
                    이메일로 전송
                    <img src="<%=contextPath%>/resources/static/img/member/Email.png">
                </button>
            </div>
            <div class="next-button">
                <button type="button" class="btn-primary" id="nextButton" onclick="handleSubmit(event)">다음</button>
            </div>
            <input type="hidden" name="sendMethod" id="sendMethod" />
        </form>
    </div>

    <script src="<%=contextPath%>/resources/static/js/member/pwdfind.js"></script>
</body>
</html>