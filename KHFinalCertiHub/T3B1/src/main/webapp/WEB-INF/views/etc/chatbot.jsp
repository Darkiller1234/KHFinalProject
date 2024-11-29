<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>서티허브 - 메세지</title>

<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/personal/messageMain.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/etc/chatbot.css">

<script src="${pageContext.request.contextPath}/resources/static/js/etc/chatbot.js"></script>

</head>

<body>
    <%@ include file="../common/header.jsp" %>

	<div class="wrapper calcHeight">

        <div class="message-section">
            <div class="message-window">

                <div class="loading-section">
                    <div class="loading-alert">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        AI 답변 생성중...
                    </div>
                </div>
                
            </div>

            <div class="search-form">
                <input id="sendText" type="text">
                <button id="sendButton" class="rounded-circle">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>
        </div>

	</div>

    <div class="bottom-options">
        <button onclick="chatScroll()" class="top-button rounded-circle"><img src="${pageContext.request.contextPath}/resources/static/img/button/arrow_down_icon.png"></button>
    </div>

</body>

</html>