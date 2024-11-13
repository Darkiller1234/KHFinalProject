<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorDetail.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyDetail.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyDetail.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="page-title font-size-title">스터디 정보</div>

        <div class="mentor-page">
            <div class="mentor-card">
                <div class="profile-img small">
                    <img src="<%=contextPath%>${study.studyImg}" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">${study.managerName}</div>
                <div class="tag bgcolor4 font-size-content"><img src="<%=contextPath%>/resources/static/img/button/manager_icon.png">관리자</div>
                <div class="member-intro font-size-footer">${study.managerIntro}</div>
                <c:choose>
                    <c:when test="${study.studyRecruit eq 'Y'}">
                        <div class="tag valid bgcolor3"><img src="<%=contextPath%>/resources/static/img/button/valid_icon.png">모집중</div>
                        <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#apply-modal">신청하기</button>
                    </c:when>
                    <c:otherwise>
                        <div class="tag valid bgcolor4"><img src="<%=contextPath%>/resources/static/img/button/stop_icon.png">모집마감</div>
                        <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#apply-modal" disabled>신청불가</button>
                    </c:otherwise>
                </c:choose>
            </div>

            <div class="info-section">
                <div class="mentor-info">
                    <div class="font-size-title">${study.studyName}</div>
                    <div class="mentor-career">
                        ${study.studyInfo}
                    </div>
                    <div class="font-size-title">참여회원 (${study.memberCount}명)</div>

                    <div class="search-member">
                        <div class="search-form">
                            <input id="keyword" type="text">
                            <button class="rounded-circle" onclick="alert('클릭됨')">
                                <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                            </button> 
                        </div>
                    </div>

                    <div class="mentor-intro">

                        <!-- <div class="member">
                            <div class="member-info">
                                <div class="profile">
                                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                                </div>
                                <div class="name font-size-content">
                                    user01
                                </div>
                            </div>
                        </div> -->

                    </div>

                    <div class="load-member">
                        <button>더보기...</button>
                    </div>

                    <div class="button-section">
                        <button class="btn-primary" onclick="location.href='${pageContext.request.contextPath}/study/detail/edit'">수정하기</button>
                        <button class="btn-primary bgcolor1" onclick="location.href='${pageContext.request.contextPath}/study/search'">목록으로</button>
                    </div>
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