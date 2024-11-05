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
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/infopage/infoPage.css">
            <div class="wrapper">
                <nav id="certiSelect">
                    <div class="container">
                        <ul class="navbar">
                            <li>
                                <a class="navbar-item" href="#">정보처리기사</a>
                            </li>
                            <!-- <li>
                                <a class="navbar-item" href="#">정보보안기사</a>
                            </li>
                            <li>
                                <a class="navbar-item" href="#">네트워크관리사</a>
                            </li>
                            <li>
                                <a class="navbar-item" href="#">빅데이터분석기사</a>
                            </li>
                            <li>
                                <a class="navbar-item" href="#">Home</a>
                            </li> -->
                        </ul>
                    </div>
                </nav>
            </div>
            

            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>