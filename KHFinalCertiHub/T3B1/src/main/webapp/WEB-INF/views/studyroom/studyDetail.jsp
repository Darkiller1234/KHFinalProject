<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyDetail.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyDetail.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="subtitle">
            <div class="page-title font-size-content">스터디 그룹 모집 & 현황</div>

            <div class="title-option">
                <div class="custom-select"></div>
            </div>
        </div>

    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>