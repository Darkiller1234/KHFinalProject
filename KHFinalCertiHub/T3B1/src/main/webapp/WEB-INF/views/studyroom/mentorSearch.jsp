<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 멘토찾기</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorSearch.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/mentorSearch.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="page-title font-size-title">멘토 찾기</div>    

        <form class="search-section" onsubmit="return false;">
            <div class="search-form">
                <input type="text">
                <button class="rounded-circle" onclick="alert('클릭됨')">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>

            <div class="search-option">
                <div class="custom-select"></div>
                <div class="custom-select"></div>
            </div>

        </form>

        <div class="mentor-list">

            <!-- <div class="mentor-card" onclick="location.href='${pageContext.request.contextPath}/mentor/detail'">
                <div class="profile-img small">
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">User01</div>
                <div class="symbol-license">빅데이터분석기사</div>
                <div class="member-intro font-size-footer">안녕하세요~ 반갑습니다~~ 잘부탁드려용~~ 저는 민트초코파인애플피자 좋아합니다 감사합니다</div>
                <div class="tag valid bgcolor3"><img src="<%=contextPath%>/resources/static/img/button/valid_icon.png">질문가능</div>
            </div>

            <div class="mentor-card" onclick="location.href='${pageContext.request.contextPath}/mentor/detail'">
                <div class="profile-img small">
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">User01</div>
                <div class="symbol-license">정보처리기사</div>
                <div class="member-intro font-size-footer">릭컬하자 트릭컬</div>
                <div class="tag valid bgcolor4"><img src="<%=contextPath%>/resources/static/img/button/stop_icon.png">질문불가</div>
            </div> -->

        </div>
    </div>

    <div class="loading-section">
        <div class="loading-alert">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            멘토 로딩중...
        </div>
    </div>

    <div class="bottom-options">
        <button onclick="topScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>