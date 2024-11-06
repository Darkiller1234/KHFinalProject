<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>서티허브</title>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/personal/privateSchedule.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <div class="wrapper">
                <div class="calendar">
                    <img src="<%=contextPath%>/resources/static/img/temporary/calendar.png" alt="">
                </div>
                <div class="schedule">
                    <div class="todolist">
                        <h1>오늘의 할일</h1>
                    </div>
                    <div class="createwrap">
                        <div class="createtodo">
                            <h1>일정 생성하기</h1>
                            <button>
                                <img src="<%=contextPath%>/resources/static/img/button/plus.png" alt="">
                            </button>
                        </div>
                        <div class="list">
                            <p>젠지 따운!</p>
                            <p>LPL 따운!</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <%@ include file="../common/footer.jsp" %>
            
    </body>

    </html>