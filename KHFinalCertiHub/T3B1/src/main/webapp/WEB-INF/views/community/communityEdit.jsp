<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communityEdit.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communityMain.js"></script>
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
            <a class="navbar-brand" onclick="certiChange(${certiNo})">${certiList[certiNo-1]}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick="location.href='selectCerti'">
              <span class="navbar-toggler-icon"><img src="<%=contextPath%>/resources/static/img/button/triangle_down.png" alt=""></span>
            </button>
          </div>
        </nav>
        <div id="middle-area">
          <div id="listArea">
            <div class="scroll-container">
              
              <div class="scroll-content btn-group" role="group" aria-label="Basic radio toggle button group">
                <!-- 여기에 스크롤 가능한 콘텐츠를 추가하세요 -->
                <!-- <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
                  <label class="btn btn-outline-primary" for="btnradio2" onclick="tabNoChange(${certiNo}, 1)">공지</label>
                </div> -->
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked value="2">
              <label class="btn btn-outline-primary" for="btnradio3">자유</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" value="3">
              <label class="btn btn-outline-primary" for="btnradio4">질문(자유)</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" value="4">
              <label class="btn btn-outline-primary" for="btnradio5">질문(코딩)</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" value="5">
              <label class="btn btn-outline-primary" for="btnradio6">후기</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off" value="6">
              <label class="btn btn-outline-primary" for="btnradio7">문제집/강의 추천</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off" value="7">
              <label class="btn btn-outline-primary" for="btnradio8">문제집 거래</label>
                </div>
                
              </div>
              
            </div>

            <!-- <form class="write-section" onsubmit="return false;">
                <input type="text" class="title" name="title" placeholder="이곳에 제목을 입력해주세요.(300Bytes 까지 가능)">
                <div class="board-content">
                    <div id="summernote"></div>
                </div>
        
                <div class="board-option">
                    <button type="submit" class="btn btn-primary" onclick="location.href='${pageContext.request.contextPath}/list.cm'">작성완료</button>
                </div>
            </form> -->
            <form class="write-section" method="post" action="edit/board">
              <input type="text" class="title" name="boardTitle" placeholder="이곳에 제목을 입력해주세요.(300Bytes 까지 가능)" value="${Bo.boardTitle}">
              <textarea id="summernote" name="boardContent">${Bo.boardContent}</textarea>
              <input type="hidden" name="tabNo" value="2">
              <input type="hidden" name="licenseNo" value="${certiNo}">
              <input type="hidden" name="boardNo" value="${Bo.boardNo}">
              <br> <input id="submitWrite" type="submit" class="btn btn-primary" value="수정완료">
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
              </div>
            </div>
            
          </div>
        </div>

      </div>
        <%@ include file="../common/footer.jsp"%>
      <script src="<%=contextPath%>/resources/static/js/community/communityMain.js"></script>
    </body>
  
    </html>