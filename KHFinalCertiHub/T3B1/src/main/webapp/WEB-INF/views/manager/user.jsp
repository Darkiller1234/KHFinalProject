<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/manager/user.css">
        <script src="${pageContext.request.contextPath}/resources/static/js/manager/user.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

        <title>관리자 페이지</title>
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
                        <form class="search-form" action="<%=contextPath%>/manager/user" method="get" >
                            <input type="text" name="keyword" value="${keyword}">
                            <button type="submit">
                                <img src="<%=contextPath%>/resources/static/img/button/search_icon.png" alt="검색">
                            </button>
                        </form>
                        <br><br>

                        <div class="board-user">
                            <table>
                                    <tr>
                                        <th>NO.</th>
                                        <th>유저명</th>
                                        <th>이메일</th>
                                        <th>등록일</th>
                                        <th>멘토여부</th>
                                    </tr>
                                    <c:forEach var="item" items="${list}">
                                        <tr>
                                            <td>${item.memberNo}</td>
                                            <td>${item.memberNickname}</td>
                                            <td>${item.email}</td>
                                            <td>${item.enrollDate}</td>
                                            <td>${item.mentorStatus}</td>                                                    
                                        </tr>
                                    </c:forEach>
                            </table>    
                        </div>
                        <br><br>
                        <!-- 페이징바 -->
                        <div class="user-bar">
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
                                        <span class="page-num">
                                            <a href="?cpage=${page}&keyword=${keyword}">${page}</a>
                                        </span>
                                    </c:when>
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
                    </div>
                </div>
            </div>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>