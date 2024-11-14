<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>searchPage</title>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/infopage/searchPage.css">
            <div id="wrapper">
                <h1 class="title">자격증 정보 검색</h1>
            </div>

            <!-- 검색 폼 -->
            <form class="search-form" action="" method="get">
                <input type="text" placeholder="검색어를 입력하세요" value="${keyword}">
                <button type="submit">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png" alt="검색">
                </button>
            </form>
            <br><br>
            <!-- 분류 탭 -->
            <div class="container">
                <ul class="tabs">
                    <li class="tab-link current" data-tab="tab-1">
                        <button class="btn">분야</button>
                    </li>
                    <li class="tab-link" data-tab="tab-2">
                        <button class="btn">자격증 종류</button>
                    </li>
                    <li class="tab-link" data-tab="tab-3">
                        <button class="btn">일정 상태</button>
                    </li>
                </ul>

                <div class="tab-list">
                    <ul id="tab-1" class="tab-content current">
                        <li>IT, 정보통신 <br></li>
                        <li>전기, 전자 <br></li>
                        <li>전자 <br></li>
                        <li>기계 <br></li>
                        <li>운동 <br></li>
                        <li>경영 <br></li>
                        <li>음식 서비스 <br></li>
                        <li>화학 <br></li>
                        <li>건설 <br></li>
                        <li>재료 <br></li>
                        <li>바이오 <br></li>
                        <li>에너지 <br></li>
                        <li>농립어업 <br></li>
                        <li>섬유 <br></li>
                        <li>사회복지 <br></li>
                        <li>보건, 의료</li>
                    </ul>

                    <ul id="tab-2" class="tab-content">
                        <li>전체 <br></li>
                        <li>국가기술자격 <br></li>
                        <li>국가전문자격 <br></li>
                        <li>능력검정 <br></li>
                        <li>국가공인자격 <br></li>
                        <li>등록민간자격 <br></li>
                        <li>국제자격 <br></li>
                    </ul>

                    <ul id="tab-3" class="tab-content">
                        <li>전체 <br></li>
                        <li>시험일 <br></li>
                        <li>접수중 <br></li>
                        <li>접수예정 <br></li>
                        <li>오늘 접수 마감 <br></li>
                    </ul>
                </div>
            </div>
            <div class="tab-preview">
                IT,정보 통신 ->
                <div class="btn-container">
                    <button class="btn1">초기화</button>
                    <button class="btn2">검색</button>
                </div>
            </div>
            <br><br>


            <div class="results-container">
                <p>검색 결과 ${pi.listCount}건</p>
                <c:forEach var="item" items="${list}">
                    <div class="result-item">
                        <h3>${item.licenseName}</h3>
                        <p>시험일 | ${item.year}년 | 분야 | ${item.status}</p>
                        <button class="view-details"
                            onclick="location.href='<%=contextPath%>/info/lib'">${item.qualificationType}</button>
                    </div>
                </c:forEach>

                <br><br> 

                <!-- 페이징바 -->
                <div class="pagination">
                    <span class="page-arrow">
                        <img src="<%=contextPath%>/resources/static/img/button/arrow_left.png" alt="">
                    </span>
                    <span class="page-num">1</span>
                    <span class="page-num active">2</span>
                    <span class="page-num">3</span>
                    <span class="page-num">4</span>
                    <span class="page-num">5</span>
                    <span class="page-arrow">
                        <img src="<%=contextPath%>/resources/static/img/button/arrow_right.png" alt="">
                    </span>
                </div>

            </div>
            <script src="<%=contextPath%>/resources/static/js/infopage/infoPage.js"></script>

            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>