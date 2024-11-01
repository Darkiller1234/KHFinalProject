<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
</head>
<body>
    <!-- 버튼 -->
    <div class="btns">
        <button type="submit" class="btn btn-primary">로그인</button>
    </div>

    <!-- 프로필 이미지(둥근버전) -->
    <!-- 큰 버전 ( 200px )-->
    <div class="profile-img">
        <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
    </div>

    <!-- 작은 버전 ( 150px )-->
    <div class="profile-img small">
        <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" class="rounded-circle" alt="Cinque Terre">
    </div>

    <!-- 페이징바 -->
    <div class="pagination">
        <span class="page-arrow"><</span>
        <span class="page-num">1</span>
        <span class="page-num active">2</span>
        <span class="page-num">3</span>
        <span class="page-num">4</span>
        <span class="page-num">5</span>
        <span class="page-arrow">></span>
    </div>

    <!-- 팝업(모달)-->
    <!-- 팝업 여는 버튼 -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
    </button>

    <!-- 모달창 -->
    <div class="modal" id="myModal">
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
            모달 내용 작성
            </div>
    
            <!-- Modal footer -->
            <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal">닫기</button>
            </div>
    
        </div>
        </div>
    </div>

    <!-- 셀렉트박스 -->
    <div class="custom-select">
        <div class="select-box">
          경기 <span class="arrow">▼</span>
        </div>
        <ul class="options">
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
        </ul>
      </div>
      <script src="${pageContext.request.contextPath}/resources/static/js/common/selectBox.js"></script>

    <!-- 게시판 목록(리스트, 테이블)-->
    <!--
         #listArea : 커뮤 글 리스트 전체를 감싸는 div

        .listArea-div1 : 넓은화면에서 나오는 길쭉한 글 리스트 div (길쭉이)

        .listArea-div2 : 좁은화면에서 나오는 짧은 글 리스트 div (짧뚝이)




        .listArea-noti : 공지사항 div ( 배경색만 변함 )

        .listArea-div1-info : 상단 탭 설명 div ( 길쭉이 한정 권장 짧뚝이 해도 별일없긴함 ) ( 배경색만 변함 )




        .listArea-div1-~~~ : 길쭉이 리스트 css

        .listArea-div2-~~~ : 짧뚝이 리스트 css


        ~~~ 에 들어가는 목록
        tab : 탭 이름 들어가는 div

        title : 제목 들어가는 div

        replyCount : 댓글 갯수 div

        writter : 작성자 div

        date : 작성일 div

        viewCount : 조회수 div

        dogchu : 개추 카운트 div




        !!!주의!!!

        div1과 div2의 구조가 다름

        순서 맞추는거 권장

        요소들 지워도 작동 
        그러나 <div class="listArea-div2-rightStuff"> 는 지우지 말 것
    -->
    <div id="listArea">
        <div class="listArea-div1">
            <div>
                <div>
                    <div class="listArea-div1-tab">
                        탭
                    </div>
                    <div class="listArea-div1-title">
                        제목
                    </div>
                    <div class="listArea-div1-replyCount">
                        [댓글숫자]
                    </div>
                </div>
                <div>
                    <div class="listArea-div1-writter">
                        작성자
                    </div>
                    <div class="listArea-div1-date">
                        작성일
                    </div>
                    <div class="listArea-div1-viewCount">
                        조회수
                    </div>
                    <div class="listArea-div1-dogchu">
                        추천수
                    </div>
                </div>
            </div>
        </div>
        <div class="listArea-div2">
            <div>
                <div>
                    <div class="listArea-div2-tab">
                        공지
                    </div>
                    <div class="listArea-div2-title">
                        왜 안되는지는 저도 잘 모릅니다. 하하하.
                    </div>
                    <div class="listArea-div2-replyCount">
                        [0]
                    </div>
                </div>
            <div>
                <div class="listArea-div2-writter">
                    윤대한
                </div>
                <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                        18:10
                    </div>
                    | 
                    <div class="listArea-div2-viewCount">
                        조회수 5
                    </div>
                    | 
                    <div class="listArea-div2-dogchu">
                        추천수 0
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>