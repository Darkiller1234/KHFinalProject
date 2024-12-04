<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communitySelectCerti.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/community/communityMain.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/community/communitySelectCerti.css">
    <!-- CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    <!-- JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
    <title>Document</title>
  </head>

  <body>
    <%@ include file="../common/header.jsp" %>
    <div class="wrapper">


        <input type="text" id="sex">
        <div id="sex2" class="disvisible">
            섹스섹스섹스섹스섹스섹스섹스
        </div>


    </div>



    <%@ include file="../common/footer.jsp"%>
  </body>

  </html>