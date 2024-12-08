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
            <form class="search-form" action="<%=contextPath%>/info/search" method="get">
                <input type="text" name="keyword" placeholder="검색어를 입력하세요" value="${keyword}">
                <button type="submit">
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png" alt="검색">
                </button>
            </form>

            <br><br>

            <!-- 검색 결과 리스트 -->
            <div class="results-container">
                <p>검색 결과 ${pi.listCount}건</p>
                <c:forEach var="item" items="${list}">
                    <div class="result-item" data-exam-scope="${item.licenseExamScope}"
                        data-doc-exam-fee="${item.licenseDocExam}" data-prac-exam-fee="${item.licensePracExam}">
                        <!-- 버튼 텍스트에 자격증 이름 삽입 -->
                        <button class="result-btn">${item.licenseName}</button>
                        <h6>${item.licenseDesc}</h6>
                    </div>
                </c:forEach>

                <!-- 모달창 -->
                <div id="licenseModal" class="modal" style="display: none;">
                    <div class="modal-content">
                        <span class="close-btn">&times;</span>
                        <h2 id="modalLicenseName"></h2>
                        <p>시험 범위: <span id="modalLicenseScope"></span></p>
                        <p>필기 수수료: <span id="modalDocExamFee"></span></p>
                        <p>실기 수수료: <span id="modalPracExamFee"></span></p>
                    </div>
                </div>


            </div>

            <br><br>

            <!-- 페이징바 -->
            <div class="pagination">
                <!-- 이전 페이지 화살표 -->
                <c:if test="${pi.currentPage > 1}">
                    <span class="page-arrow">
                        <a href="?cpage=${pi.currentPage - 1}&keyword=${keyword}">
                            <img src="<%=contextPath%>/resources/static/img/button/arrow_left.png" alt="">
                        </a>
                    </span>
                </c:if>

                <!-- 페이지 번호들 -->
                <c:forEach var="page" begin="${pi.startPage}" end="${pi.endPage}">
                    <c:choose>
                        <c:when test="${page == pi.currentPage}">
                            <span class="page-num active">${page}</span>
                        </c:when>
                        <c:otherwise>
                            <span class="page-num">
                                <a href="?cpage=${page}&keyword=${keyword}">${page}</a>
                            </span>
                        </c:otherwise>
                    </c:choose>
                </c:forEach>

                <!-- 다음 페이지 화살표 -->
                <c:if test="${pi.currentPage < pi.maxPage}">
                    <span class="page-arrow">
                        <a href="?cpage=${pi.currentPage + 1}&keyword=${keyword}">
                            <img src="<%=contextPath%>/resources/static/img/button/arrow_right.png" alt="">
                        </a>
                    </span>
                </c:if>
            </div>

            <script src="<%=contextPath%>/resources/static/js/infopage/searchPage.js"></script>

            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>