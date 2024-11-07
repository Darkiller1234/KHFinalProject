<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/personalChange.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/personal/personalChange.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <title>개인정보 변경</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <h1 class="page-title">
            개인정보 변경
            <img src="<%=contextPath%>/resources/static/img/button/triangle_down.png" alt="Dropdown" class="dropdown-btn" onclick="toggleDropdown()">
        </h1>

        <!-- 드롭다운 메뉴 -->
        <div class="dropdown-content">
            <a href="#">프로필 편집</a>
            <a href="<%=contextPath%>/personalChange" selected>개인정보 변경</a>
            <a href="#">자격증 인증 신청</a>
            <a href="#">멘토 신청</a>
        </div>

        <!-- 탭 영역 -->
        <div class="tabs">
            <a href="#" class="tab">프로필 편집</a>
            <a href="<%=contextPath%>/personalChange" class="tab active">개인정보 변경</a>
            <a href="#" class="tab">자격증 인증 신청</a>
            <a href="#" class="tab">멘토 신청</a>
        </div>

        <!-- 콘텐츠 영역 -->
        <div class="content">
            <h2>비밀번호 입력</h2>
            <div class="input-container">
                <input type="text" class="form-control" id="userPwd" placeholder="여기에 PlaceHolder 입력" name="userPwd" required>
            </div>
            <div class="btns">
                <button type="submit" class="btn btn-primary">입력</button>
            </div>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>