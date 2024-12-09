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
        <input id="boardNo" type="hidden" value="${board.studyNo}">
        <div class="subtitle">
            <div class="page-title font-size-content">스터디 모집 & 현황</div>

            <c:if test="${loginMember.memberNo eq board.managerNo}">
                <div class="title-option">
                    <div class="custom-select"></div>
                </div>
            </c:if>
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
                <button id="applyButton" class="apply btn-primary">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/pencil_icon.png">
                    신청하기
                </button>
                <button id="reportButton" type="button" class="delete btn-primary" data-bs-toggle="modal" data-bs-target="#report-board-modal">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/report_icon.png">
                    신고하기
                </button>
            </c:when>
        </c:choose>
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

    <div class="modal" id="report-board-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <input id="writer" type="hidden" value="${board.managerNo}">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">
                <img src="<%=contextPath%>/resources/static/img/logo/logo_big.png">
              </h4>
            </div>

            <!-- Modal body -->
            <div class="modal-body" id="modal-body">
              <p class="font-size-title">
                신고 사유를 선택해주세요.
              </p>
              <div class="report-choose-area">
                <label>
                  <input type="radio" name="reportNumber" value="1" checked>
                  <span class="custom-check"></span>
                  홍보/도배 글입니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="2">
                  <span class="custom-check"></span>
                  음란물을 포함하고 있습니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="3">
                  <span class="custom-check"></span>
                  불법적인 내용입니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="4">
                  <span class="custom-check"></span>
                  욕설이 포함되어있습니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="5">
                  <span class="custom-check"></span>
                  혐오발언이 포함되어있습니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="6">
                  <span class="custom-check"></span>
                  사칭 글입니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="7">
                  <span class="custom-check"></span>
                  괴롭힘 및 따돌림이 포함되었습니다.
                </label>

                <label>
                  <input type="radio" name="reportNumber" value="8">
                  <span class="custom-check"></span>
                  기타
                </label>
              </div>

              <textarea name="reportReason" wrap="hard" placeholder="자세한 사유를 설명해주세요."></textarea>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" id="report-submit-button" class="font-size-subtitle">제출하기</button>
              <button type="button" data-bs-dismiss="modal" class="font-size-subtitle">닫기</button>
            </div>

          </div>
        </div>
      </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>