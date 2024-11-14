<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 멘토 정보</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorDetail.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/mentorDetail.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="page-title font-size-title">멘토 정보</div>
        <div class="mentor-page">
            <div class="mentor-card">
                <div class="profile-img small">
                    <img src="<%=contextPath%>${mentor.memberImg}" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">${mentor.memberNickname}</div>
                <div class="tag bgcolor3"><img src="<%=contextPath%>/resources/static/img/button/heart.png">${mentor.mentorLike}</div>
                <div class="symbol-license">${mentor.symbolLicense}</div>
                <div class="member-intro font-size-footer">${mentor.memberIntro}</div>
                <c:choose>
                    <c:when test="${mentor.mentorValid eq 'Y'}">
                        <div class="tag valid bgcolor3"><img src="<%=contextPath%>/resources/static/img/button/valid_icon.png">질문가능</div>
                        <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#apply-modal">신청하기</button>
                    </c:when>
                    <c:otherwise>
                        <div class="tag valid bgcolor4"><img src="<%=contextPath%>/resources/static/img/button/stop_icon.png">질문불가</div>
                        <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#apply-modal" disabled>신청불가</button>
                    </c:otherwise>
                </c:choose>
            </div>

            <div class="info-section">
                <div class="info">
                    <div class="font-size-title">경력</div>
                    <div class="mentor-career">
                        ${mentor.career}
                    </div>
                    <div class="font-size-title">소개</div>
                    <div class="mentor-intro">
                        ${mentor.mentorIntro}
                    </div>
                </div>

                <div class="button-section">
                    <button class="btn-primary" onclick="location.href='${pageContext.request.contextPath}/mentor/search'">목록으로</button>
                </div>
            </div>

        </div>

        <div class="bottom-options">
            <button onclick="topScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
        </div>

        
        <!-- 모달창 -->
        <div class="modal" id="apply-modal">
            <div class="modal-dialog">
            <div class="modal-content">
        
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">                
                    <img 
                    src="<%=contextPath%>/resources/static/img/logo/logo_big.png"
                    ">
                </h4>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body">
                신청되었습니다.
                </div>
        
                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">닫기</button>
                </div>
        
            </div>
            </div>
        </div>

    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>