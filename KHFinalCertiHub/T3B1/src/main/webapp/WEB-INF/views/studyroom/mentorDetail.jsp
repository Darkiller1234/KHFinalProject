<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 멘토 정보</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/mentorDetail.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="page-title font-size-title">멘토 정보</div>

        <div class="mentor-page">
            <div class="mentor-card">
                <div class="profile-img small">
                    <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
                </div>
                <div class="mentor-name font-size-subtitle">User01</div>
                <div class="symbol-license">빅데이터분석기사</div>
                <div class="member-intro font-size-footer">안녕하세요~ 반갑습니다~~ 잘부탁드려용~~ 저는 민트초코파인애플피자 좋아합니다 감사합니다</div>
                <div class="tag valid bgcolor3"><img src="<%=contextPath%>/resources/static/img/button/valid_icon.png">질문가능</div>
                <button class="btn-primary"  data-bs-toggle="modal" data-bs-target="#apply-modal">신청하기</button>
            </div>

            <div class="mentor-info">
                <div class="font-size-title">경력</div>
                <div class="mentor-career">
                    네트워크 분야 5년 경력<br>
                    2016 ~ 2019 XX회사 근무<br>
                    2019 ~ 2024 OO회사 OO직<br>
                </div>
                <div class="font-size-title">소개</div>
                <div class="mentor-intro">
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
                    있을 수 없는 일이라며 난 울었어
                    내 사랑과 우정을 모두 버려야 했기에
                    또 다른 내 친구는 내 어깰 두드리며
                    잊어버리라 했지만 잊지 못할 것 같아
                    너를 사랑했던 것만큼 난 내 친구도 믿었기에
                    난 자연스럽게 너와 함께 어울렸던 것뿐인데
                    어디서부터 우리의 믿음이 깨지기 시작했는지
                    난 알지도 못한 채 어색함을 느끼면서
                    그렇게 함께 만나온 시간이 길어지면 질수록
                    넌 내게서 더 조금씩 멀어지는 것을 느끼며
                    난 예감을 했었지 넌 나보다 내 친구에게
                    관심이 더 있었다는 걸
                    그 어느 날 너와 내가 심하게 다툰 그 날 이후로
                    너와 내 친구는 연락도 없고 날 피하는 것같아
                    그제서야 난 느낀거야 모든 것이 잘못돼 있는걸
                    너와 내 친구는 어느새 다정한 연인이 돼 있었지
                    있을 수 없는 일이라며 난 울었어
                    내 사랑과 우정을 모두 버려야 했기에
                    또 다른 내 친구는 내 어깰 두드리며
                    잊어버리라 했지만 잊지 못할 것 같아
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
                    있을 수 없는 일이라며 난 울었어
                    내 사랑과 우정을 모두 버려야 했기에
                    또 다른 내 친구는 내 어깰 두드리며
                    잊어버리라 했지만 잊지 못할 것 같아
                    너를 사랑했던 것만큼 난 내 친구도 믿었기에
                    난 자연스럽게 너와 함께 어울렸던 것뿐인데
                    어디서부터 우리의 믿음이 깨지기 시작했는지
                    난 알지도 못한 채 어색함을 느끼면서
                    그렇게 함께 만나온 시간이 길어지면 질수록
                    넌 내게서 더 조금씩 멀어지는 것을 느끼며
                    난 예감을 했었지 넌 나보다 내 친구에게
                    관심이 더 있었다는 걸
                    그 어느 날 너와 내가 심하게 다툰 그 날 이후로
                    너와 내 친구는 연락도 없고 날 피하는 것같아
                    그제서야 난 느낀거야 모든 것이 잘못돼 있는걸
                    너와 내 친구는 어느새 다정한 연인이 돼 있었지
                    있을 수 없는 일이라며 난 울었어
                    내 사랑과 우정을 모두 버려야 했기에
                    또 다른 내 친구는 내 어깰 두드리며
                    잊어버리라 했지만 잊지 못할 것 같아
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
                    있을 수 없는 일이라며 난 울었어
                    내 사랑과 우정을 모두 버려야 했기에
                    또 다른 내 친구는 내 어깰 두드리며
                    잊어버리라 했지만 잊지 못할 것 같아
                    너를 사랑했던 것만큼 난 내 친구도 믿었기에
                    난 자연스럽게 너와 함께 어울렸던 것뿐인데
                    어디서부터 우리의 믿음이 깨지기 시작했는지
                    난 알지도 못한 채 어색함을 느끼면서
                    그렇게 함께 만나온 시간이 길어지면 질수록
                    넌 내게서 더 조금씩 멀어지는 것을 느끼며
                    난 예감을 했었지 넌 나보다 내 친구에게
                    관심이 더 있었다는 걸
                    그 어느 날 너와 내가 심하게 다툰 그 날 이후로
                    너와 내 친구는 연락도 없고 날 피하는 것같아
                    그제서야 난 느낀거야 모든 것이 잘못돼 있는걸
                    너와 내 친구는 어느새 다정한 연인이 돼 있었지
                    있을 수 없는 일이라며 난 울었어
                    내 사랑과 우정을 모두 버려야 했기에
                    또 다른 내 친구는 내 어깰 두드리며
                    잊어버리라 했지만 잊지 못할 것 같아
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