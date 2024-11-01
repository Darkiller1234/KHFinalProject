<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/common/default.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/member/idfind.css">
    <title>아이디 찾기</title>
</head>
<body>
    <div class="wrapper">
        <div class="content">
            <br><br>
            <h2>아이디 찾기</h2> 

            <br>

            <div class="hr"></div>

            <h3>아이디를 받을 방식을 선택해주세요.</h3>

            <form action="inset.me" method="post" id="idfind">
                <div class="form-group">
                    <label for="Phone">전화번호</label>
                    <input type="tel" id="Phone" name="Phone" required>
                    <button type="submit">휴대전화 번호로 전송</button>
                </div>
            </form>

        </div>
    </div>
</body>
</html>