<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>searchPage</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/infopage/searchPage.css">
</head>
<body>
    <%@ include file="../common/header.jsp" %>
    
    <div id="wrapper">
        <h1 class="title">자격증 정보 검색</h1>
    </div>

    <!-- 검색 폼 -->
    <form class="search-form" action="" method="get">
        <input type="text" placeholder="검색어를 입력하세요">
        <button type="submit">
            <img src="${pageContext.request.contextPath}/resources/static/img/button/search_icon.png" alt="검색">
        </button>
    </form>

    <!-- 분류 탭 -->
    <div class="filter-container">
        <form action="searchResults.jsp" method="get">
            <table class="filter-table">
                <tr>
                    <td>
                        <select name="category">
                            <option value="">분야</option>
                            <option value="IT">IT 정보보안</option>
                            <option value="Electronics">전자</option>
                            <option value="Mechanical">기계</option>
                            <option value="Construction">건설</option>
                        </select>
                    </td>
                    <td>
                        <select name="type">
                            <option value="">자격증 종류</option>
                            <option value="ProfessionalEngineer">전기기술자격</option>
                            <option value="CraftsmanEngineer">국가기술자격</option>
                        </select>
                    </td>
                    <td>
                        <select name="status">
                            <option value="">일정 상태</option>
                            <option value="Scheduled">시행예정</option>
                            <option value="Announced">공시 예정</option>
                            <option value="TodayRegistration">오늘 접수마감</option>
                        </select>
                    </td>
                    <td class="filter-actions">
                        <button type="reset" class="reset-button">초기화</button>
                        <button type="submit" class="search-button">검색</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>

  
    <div class="results-container">
        <p>검색 결과 10건</p>

        <div class="result-item">
            <h3>정보처리기사</h3>
            <p>시험일 | 2024년 | 분야 | 공시 예정</p>
            <button class="view-details">국가기술자격</button>
        </div>

        <div class="result-item">
            <h3>정보처리기능사</h3>
            <p>시험일 | 2024년 | 분야 | 공시 예정</p>
            <button class="view-details">국가기술자격</button>
        </div>

        <div class="result-item">
            <h3>정보보안기사</h3>
            <p>시험일 | 2024년 | 분야 | 공시 예정</p>
            <button class="view-details">국가기술자격</button>
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
   
    </div>

    <%@ include file="../common/footer.jsp" %>
</body>
</html>
