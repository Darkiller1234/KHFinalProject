<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서티허브 - 스터디 그룹</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/studyroom/studyDetail.css">
    <script src="${pageContext.request.contextPath}/resources/static/js/studyroom/studyDetail.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <div class="wrapper padding">
        <div class="subtitle">
            <div class="page-title font-size-content">스터디 그룹 모집 & 현황</div>

            <div class="title-option">
                <div class="custom-select"></div>
            </div>
        </div>

        <div class="page-title font-size-title">SQLD 스터디 모집 (2024년 11월 17일 시험 대비)</div>

        <div class="content">
            - 스터디 도중에 맡은 분량 펑크(포기/불참/지각)로 인한 분위기 와해를 방지하고자 보증금 2만원있으며 킥오프 진행 후 스터디 멤버 중 선출된 조장님이 관리합니다.
            <br><br>
            - 보증금은 지각(5천원)/무단불참 페널티(1만원) 사용하며, 완주자는 페널티 차감 후 전액환급, 중도 포기시 환급금 없습니다.
            <br><br>
            - 반드시 완주하실 강한 의지를 가진 분만 지원해 주세요.
            <br><br>
            - 스터디 진행 방식은 멤버별로 돌아가면서 이론발표 또는 문제풀이 형식으로 진행합니다.
            <br><br>
            - "SQL자격검정실전문제" (일명 노랭이)를 기본으로 하나 스터디 그룹별 합의로 변경 가능합니다.
            <br><br>
            - 스터디 그룹별 SQLP 보유자 또는 현업종사자 들의 멘토 지원 있습니다.
              (멘토 지원자 여건 상 100% 지원 안 될 수 도 있습니다. )
              <br><br>
            - 데이터전문가포럼은 비영리카페로 운영진과 멘토 분들은 재능기부를 하고 있어, 보증금은 단 1원도 취하지 않습니다.
            <br><br>
            <br><br>
            ### 상세 내용 ###
            <br><br>
            1. 신청기한: ~ 10/11(금) 18:00 (오후 6시 까지)
            <br><br>
            2. 스터디 장소: 오프라인(종각역/강남역)과 온라인
            <br><br>
            3. 인원구성: 오프라인은 한 스터디 당 8명 내외 구성 (인원 미달시 스터디 구성이 안 될수 있음)
            <br><br>
            4. 킥오프미팅 일시: 10/11(금) 밤 22:00 ~ 23:00
            - 킥오프 참석시 비디오 ON 필수, OFF시 참여불가함!, 온라인 스터디 시에도 비디오 ON 필수, OFF시 참여불가함! 
            - 킥오프미팅 불참자는 원칙적으로 스터디참여가 불가능하며, 해외출장, 시험 등 불가피한 경우는 채팅으로 사전연락 요망
            - 신청 후 취소할 경우 별도 연락요망! 사전 연락 없는 노쇼의 경우, 추후 스터디 참석 불가!!
            <br><br>
            5. 스터디일정 10월 13(14)일 ~ 11월 9(10)일 (5주)
             - 금주부터 스터디 시작됨으로 신청하시는 분들은 미리 노랭이 "데이터 모델링의 이해"​  Part 준비해 주세요
             <br><br>
            6. 신청서 작성링크
            https://naver.me/FPnLdbwi
            <br><br>
            신청서 작성 후 신청서 하단의 오픈채팅방에 입장
            (킥오프 접속 정보는 오픈채팅방에 공지 됩니다)
        </div>
    </div>

    <div class="option">
        <button class="delete btn-primary">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/trash_icon.png">
            삭제
        </button>
        <button class="modify btn-primary">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/scissors_icon.png">
            수정
        </button>
        <button class="back btn-primary" onclick="location.href='${pageContext.request.contextPath}/study/list'">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/menu_icon.png">
            목록
        </button>
        <button class="apply btn-primary" data-bs-toggle="modal" data-bs-target="#apply-alert">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/pencil_icon.png">
            신청하기
        </button>
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