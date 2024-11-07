<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>컴파일러</title>
    </head>

    <body>
        <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
        <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/etc/etc.css">
        <%@ include file="../common/header.jsp" %>
            <div>
                <h3>컴파일러 </h3>
                    <div class="language-select"></div>
            </div>


            <script src="<%=contextPath%>/resources/static/js/etc/etc.js"></script>
            <script src="<%=contextPath%>/resources/static/js/common/common.js"></script>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>