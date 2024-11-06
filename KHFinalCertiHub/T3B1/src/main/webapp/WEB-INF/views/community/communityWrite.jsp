<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communityWrite.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <title>Document</title>
  </head>

  <body>
    <%@ include file="../common/header.jsp" %>
      <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/community/communityMain.css">
      <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/community/communityWrite.css">
      <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/studyroom/studyWrite.css">
      <div class="wrapper">
        <nav class="navbar bg-body-tertiary page-title" id="certiSelect">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">정보처리기사</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">ㅁ</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">정보보안기사</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">네트워크관리사</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">빅데이터 분석기사</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="middle-area">
          <div>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
              <label class="btn btn-outline-primary" for="btnradio1">전체</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio2">공지</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio3">자유</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio4">질문(자유)</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio5">질문(코딩)</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio6">후기</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio7">문제집/강의 추천</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio8">문제집 거래</label>
            </div>

            <form class="write-section" onsubmit="return false;">
                <input type="text" class="title" name="title" placeholder="이곳에 제목을 입력해주세요.(300Bytes 까지 가능)">
                <div class="board-content">
                    <div id="summernote"></div>
                </div>
        
                <div class="board-option">
                    <button type="submit" class="btn btn-primary" onclick="location.href='${pageContext.request.contextPath}/list.cm'">작성완료</button>
                </div>
            </form>
          </div>







          <div id="popular-list-div" >
            <div class="sticky-element">
              <div id="popular-list-area-all">
                <h2 class="font-size-subtitle">전체 인기글</h2>
                <div class="popular-list-info">
                  <span>제목</span><span>댓글수</span><span>추천수</span>
                </div>
              </div>
              <br>
              <div id="popular-list-area-this">
                <h2 class="font-size-subtitle">이 게시판의 인기글</h2>
                <div class="popular-list-info">
                  <span>제목</span><span>댓글수</span><span>추천수</span>
                </div>
                <div>
                  <span>이거 왜 안됨?모녀듀어펴ㅠ어뎌륭더</span><span>[99999]</span><span>-999999</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
        <!-- <%@ include file="../common/footer.jsp"%> -->
      <script src="<%=contextPath%>/resources/static/js/community/communityMain.js"></script>
    </body>
  
    </html>