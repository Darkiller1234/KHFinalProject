<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Header</title>
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/header.css">
</head>
<body>
    <div class="wrapper">

        <div class="menu">
            <div class="logo">
                <img src="<%=contextPath%>/resources/static/img/logo/logo_big.png">
            </div>

            <div class="navi">
                
                <div class="navi-head">
                    <ul>
                        <li>자격증 정보</li>
                        <li>커뮤니티</li>
                        <li>스터디룸</li>
                        <li>개인 페이지</li>
                        <li>기타</li>
                    </ul>
                </div>

                <div class="navi-body">
                    <ul>
                        <li class="submenu">
                            <ul>
                                <li><a href="">자격증 검색</a></li>
                            </ul>
                        </li> 
        
                        <li class="submenu">
                            <ul>
                                <li><a href="">정보처리기사</a></li>
                                <li><a href="">네트워크 관리사</a></li>
                                <li><a href="">정보보안기사</a></li>
                                <li><a href="">빅데이터 분석기사</a></li>
                            </ul>
                        </li> 
        
                        <li class="submenu">
                            <ul>
                                <li><a href="">멘토 / 멘티</a></li>
                                <li><a href="">스터디 그룹</a></li>
                            </ul>
                        </li> 
        
                        <li class="submenu">
                            <ul>
                                <li><a href="">개인 페이지</a></li>
                                <li><a href="">메시지</a></li>
                            </ul>
                        </li> 
        
                        <li class="submenu">
                            <ul>
                                <li><a href="">컴파일러</a></li>
                                <li><a href="">챗봇 도우미</a></li>
                            </ul>
                        </li> 
                    </ul>
                </div>

            </div>

            <div class="etc">
                <a href="">로그인</a>
                <a href="">회원가입</a>
                <img src="<%=contextPath%>/resources/static/img/button/menu_button.png">
            </div>
        </div>
    </div>
</body>
</html>