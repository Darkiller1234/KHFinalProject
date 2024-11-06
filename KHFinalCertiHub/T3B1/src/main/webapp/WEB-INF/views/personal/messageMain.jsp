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

	<div class="wrapper calcHeight">
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
        <div class="side">
            <div class="side-menu">
                <label>
                    <input type="radio" name="side-option" onclick="sideClick(this)" value="1">
                    <div>
                        <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/person_icon_light.png"></div>
                        <div class="option-text">멘토</div>
                    </div>
                </label>
                <label>
                    <input type="radio" name="side-option" onclick="sideClick(this)" value="2">
                    <div>
                        <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/group_icon_light.png"></div>
                        <div class="option-text">스터디그룹</div>
                    </div>
                </label>
                <label>
                    <input type="radio" name="side-option" onclick="sideClick(this)" value="3">
                    <div>
                        <div class="option-icon"><img src="${pageContext.request.contextPath}/resources/static/img/button/noti_icon_light.png"></div>
                        <div class="option-text">알림</div>
                    </div>
                </label>
            </div>

            <div class="side-extend" data-previousOption="">

                <div class="side-search">
                    <div class="search-form">
                        <input type="text">
                        <button class="rounded-circle" onclick="alert('클릭됨')">
                            <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                        </button> 
                    </div>
                </div>
    
                <div class="content">
    
                    <label>
                        <input type="radio" name="talkroom-option" onclick="talkroomClick(this)">
                        <div class="talkroom">
                            <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#talkroomModal">
                                <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                            </div>
                            <div class="talkroom-info">
                                <div class="talkroom-name">제2934325회 정처기 스터디방</div>
                                <div class="last-talk">테스트용 메시지입니다람쥐썬더!!!!!</div>
                            </div>
                        </div>
                    </label>

                    <label>
                        <input type="radio" name="talkroom-option" onclick="talkroomClick(this)">
                        <div class="talkroom">
                            <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#userModal">
                                <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                            </div>
                            <div class="talkroom-info">
                                <div class="talkroom-name">User01</div>
                                <div class="last-talk">코미는 낮보다 밤이 좋아 그런데 요즘 내가 점점이상해 버터랑 똑같아 사료먹으면</div>
                            </div>
                        </div>
                    </label>

                    <label>
                        <input type="radio" name="talkroom-option" onclick="talkroomClick(this)">
                        <div class="talkroom">
                            <div class="thumbnail" data-bs-toggle="modal" data-bs-target="#userModal">
                                <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                            </div>
                            <div class="talkroom-info">
                                <div class="talkroom-name">User01</div>
                                <div class="last-talk">테스트용 메시지입니다람쥐썬더!!!!!</div>
                            </div>
                        </div>
                    </label>

                    <div class="talkroom">
                        <div class="thumbnail">
                            <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="talkroom-info">
                            <div class="talkroom-name" data-bs-toggle="modal" data-bs-target="#talkroomModal">User01님의 멘티 신청</div>
                            <div class="last-talk">수락하시겠습니까?</div>
                            <div class="option">
                                <button class="btn-accept">수락</button>
                                <button class="btn-primary">거절</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="talkroom">
                        <div class="thumbnail">
                            <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="talkroom-info">
                            <div class="talkroom-name" data-bs-toggle="modal" data-bs-target="#talkroomModal">User01님의 스터디 신청</div>
                            <div class="last-talk">정보보안기사 30일 용사 스터디그룹</div>
                            <div class="option">
                                <button class="btn-accept">수락</button>
                                <button class="btn-primary">거절</button>
                            </div>
                        </div>
                    </div>

                    <!-- AJAX 조회결과 없을시 출력 -->
                    <!-- <div class="not-found">
                        <img src="${pageContext.request.contextPath}/resources/static/img/button/sad_emote.png">
                        <div class="font-size-subtitle">대화상대가 없습니다...</div>
                        <div class="font-size-content">멘티나 스터디 그룹을 신청해보세요!</div>
                    </div>  -->

                </div>
            </div>
            
        </div>

        <div class="message-section">
            <div class="message-window">

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
                            <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="info">
                            <div class="user-name">
                                User01
                                <img src="<%=contextPath%>/resources/static/img/button/manager_icon.png">
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


                <!-- 채팅방 선택전 표시 -->
                <!-- <div class="not-found">
                    <img src="${pageContext.request.contextPath}/resources/static/img/button/chat_icon.png">
                    <div class="font-size-subtitle">선택된 채팅방이 없네요...</div>
                    <div class="font-size-content">채팅방을 선택해 대화를 시작하세요.</div>
                </div> -->

            </div>

            <div class="search-form">
                <input type="text">
                <button class="rounded-circle" onclick="alert('클릭됨')">
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
                    <div class="mentor-valid accept font-size-content"><img src="<%=contextPath%>/resources/static/img/button/person_icon_light.png">12명</div>
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
                        <div class="mentor-valid accept font-size-content">정보처리기사</div>
                        <div class="mentor-valid accept font-size-content">빅데이터분석기사</div>
                        <div class="mentor-valid accept font-size-content">네트워크관리사</div>
                        <div class="mentor-valid accept font-size-content">정보보안기사</div>
                        <div class="mentor-valid accept font-size-content">빅데이터분석기사</div>
                    </div>
                </div>
        
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">상세 페이지로</button>
                </div>
        
            </div>
        </div>
    </div>

</body>

</html>