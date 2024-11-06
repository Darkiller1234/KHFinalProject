<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>searchPage</title>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/infopage/selectBox.js"></script>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/infopage/infoPage.css">
            <div class="wrapper">
                <div class="container">
                    <div class="certi">
                        <h1>정보처리기사</h1>
                    </div>
                </div>
                <div class="tab-container">
                    <ul class="tabs">
                        <li class="tab-link current" data-tab="tab-1">홈</li>
                        <li class="tab-link" data-tab="tab-2">자료실</li>
                    </ul>
                    <div id="tab-1" class="tab-content current">
                        홈
                    </div>
                    <div id="tab-2" class="tab-content">
                        <div class="selectBox">
                            <div class="custom-select"></div>
                        </div>
                        <div class="board-content"></div>
                    </div>
                </div>
            </div>

            <script src="<%=contextPath%>/resources/static/js/infopage/infoPage.js"></script>


            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>