<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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

<!-- Google font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
<link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/header.css">
<script src="<%=contextPath%>/resources/static/js/common/header.js"></script>

</head>
<body onload="init()">
    <div class="wrapper">

        <div class="menu">
            <div class="logo">
                <img 
                    src="<%=contextPath%>/resources/static/img/logo/logo_big.png"
                    onclick="location.href='main'
                ">
            </div>

            <div class="navi">
                <div class="navi-head">
                    <ul>
                        <li data-name="license">자격증 정보</li>
                        <li data-name="community">커뮤니티</li>
                        <li data-name="study">스터디룸</li>
                        <li data-name="personal">개인 페이지</li>
                        <li data-name="etc">기타</li>
                    </ul>
                </div>

                
                <div class="navi-body">
                    <ul>
                        <li class="submenu license">
                            <ul>
                                <li><a href="">자격증 검색</a></li>
                            </ul>
                        </li> 

                        <li class="submenu community">
                            <ul>
                                <li><a href="main.cm">정보처리기사</a></li>
                                <li><a href="main.cm">네트워크 관리사</a></li>
                                <li><a href="main.cm">정보보안기사</a></li>
                                <li><a href="main.cm">빅데이터 분석기사</a></li>
                            </ul>
                        </li> 

                        <li class="submenu study">
                            <ul>
                                <li><a href="">멘토 / 멘티</a></li>
                                <li><a href="">스터디 그룹</a></li>
                            </ul>
                        </li> 

                        <li class="submenu personal">
                            <ul>
                                <li><a href="">개인 페이지</a></li>
                                <li><a href="">메시지</a></li>
                            </ul>
                        </li> 

                        <li class="submenu last etc">
                            <ul>
                                <li><a href="">컴파일러</a></li>
                                <li><a href="">챗봇 도우미</a></li>
                            </ul>
                        </li> 
                    </ul>
                </div>

            </div>

            <div class="section">
                <a href="">로그인</a>
                <a href="">회원가입</a>
                <img src="<%=contextPath%>/resources/static/img/button/menu_button.png">
            </div>
        </div>
        
    </div>
</body>
</html>