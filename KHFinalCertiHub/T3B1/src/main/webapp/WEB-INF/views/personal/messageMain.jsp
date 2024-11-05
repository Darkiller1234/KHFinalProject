<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>서티허브 - 메세지</title>

<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/messageMain.css">
<script src="${pageContext.request.contextPath}/resources/static/js/personal/messageMain.js"></script>

</head>

<body>
    <%@ include file="../common/header.jsp" %>

	<div class="wrapper message">
                    <!-- <div class="option" onclick="sideClick(this)">
                <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/person_icon_light.png"></div>
                <div class="option-text">멘토</div>
            </div>
            <div class="option" onclick="sideClick(this)">
                <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/group_icon_light.png"></div>
                <div class="option-text">스터디그룹</div>
            </div>
            <div class="option" onclick="sideClick(this)">
                <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/noti_icon_light.png"></div>
                <div class="option-text">알림</div>
            </div> -->
        <div class="side-menu">
            <label>
                <input type="radio" name="side-option" onclick="sideClick(this)">
                <div>
                    <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/person_icon_light.png"></div>
                    <div class="option-text">멘토</div>
                </div>
            </label>
            <label>
                <input type="radio" name="side-option" onclick="sideClick(this)">
                <div>
                    <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/group_icon_light.png"></div>
                    <div class="option-text">스터디그룹</div>
                </div>
            </label>
            <label>
                <input type="radio" name="side-option" onclick="sideClick(this)">
                <div>
                    <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/noti_icon_light.png"></div>
                    <div class="option-text">알림</div>
                </div>
            </label>
        </div>
        
        <div class="side-extend">

            <form onsubmit="return false;">
                <div class="search-form">
                    <input type="text">
                    <button class="rounded-circle" onclick="alert('클릭됨')">
                        <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                    </button> 
                </div>
            </form>

            <div class="content">

            </div>
            
            <div class="not-found">
                <img src="${pageContext.request.contextPath}/resources/static/img/button/sad_emote.png">
                <div class="font-size-subtitle">선택된 대화상대가 없습니다...</div>
                <div class="font-size-content">대화 상대를 선택하거나, 스터디 그룹을 신청해보세요!</div>
            </div>

        </div>
        <div class="message-section">
            <div class="message">

            </div>
            <div class="not-found">
                <img src="${pageContext.request.contextPath}/resources/static/img/button/chat_icon.png">
                <div class="font-size-subtitle">선택된 채팅방이 없네요...</div>
                <div class="font-size-content">채팅방을 선택해 대화를 시작하세요.</div>
            </div>

            <form onsubmit="return false;">
                <div class="search-form">
                    <input type="text">
                    <button class="rounded-circle" onclick="alert('클릭됨')">
                        <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                    </button> 
                </div>
            </form>

        </div>
	</div>

    <%@ include file="../common/footer.jsp" %>
</body>

</html>