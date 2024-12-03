<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>서티허브 - 메세지</title>

<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/messageMain.css">
<script src="${pageContext.request.contextPath}/resources/static/js/personal/messageMainAjax.js"></script>
<script src="${pageContext.request.contextPath}/resources/static/js/personal/messageMain.js"></script>

</head>

<body>
    <%@ include file="../common/header.jsp" %>

	<div class="wrapper calcHeight">
        <div class="side">
            <div class="side-menu">
                <label>
                    <input type="radio" name="side-option" value="1">
                    <div>
                        <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/person_icon_light.png"></div>
                        <div class="option-text">멘토</div>
                    </div>
                </label>
                <label>
                    <input type="radio" name="side-option" value="2">
                    <div>
                        <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/group_icon_light.png"></div>
                        <div class="option-text">스터디그룹</div>
                    </div>
                </label>
                <label>
                    <input type="radio" name="side-option" value="3">
                    <div>
                        <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/noti_icon_light.png"></div>
                        <div class="option-text">알림</div>
                    </div>
                </label>
            </div>

            <div class="side-extend">

                <div class="side-search">
                    <div class="search-form">
                        <input type="text">
                        <button class="rounded-circle" onclick="alert('클릭됨')">
                            <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                        </button> 
                    </div>
                </div>

                <!-- AJAX 조회결과 없을시 출력 -->
                <!-- <div class="not-found">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/sad_emote.png">
                    <div class="font-size-subtitle">대화상대가 없습니다...</div>
                    <div class="font-size-content">멘티나 스터디 그룹을 신청해보세요!</div>
                </div>  -->

                <div class="content">
                    <div class="mentorTalk"></div>
                    <div class="studyTalk"></div>
                    <div class="applyList"></div>
                </div>
            </div>
            
        </div>

        <div class="message-section">
            <div class="message-window">

                <div class="date">
                    <div>2024년 11월 6일</div>
                </div>

                <!-- 채팅방 선택전 표시 -->
                <!-- <div class="not-found">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/chat_icon.png">
                    <div class="font-size-subtitle">선택된 채팅방이 없네요...</div>
                    <div class="font-size-content">채팅방을 선택해 대화를 시작하세요.</div>
                </div> -->

            </div>

            <div class="search-form">
                <input id="sendText" type="text">
                <button id="sendButton" class="rounded-circle">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>

        </div>
	</div>

    <div class="modal" id="talkroomModal">
        <div class="modal-dialog">
            <div class="modal-content">
        
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">                
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                    <div>제2934325회 정처기 스터디방</div>
                    <button class="close-button" data-bs-dismiss="modal"><img src="<%=contextPath%>/resources/static/img/button/x_icon.png"></button>
                </h4>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body">
                    <div class="tag bgcolor3 font-size-content"><img src="<%=contextPath%>/resources/static/img/button/person_icon_light.png">12명</div>
                </div>
        
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">상세 페이지로</button>
                </div>
        
            </div>
        </div>
    </div>

    <div class="modal" id="userModal">
        <div class="modal-dialog">
            <div class="modal-content">
        
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">                
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                    <button class="close-button" data-bs-dismiss="modal"><img src="<%=contextPath%>/resources/static/img/button/x_icon.png"></button>
                </h4>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body">
                    <div>User01</div>
                    <div class="mentor-valid reject font-size-content"><img src="<%=contextPath%>/resources/static/img/button/manager_icon.png">멘토</div>
                    <div class="symbol-license font-size-subtitle">빅데이터분석기사</div>
                    <div class="member-intro font-size-content">안녕하세요~ 반갑습니다~~ 잘부탁드려용~~ 저는 민트초코파인애플피자 좋아합니다 감사합니다</div>
                    <div class="font-size-subtitle">최근 관심 자격증</div>
                    <div class="look-license">
                        <div class="tag bgcolor3 font-size-content">정보처리기사</div>
                        <div class="tag bgcolor3 font-size-content">빅데이터분석기사</div>
                        <div class="tag bgcolor3 font-size-content">네트워크관리사</div>
                        <div class="tag bgcolor3 font-size-content">정보보안기사</div>
                        <div class="tag bgcolor3 font-size-content">빅데이터분석기사</div>
                    </div>
                </div>
        
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">상세 페이지로</button>
                </div>
        
            </div>
        </div>
    </div>

    <div class="bottom-options">
        <button onclick="chatScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_down_icon.png"></button>
    </div>

</body>

</html>