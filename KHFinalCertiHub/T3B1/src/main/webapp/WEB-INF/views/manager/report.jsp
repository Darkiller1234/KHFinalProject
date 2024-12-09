<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>관리자 페이지</title>

        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/manager/report.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/manager/report.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>

            <div class="wrapper">
                <div class="container">
                    <!-- 사이드바 -->
                    <div class="sidebar">
                        <ul>
                            <li><a href="<%=contextPath%>/manager/manager">공지</a></li>
                            <li><a href="<%=contextPath%>/manager/certify">자격증 인증</a></li>
                            <li><a href="<%=contextPath%>/manager/commulist">커뮤니티 게시글 관리</a></li>
                            <li><a href="<%=contextPath%>/manager/list">홍보 게시글 관리</a></li>
                            <li><a href="<%=contextPath%>/manager/report">신고 목록</a></li>
                            <li><a href="<%=contextPath%>/manager/user">유저 관리</a></li>
                        </ul>
                    </div>
                    <!-- 콘텐츠 영역 -->
                    <div class="content">
                        <h2>관리자 페이지</h2>

                        <!-- 검색 폼 -->
                        <div class="search-form">
                            <input type="text" name="keyword" value="${keyword}">
                            <button type="submit">
                                <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                            </button>
                        </div>
                        <br><br>

                        <div class="board-certify">
                            <table class="board">
                                <tr class="header bgcolor2">
                                    <th  data-bs-toggle="modal" data-bs-target="#apply-modal">신청자</th>
                                    <th class="title">신청자격증</th>
                                    <th>신고 사유</th>
                                    <th>삭제</th>
                                    <th>무시</th>
                                </tr>
                            </table>
                        </div>
                        <br><br>

                        <!-- 페이징바 -->
                        <div class="certify-bar"></div>
                    </div>
                </div>


                <!-- 모달창 -->
                <div class="modal" id="apply-modal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">
                                    <img src="<%=contextPath%>/resources/static/img/logo/logo_big.png" ">
                                </h4>
                            </div>

                            <!-- Modal body -->
                            <div class=" modal-body">
                                    잠시만 기다려주세요...
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <button type="button" data-bs-dismiss="modal">닫기</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>