<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/common/errorPage.css">
<title>서티허브 - 에러!</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>
    <div class="wrapper padding">
        <div class="message-container">
            
            <div class="font-size-title">에러 발생!</div>
            <div class="img-section">
                <img src="${pageContext.request.contextPath}/resources/static/img/logo/logo.png">
            </div>

            <div class="errorText">
                <c:choose>
                    <c:when test="${errorMsg ne null}">
                        ${errorMsg}
                    </c:when>
                    <c:otherwise>
                        에러가 발생했습니다.
                    </c:otherwise>
                </c:choose>
            </div>

        </div>
    </div>
    <%@ include file="../common/footer.jsp" %>
</body>
</html>