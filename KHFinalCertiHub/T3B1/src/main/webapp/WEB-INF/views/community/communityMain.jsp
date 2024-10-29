<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <title>Document</title>
</head>
<body>
    <!-- <%@ include file="../common/header.jsp"%> -->
    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/community/communityMain.css">
    <script src="<%=contextPath%>/resources/static/js/community/communityMain.js"></script>
    <div class="wrapper">
        <div id="certiSelect">
            <h1>정보처리기사</h1>
            <button>ㅁ</button>
        </div>
        <div id="listArea">
            <div class="swiper-container">
                <div class="swiper-wrapper btn-group" role="group" aria-label="Basic radio toggle button group">
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                        <label class="btn btn-outline-primary" for="btnradio1">전체</label>
                    </div>
                    
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio2">공지</label>
                    </div>
            
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio3">자유</label>
                    </div>
            
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio4">질문(자유)</label>
                    </div>
                    
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio5">질문(코딩)</label>
                    </div>
            
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio6">후기</label>
                    </div>
            
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio7">문제집/강의 추천</label>
                    </div>
            
                    <div class="swiper-slide">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio8">문제집 거래</label>
                    </div>
                </div>
            
                <!-- 네비게이션 버튼 -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <table>
                <tr>
                    <th>탭</th>
                    <th>제목 [댓글숫자]</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                    <th>추천수</th>
                </tr>
                <tr>
                    <td>탭</td>
                    <td>제목 [댓글숫자]</td>
                    <td>작성자</td>
                    <td>작성일</td>
                    <td>조회수</td>
                    <td>추천수</td>
                </tr>
            </table>
        </div>
    </div>


    <!-- <%@ include file="../common/footer.jsp"%> -->
</body>
</html>