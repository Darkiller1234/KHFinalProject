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

                <div class="message mine">
                    <div class="message-card">
                        <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#userModal">
                            <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="info">
                            <div class="user-name">User01</div>
                            <div class="content">테스트용 메시지입니다...테스트용 메시지입니다...</div>
                        </div>
                    </div>
                </div>

                <div class="message mine">
                    <div class="message-card">
                        <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#userModal">
                            <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="info">
                            <div class="user-name">User01</div>
                            <div class="content">테스트용 메시지입니다...</div>
                        </div>
                    </div>
                </div>

                <div class="message">
                    <div class="message-card">
                        <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#userModal">
                            <img src="<%=contextPath%>/resources/static/img/profile/chatbot.png" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="info">
                            <div class="user-name">
                                챗봇 도우미
                            </div>
                            <div class="content">
                                난 너를 믿었던만큼 난 내 친구도 믿었기에
                                난 아무런 부담없이 널 내 친구에게 소개시켜 줬고
                                그런 만남이 있은 후부터 우리는 자주 함께 만나며
                                즐거운 시간을 보내며 함께 어울렸던 것뿐인데
                                그런 만남이 어디부터 잘못됐는지
                                난 알 수 없는 예감에 조금씩 빠져들고 있을때쯤
                                넌 나보다 내 친구에게 관심을 더 보이며
                                날 조금씩 멀리하던
                                그 어느 날 너와 내가 심하게 다툰 그 날 이후로
                                너와 내 친구는 연락도 없고 날 피하는 것 같아
                                그제서야 난 느낀거야 모든 것이 잘못돼 있는걸
                                너와 내 친구는 어느새 다정한 연인이 돼 있었지
                            </div>
                        </div>
                    </div>
                </div>

                <div class="message">
                    <div class="message-card">
                        <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#userModal">
                            <img src="<%=contextPath%>/resources/static/img/profile/chatbot.png" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="info">
                            <div class="user-name">
                                챗봇 도우미
                            </div>
                            <div class="content">
                                과거 메시지1
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="search-form">
                <input type="text">
                <button class="rounded-circle" onclick="alert('클릭됨')">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>
        </div>

	</div>

</body>

</html>