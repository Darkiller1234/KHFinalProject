<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>개인 일정</title>
        <!-- FullCalendar CSS (CDN) -->
        <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.css" rel="stylesheet" />
        <!-- FullCalendar JS (CDN) -->
        <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"></script>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/personal/privateSchedule.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <div class="wrapper">
                <div class="calendar">
                    <div id="calendar"></div>
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

                        </div>
                    </div>
                </div>
            </div>
            <script src="<%=contextPath%>/resources/static/js/calendar/calendar.js"></script>

            <%@ include file="../common/footer.jsp" %>

    </body>

    </html>