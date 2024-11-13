<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorSearch.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studySearch.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studySearch.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="title">
            <div class="page-title font-size-title">스터디 그룹 찾기</div>
            <button class="btn btn-primary" onclick="location.href='create'">그룹 만들기</button> 
        </div>

        <form class="search-section" action="search">
            <div class="search-form">
                <input type="text" name="keyword">
                <button type="submit" class="rounded-circle">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>

            <div class="search-option">
                <div class="custom-select"></div>
                <div class="custom-select"></div>
            </div>

        </form>

        <div class="mentor-list">

            <!-- <div class="mentor-card" onclick="location.href='${pageContext.request.contextPath}/study/detail'">
                <div class="profile-img small">
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="study-name">제 243921회 김순자 할머니와 함께하는 정보처리기사 스터디그룹</div>
                <div class="tag bgcolor3 font-size-content"><img src="<%=contextPath%>/resources/static/img/button/person_icon_light.png">12명</div>
                <div class="study-intro font-size-footer">반드시 붙어야지</div>
                <div class="tag valid bgcolor3"><img src="<%=contextPath%>/resources/static/img/button/valid_icon.png">모집중</div>
            </div>

            <div class="mentor-card" onclick="location.href='${pageContext.request.contextPath}/study/detail'">
                <div class="profile-img small">
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="study-name">제 243921회 김첨지 할아버지와 함께하는 정보처리기사 스터디그룹</div>
                <div class="tag bgcolor3 font-size-content"><img src="<%=contextPath%>/resources/static/img/button/person_icon_light.png">3명</div>
                <div class="study-intro font-size-footer">저희 그룹 폐업합니다</div>
                <div class="tag valid bgcolor4"><img src="<%=contextPath%>/resources/static/img/button/stop_icon.png">모집마감</div>
            </div> -->

        </div>
    </div>

    <div class="loading-section">
        <div class="loading-alert">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            스터디 로딩중...
        </div>
    </div>

    <div class="bottom-options">
        <button onclick="topScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>