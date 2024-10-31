<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/profile.css">
</head>
<body>
    <!-- 큰 버전 ( 200px )-->
    <div class="profile-img">
        <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
    </div>

    <!-- 작은 버전 ( 150px )-->
    <div class="profile-img small">
        <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
    </div>
</body>
</html>