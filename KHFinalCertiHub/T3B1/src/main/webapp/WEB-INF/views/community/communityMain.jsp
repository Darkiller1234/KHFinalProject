<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communityMain.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/community/communityMain.css">

    <title>Document</title>
  </head>

  <body>
    <%@ include file="../common/header.jsp" %>
      
      
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
                  <div class="listArea-div1-tab cate-notice">
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
              <div onclick="redirect('<%=contextPath%>/community/detail')">
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
              <div onclick="location.href='<%=contextPath%>/detail.cm'">
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

            
            
            <div class="pagination">
              <span class="page-num">1</span>
              <span class="page-num active">2</span>
            </div>
            <div id="search-area">
              <div id="selectbox1" class="custom-select">
                <!-- <select>
                <option value="1" selected>최신순</option>
                <option value="2">추천순</option>
              </select> -->
              </div>
              <div>
                <div id="selectbox2" class="custom-select">
                </div>
                <input type="text">
                  <button class="rounded-circle" onclick="alert('클릭됨')">
                      <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                  </button> 
              </div>
              <button onclick="location.href='<%=contextPath%>/community/write'">
                <img src="<%=contextPath%>/resources/static/img/button/write.png" alt="">
                글쓰기
              </button>
            </div>
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
      
  </body>

  </html>