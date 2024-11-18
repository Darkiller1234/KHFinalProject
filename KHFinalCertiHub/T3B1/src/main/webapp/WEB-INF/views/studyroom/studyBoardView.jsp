<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyBoardView.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyBoardView.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="subtitle">
            <div class="page-title font-size-content">스터디 모집 & 현황</div>

            <div class="title-option">
                <div class="custom-select"></div>
            </div>
        </div>

        <div class="page-title font-size-title">${board.boardTitle}</div>

        <div class="content">
            ${board.boardContent}
        </div>
    </div>

    <div class="option">
        <c:choose>
            <c:when test="${loginMember.memberNo eq board.managerNo}">
                <button id="deleteButton" type="button" class="delete btn-primary">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/trash_icon.png">
                    삭제
                </button>
                <button id="editButton" class="modify btn-primary">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/scissors_icon.png">
                    수정
                </button>
            </c:when>
        </c:choose>
        <button class="back btn-primary" onclick="location.href='${pageContext.request.contextPath}/study/list'">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/menu_icon.png">
            목록
        </button>
        <c:choose>
            <c:when test="${loginMember ne null}">
                <button class="apply btn-primary" data-bs-toggle="modal" data-bs-target="#apply-alert">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/pencil_icon.png">
                    신청하기
                </button>
            </c:when>
        </c:choose>
    </div>


    <div class="bottom-options">
        <button onclick="topScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_up_icon.png"></button>
    </div>

    <!-- 모달창 -->
    <div class="modal" id="apply-alert">
        <div class="modal-dialog">
        <div class="modal-content">
    
            <!-- Modal Header -->
            <div class="modal-header">
            <h4 class="modal-title">                
                <img 
                src="${pageContext.request.contextPath}/resources/static/img/logo/logo_big.png"
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

    <%@ include file="../common/footer.jsp" %>
</body>
</html>