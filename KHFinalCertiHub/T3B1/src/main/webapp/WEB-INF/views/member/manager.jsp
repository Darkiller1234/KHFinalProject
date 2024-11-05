<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>
</head>
<body>
    <%@ include file="../common/header.jsp" %>

    <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/member/manager.css">
    <script src="<%=contextPath%>/resources/static/js/member/manager.js"></script>

    <div class="wrapper">
        <div class="container">
            <!-- 사이드바 -->
            <div class="sidebar">
                <ul>
                    <li><a href="manager/notice">공지</a></li>
                    <li><a href="#">자격증 인증</a></li>
                    <li><a href="#">게시글 관리</a></li>
                    <li><a href="#">신고 목록</a></li>
                    <li><a href="#">유저 관리</a></li>
                </ul>
            </div>
            <!-- 콘텐츠 영역 -->
            <div class="content">
                <h2>관리자 페이지</h2>

                <div class="search-form">
                    <input type="text">
                    <button class="rounded-circle" onclick="alert('클릭됨')">
                        <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                    </button> 
                </div>

                <table class="board">
                    <tr class="header bgcolor2">
                        <th>NO.</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                        <th>삭제</th>
                    </tr>
        
                    <tr>
                        <td>1</td>
                        <td>공지사항</td>
                        <td>2024.11.05</td>
                        <td>1111</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>공지사항</td>
                        <td>2024.10.05</td>
                        <td>1000</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>공지사항</td>
                        <td>2024.08.05</td>
                        <td>978</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>공지사항</td>
                        <td>2024.06.05</td>
                        <td>846</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>공지사항</td>
                        <td>2024.04.05</td>
                        <td>753</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>공지사항</td>
                        <td>2024.02.05</td>
                        <td>489</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>공지사항</td>
                        <td>2023.12.05</td>
                        <td>1010</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>공지사항</td>
                        <td>2023.10.05</td>
                        <td>654</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>공지사항</td>
                        <td>2023.08.05</td>
                        <td>800</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>공지사항</td>
                        <td>2023.06.05</td>
                        <td>1024</td>
                        <td><button>X</button></td>
                    </tr>
                </table>

                <!-- 페이징바 -->
                <div class="pagination">
                    <span class="page-arrow">&lt;</span>
                    <span class="page-num">1</span>
                    <span class="page-num active">2</span>
                    <span class="page-num">3</span>
                    <span class="page-num">4</span>
                    <span class="page-num">5</span>
                    <span class="page-arrow">&gt;</span>
                </div>
            </div>
        </div>
    </div>
    <%@ include file="../common/footer.jsp" %>
</body>
</html>