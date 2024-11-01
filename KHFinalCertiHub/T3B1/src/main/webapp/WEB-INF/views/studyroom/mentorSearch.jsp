<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 멘토찾기</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorSearch.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/common/profile.css">
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper">
        <div class="page-title font-size-title">멘토 찾기</div>
        <div class="search-section">
            <div class="search-inout"></div>
            <div class="search-option"></div>
        </div>
        <div class="mentor-list">
            <div class="mentor-card">
                
            </div>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>