<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>컴파일러</title>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>

    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/etc/etc.css">
            <div class="wrapper">
                <div>
                    <h3>컴파일러 </h3>
                    <div class="language-select"></div>
                </div>
                <div class="title">Main.java</div>
                <div class="compile-text">
                    <textarea name="compileMain" id="">
import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
                    </textarea>
                </div>
            </div>


            <script src="<%=contextPath%>/resources/static/js/etc/etc.js"></script>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>