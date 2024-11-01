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

        <form class="search-section" onsubmit="return false;">
            <div class="search-form">
                <input type="text">
                <button class="rounded-circle" onclick="alert('클릭됨')">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>

            <div class="search-option">
                <!-- 셀렉트 박스 수정 예정 -->
                <div class="custom-select">
                    <div class="select-box">
                      경기 <span class="arrow">▼</span>
                    </div>
                    <ul class="options">
                      <li>내용</li>
                      <li>내용</li>
                      <li>내용</li>
                      <li>내용</li>
                    </ul>
                </div>

                <div class="custom-select">
                    <div class="select-box">
                      경기 <span class="arrow">▼</span>
                    </div>
                    <ul class="options">
                      <li>내용</li>
                      <li>내용</li>
                      <li>내용</li>
                      <li>내용</li>
                    </ul>
                </div>

            </div>
        </form>

        <div class="mentor-list">
            <div class="mentor-card">
                <div class="profile-img small">
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">User01</div>
                <div class="symbol-license">빅데이터분석기사</div>
                <div class="member-intro font-size-footer">안녕하세요~ 반갑습니다~~ 잘부탁드려용~~ 저는 민트초코파인애플피자 좋아합니다 감사합니다</div>
                <div class="mentor-valid">질문가능</div>
            </div>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>