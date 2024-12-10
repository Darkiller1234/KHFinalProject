<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Header</title>

<!-- Bootstrap 5 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
crossorigin="anonymous"></script>

<!-- jQuery -->
<script 
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous">
</script>
<script
    src="https://code.jquery.com/ui/1.14.0/jquery-ui.min.js"
    integrity="sha256-Fb0zP4jE3JHqu+IBB9YktLcSjI1Zc6J2b6gTjB0LpoM="
    crossorigin="anonymous">
</script>

<!-- summernote -->
<link href="${pageContext.request.contextPath}/resources/static/lib/summernote/summernote-bs5.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/resources/static/lib/summernote/summernote-bs5.js"></script>

<!-- Google font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/header.css">
<script src="<%=contextPath%>/resources/static/js/common/header.js"></script>

</head>
<body onload="init(`${pageContext.request.contextPath}`,`${pageName}`, `${optional}`)">
    <div class="wrapper">

        <div class="menu">
            <div class="logo">
                <img 
                    src="<%=contextPath%>/resources/static/img/logo/logo_big.png"
                    onclick="location.href='<%=contextPath%>/main'
                ">
            </div>

            <div class="navi font-size-content">
                <div class="navi-head">
                    <ul>
                        <li data-name="license">자격증 정보</li>
                        <li data-name="community">커뮤니티</li>
                        <li data-name="study">스터디룸</li>
                        <li data-name="personal">개인 페이지</li>
                        <li data-name="etc">기타</li>
                    </ul>
                </div>

                
                <div class="navi-body font-size-content">
                    <ul>
                        <li class="submenu license">
                            <ul>
                                <li><a href="<%=contextPath%>/info/search">자격증 검색</a></li>
                                <li><a href="<%=contextPath%>/info/lib">자격증 정보</a></li>
                            </ul>
                        </li> 

                        <li class="submenu community">
                            <ul>
                                <li><a href="<%=contextPath%>/community/selectCerti">커뮤니티</a></li>
                            </ul>
                        </li> 

                        <li class="submenu study">
                            <ul>
                                <li><a href="<%=contextPath%>/mentor/search">멘토 / 멘티</a></li>
                                <li><a href="<%=contextPath%>/study/search">스터디 그룹</a></li>
                                <li><a href="<%=contextPath%>/study/list">홍보 게시판</a></li>
                            </ul>
                        </li> 

                        <li class="submenu personal">
                            <ul>
                                <li><a href="<%=contextPath%>/personal/profile">개인 페이지</a></li>
                                <li><a href="<%=contextPath%>/message/main">메시지</a></li>
                                <li><a href="<%=contextPath%>/manager/certify">관리자 페이지</a></li>
                                <li><a href="<%=contextPath%>/notice/notice">관리자 게시판</a></li>
                            </ul>
                        </li> 

                        <li class="submenu last etc">
                            <ul>
                                <li><a href="<%=contextPath%>/etc/compiler">컴파일러</a></li>
                                <li><a href="<%=contextPath%>/etc/chatbot">챗봇 도우미</a></li>
                            </ul>
                        </li> 
                    </ul>
                </div>

            </div>

            <div class="section font-size-footer">
                <c:choose>
                    <c:when test="${loginMember eq null}">
                        <a href="<%=contextPath%>/member/login">로그인</a>
                        <a href="<%=contextPath%>/member/membership">회원가입</a>
                    </c:when>
                    <c:otherwise>
                        <a href="<%=contextPath%>/member/logout.me">로그아웃</a>
                    </c:otherwise>
                </c:choose>
                <img src="<%=contextPath%>/resources/static/img/button/menu_button.png">
            </div>
        </div>
        
    </div>
</body>
</html>