<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <title>Document</title>
  </head>

  <body>
    <%@ include file="../common/header.jsp" %>
      <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/community/communityMain.css">
      <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/board.css">
      
      <div class="wrapper">
        <nav class="navbar bg-body-tertiary" id="certiSelect">
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
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="middle-area">
          <div id="listArea">
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
            <div class="listArea-div1">
              <div class="listArea-div1-info">
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
              <div class="listArea-noti">
                <div>
                  <div class="listArea-div1-tab">
                    공지
                  </div>
                  <div class="listArea-div1-title">
                    왜 안되는지는 저도 잘 모릅니다. 하하하.
                  </div>
                  <div class="listArea-div1-replyCount">
                    [0]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    18:10
                  </div>
                  <div class="listArea-div1-viewCount">
                    5
                  </div>
                  <div class="listArea-div1-dogchu">
                    0
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div1-tab">
                    문제집/강의 추천
                  </div>
                  <div class="listArea-div1-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?이거 왜 안됨?
                  </div>
                  <div class="listArea-div1-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    윤대한
                  </div>
                  <div class="listArea-div1-date">
                    2024.10.22
                  </div>
                  <div class="listArea-div1-viewCount">
                    10000
                  </div>
                  <div class="listArea-div1-dogchu">
                    -9999
                  </div>
                </div>
              </div>
            </div>
            
            <div class="listArea-div2">
              <div class="listArea-noti">
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
              <div class="listArea-div1-info">
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="listArea-div2-tab">
                    질문(자유)
                  </div>
                  <div class="listArea-div2-title">
                    이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 
                  </div>
                  <div class="listArea-div2-replyCount">
                    [9999]
                  </div>
                </div>
                <div>
                  <div class="listArea-div2-writter">
                    윤대한
                  </div>
                  <div class="listArea-div2-rightStuff">
                    <div class="listArea-div2-date">
                      2024.10.22
                    </div>
                    |
                    <div class="listArea-div2-viewCount">
                      조회수 10000
                    </div>
                    |
                    <div class="listArea-div2-dogchu">
                      추천수 -9999
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <table class="listArea-table1">
              <tr class="listArea-table1-info">
                <th class="listArea-table1-tab">탭</th>
                <th class="listArea-table1-title">제목 <span class="listArea-table1-replyCount">[댓글숫자]</span></th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
                <th>추천수</th>
              </tr>
              <tr class="listArea-table1-noti">
                <td>공지</td>
                <td>왜 안되는지는 저도 잘 모릅니다. 하하하. <span class="listArea-table1-replyCount">[0]</span></td>
                <td>윤대한</td>
                <td>18:10</td>
                <td>5</td>
                <td>0</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨?<span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
              <tr>
                <td>질문(자유)</td>
                <td>이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? 이거 왜 안됨? <span class="listArea-table1-replyCount">[9999]</span></td>
                <td>윤대한</td>
                <td>2024.10.22</td>
                <td>10000</td>
                <td>-9999</td>
              </tr>
            </table> -->
            
            
            <div>
              <button>1</button>
              <button>2</button>
            </div>
            <div id="search-area">
              <select>
                <option value="1" selected>최신순</option>
                <option value="2">추천순</option>
                <option value="3"></option>
                <option value="4">Three</option>
              </select>
              <div>
                <select>
                  <option value="1" selected>제목</option>
                  <option value="2">내용</option>
                  <option value="3">제목+내용</option>
                  <option value="4">글쓴이</option>
                </select>
                <input type="text">
                <button>검색</button>
              </div>
              
              <button>글쓰기</button>
            </div>
          </div>
          <div id="popular-list-div" >
            <div class="sticky-element">
              <div id="popular-list-area-all">
                <h2>전체 인기글</h2>
                <table>
                  <tr>
                    <th>제목</th>
                    <th>댓글수</th>
                    <th>추천수</th>
                  </tr>
                  <tr>
                    <td>이거 왜 안됨?</td>
                    <td>[9999]</td>
                    <td>-9999</td>
                  </tr>
                  <tr>
                    <td>응애 살려저</td>
                    <td>[1]</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>야근 싫다!</td>
                    <td>[10]</td>
                    <td>255</td>
                  </tr>
                  <tr>
                    <td>스택 오버플로우</td>
                    <td>[256[</td>
                    <td>-0</td>
                  </tr>
                </table>
              </div>
              <br>
              <div id="popular-list-area-this">
                <h2>이 게시판의 인기글</h2>
                <table>
                  <tr>
                    <th>제목</th>
                    <th>댓글수</th>
                    <th>추천수</th>
                  </tr>
                  <tr>
                    <td>이거 왜 안됨?</td>
                    <td>[9999]</td>
                    <td>-9999</td>
                  </tr>
                  <tr>
                    <td>응애 살려저</td>
                    <td>[1]</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>야근 싫다!</td>
                    <td>[10]</td>
                    <td>255</td>
                  </tr>
                  <tr>
                    <td>스택 오버플로우</td>
                    <td>[256[</td>
                    <td>-0</td>
                  </tr>
                </table>
              </div>
            </div>
            
          </div>

        </div>

      </div>


      <!-- <%@ include file="../common/footer.jsp"%> -->
      <script src="<%=contextPath%>/resources/static/js/community/communityMain.js"></script>
  </body>

  </html>