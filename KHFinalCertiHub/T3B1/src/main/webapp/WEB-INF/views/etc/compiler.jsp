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
                <div class="all">
                    <div class="main">
                        <div class="title">Main.java</div>
                        <div class="compile-text">
                            <textarea name="compileMain" id="main">
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
                    <div class="result-screen">
                        <div class="result-title">실행 결과</div>
                        <div class="result">
                            Hello world!
                        </div>
                        <div class="takeTime">
                            <p>0.012345 초 소요됨</p>
                            <div class="btns">
                                <button class="btn1">질문하기</button>
                                <button class="btn2">실행</button>
                            </div>
                           
                        </div>

                    </div>
                </div>


            </div>


            <script src="<%=contextPath%>/resources/static/js/etc/etc.js"></script>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>