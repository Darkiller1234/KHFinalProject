<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorDetail.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyDetail.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyDetailEdit.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyCreate.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyCreate.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="page-title font-size-title">그룹 만들기</div>

        <div class="mentor-page">
            <div class="mentor-card">
                <div class="profile-img small">
                    <img src="<%=contextPath%>${loginMember.memberImg}" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">${loginMember.memberNickname}</div>
                <div class="tag bgcolor4 font-size-content"><img src="<%=contextPath%>/resources/static/img/button/manager_icon.png">관리자</div>
                <c:choose>
                    <c:when test="${loginMember.memberIntro ne null}">
                        <div class="member-intro font-size-footer">${loginMember.memberIntro}</div>
                    </c:when>
                    <c:otherwise>
                        <div class="member-intro font-size-footer">아직 등록한 자기소개가 없습니다.</div>
                    </c:otherwise>
                </c:choose>
            </div>

            <div class="info-section">
                <div class="mentor-info">
                    <form id="studyForm" action="<%=contextPath%>/study/createStudy" method="post" enctype="multipart/form-data">
                        <div class="font-size-title">스터디 그룹명</div>
                        <input type="text" class="form-control" name="studyName" placeholder="그룹명을 입력해주세요.(90Bytes까지 가능)" required>

                        <div class="font-size-title">그룹 소개</div>
                        <div class="study-info form-control" placeholder="그룹을 소개할 문구를 작성해주세요.(3000Bytes까지 가능)"></div>
                        <!-- placeholder="그룹을 소개할 문구를 작성해주세요.(3000Bytes까지 가능)" -->

                        <div class="font-size-title">
                            그룹 프로필
                        </div>

                        <div class="group-img">
                            <img id="profile" src="<%=contextPath%>/resources/static/img/profile/default_profile.png" class="rounded-circle" alt="Cinque Terre">
                            <input type="file" name="profileImg" onchange="loadImg(this)">
                        </div>
                    </form>

                    <div class="button-section">
                        <button class="btn-primary" onclick="location.href='search'">취소하기</button>
                        <button type="submit"
                            form="studyForm"
                            class="btn-primary bgcolor1"
                        >등록하기</button>
                    </div>
                </div>
            </div>

        </div>

        <div class="bottom-options">
            <button onclick="topScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
        </div>
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>