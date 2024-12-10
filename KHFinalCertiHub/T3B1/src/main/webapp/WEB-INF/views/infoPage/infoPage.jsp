<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>InfoPage</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2a40239e8b746b411bf4057c27e822e9&libraries=services"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    </head>

    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/infopage/infoPage.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/infopage/map.css">
            <div class="wrapper">
                <div class="container">
                    <h1>자료실</h1>
                </div>
                <div class="tab-container">
                    <ul class="tabs">
                        <li class="tab-link current" data-tab="tab-1">홈</li>
                        <li class="tab-link" data-tab="tab-2">자료실</li>
                    </ul>
                    <div id="tab-1" class="tab-content current">
                        <div class="accordion">
                            <div class="accordion-item">
                                <button class="accordion-toggle">응시자격</button>
                                <div class="accordion-content">
                                    <h3>기사 응시자격</h3> <br>
                                    <table>
                                        <colgroup class="first-table">
                                            <col>
                                            <col>
                                            <col>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">구분</th>
                                                <th scope="col">응시자격</th>
                                                <th scope="col">제출서류</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowspan="3">학력응시</td>
                                                <td>4년제: 졸업 또는 4학년1학기 이상 재학/휴학/제적</td>
                                                <td>졸업/재학/휴학/수료/제적증명서 중 택1</td>
                                            </tr>
                                            <tr>
                                                <td>3년제: 졸업 후 1년 실무 경력</td>
                                                <td>졸업증명서+경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td>2년제: 졸업 후 2년 실무 경력</td>
                                                <td>졸업증명서+경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="3">경력 응시</td>
                                                <td>동일 직무 분야에서 4년 이상 실무경력</td>
                                                <td>경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td>기능사 취득후 3년 실무경력</td>
                                                <td>경력(재직)증명서+자격증 사본</td>
                                            </tr>
                                            <tr>
                                                <td>산업기사 취득 후 1년 실무경력</td>
                                                <td>경력(재직)증명서+자격증 사본</td>
                                            </tr>
                                            <tr>
                                                <td>기타 응시</td>
                                                <td>학점인정법률의거 106점 이상 취득</td>
                                                <td>한국교육개발원에서 발급한 학점인정증명서</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br><br>
                                    <h3>기술사 응시자격</h3> <br>
                                    <table>
                                        <colgroup class="first-table">
                                            <col>
                                            <col>
                                            <col>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">구분</th>
                                                <th scope="col">응시자격</th>
                                                <th scope="col">제출서류</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowspan="3">학력응시</td>
                                                <td>4년제: 관련학과 졸업 후 6년 경력</td>
                                                <td>졸업/재학/휴학/수료/제적증명서 중 택1</td>
                                            </tr>
                                            <tr>
                                                <td>3년제: 관련학과 졸업 후 7년 경력</td>
                                                <td>졸업증명서+경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td>2년제: 관련학과 졸업 후 8년 경력</td>
                                                <td>졸업증명서+경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="3">경력 응시</td>
                                                <td>동일 직무 분야에서 9년 이상 실무경력</td>
                                                <td>경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td>산업기사 수준 이수자 + 이수 후 8년 경력</td>
                                                <td>경력(재직)증명서+자격증 사본</td>
                                            </tr>
                                            <tr>
                                                <td>기사 수준 이수자 + 이수 후 6년 경력</td>
                                                <td>경력(재직)증명서+자격증 사본</td>
                                            </tr>
                                            <tr>
                                                <td>자격취득 <br>
                                                    (동일 및 유사 직무분야)</td>
                                                <td>기능사 취득 후 7년 경력 <br>
                                                    산업기사 취득 후 5년 경력 <br>
                                                    기사 취득 후 4년 경력 <br>
                                                    기술사 취득</td>
                                                <td>경력(재직)증명서+자격증 사본</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br><br>
                                    <h3>기능장 응시자격</h3> <br>
                                    <table>
                                        <colgroup class="first-table">
                                            <col>
                                            <col>
                                            <col>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">구분</th>
                                                <th scope="col">응시자격</th>
                                                <th scope="col">제출서류</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>경력 응시</td>
                                                <td>동일 직무 분야에서 9년 이상 실무경력</td>
                                                <td>경력(재직)증명서</td>
                                            </tr>
                                            <tr>
                                                <td>자격취득 <br>
                                                    (동일 및 유사 직무분야)</td>
                                                <td>기능사 취득 후 기능대학의 기능장과정 이수자 또는 이수예정자 <br>
                                                    기능사 취득 후 7년 경력 <br>
                                                    산업기사 취득 후 5년 경력 <br>
                                                    기능장 취득</td>
                                                <td>경력(재직)증명서+자격증 사본</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br><br>
                                    <h3>기능장 응시자격</h3> <br>
                                    <b>※ 응시자격 제한없음</b>
                                    <br><br>
                                    <div class="explan">
                                        <h4>** 응시자격사항 상세설명</h4> <br>

                                        <h6>1.학력응시</h6>
                                        <p>- 학력응시는 대한민국 모든 대학 모든학과가 포함되니 학년 조건만 잘 보시면 됩니다.</p>
                                        <p>- <span>휴학 및 복학 등으로 학기가 애매한 경우</span></p>

                                        <p>&nbsp;&nbsp; 각 대학 학사일정에 따라 학기 표시가 조금 다를 수 있습니다. 공단측에서 서류를 심사할때 보는건
                                            재학/휴학/수료/제적 등의 증명서에 (기사인
                                            경우) <span>'4학년1학기'란 단어만 명시되어 있으면 승인</span>해줍니다.</p>

                                        <p>-<span>방통대 등 학점을 모두 이수해야 학점이 인정되는 대학의 경우는 필기시험일 전일까지</span> 4학년 1학기 이수 표시가 되어
                                            있어야 합니다.</p>

                                        <p>- 큐넷과 협력된 대학기간은 필기원서접수기간에 인터넷으로 바로 제출할 수 있습니다.</p>

                                        <p>(매 회차 합격자발표 4일전까지 제출가능)</p> <br>

                                        <h6>2.경력응시</h6>
                                        <p>- 해당 회차 필기시험일까지 만으로 실무경력일수를 (1년, 2년 등) 만족해야 응시가능합니다.</p>
                                        <p>&nbsp;&nbsp; ex) A란 사람이 경력응시로 정보처리기사에 응시하려고 합니다.</p>
                                        <p>&nbsp;&nbsp;&nbsp; 2009년 5월10일에 있는 기사필기시험에 응시하려고 하면</p>
                                        <p>&nbsp;&nbsp;&nbsp; 이사람은 2005년 5월10일 부터 실무 경력이 있어야 합니다.</p>
                                        <p>-경력증명서에는 '재직기간, 소속, 직위, 구체적인 담당업무(3~4서술), 사업자의 도장날인' 5가지 요소가 받으시 있으셔야 합니다.
                                        </p>
                                        <p>- 경력 해당 조건: 실무경력이란 업무수행과정 중 컴퓨터프로그램(한글,파워포인트,엑셀 등)을 활용하면 실무경력으로 인정됩니다.
                                            (프로그램명을 정확하게 명시되어있어야 경력인정이 됩니다.)</p>
                                        <p>- 경력 사업장이 4대보험 미가입 사업장일 경우: 추가서류를 더 제출해야 합니다.</p>
                                        <p>- 군대경력도 일반사업체와 같이 경력을 인정해줍니다. 단, 군 복무시 특기코드가 있는데 그 코드와 정보처리기사, 정보처리산업기사 응시
                                            종목이 맞아야 실무경력으로 인정됩니다.</p> <br>

                                        <h6>3.기타응시</h6>

                                        <p>-학점인정법률에 의거하여 기사의 경우 106학점 이상 이수하게 되면 응시자격이 주어집니다.</p>
                                        <p>&nbsp;&nbsp;여기서 학접인정법률에 의거하려면 '학점인정제'통해 일정수준의 교육을 받고 학점을 이수해야합니다.</p>
                                        <p>* 단, 대학의 재학하는 경우는 시간제수업을 들어도 학점인정이 안됩니다.</p>
                                        <p>&nbsp;&nbsp;중퇴나 졸업후 학점은행제를 통해 학점을 이수하실 수 있습니다.</p>
                                        <p>&nbsp;&nbsp;(이때 중퇴 혹은 졸업 전 학점이 인정됩니다.)</p>
                                        <p>-기사나 산업기사에 응시하시려면 해당회 필기시험전일까지 '평생교육진흥원에서 발급한 증명서에 응시제한 학점이 이수완료처리 되어있어야 합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <button class="accordion-toggle">기사/산업기사 시험일정</button>
                                <div class="accordion-content">
                                    <h5>기사/산업기사 시험일정(2024년)</h5> <br>
                                    <table>
                                        <tr>
                                            <th>년도별/회별</th>
                                            <th>필기시험 원서접수<br>(휴일제외)</th>
                                            <th>필기시험</th>
                                            <th>필기시험 합격예정자 발표</th>
                                            <th>응시자격 서류제출/ <br>필기시험 합격자결정</th>
                                            <th>실기시험 <br>원서접수<br>(휴일제외)</th>
                                            <th>실기시험</th>
                                            <th>합격자발표</th>
                                        </tr>
                                        <tr>
                                            <td>2024년 제1회</td>
                                            <td>01.23 ~ 01.26 <br>
                                                ※빈자리접수 <br>
                                                02.09 ~ 02.10
                                            </td>
                                            <td>02.15 ~ 03.07 </td>
                                            <td>03.13(수)</td>
                                            <td>02.15 ~ 03.25</td>
                                            <td>03.26 ~ 03.29</td>
                                            <td>04.27 ~ 05.17</td>
                                            <td>05.29 , 06.18</td>
                                        </tr>
                                        <tr>
                                            <td>2024년 제2회</td>
                                            <td>04.16 ~ 04.19 <br>
                                                ※빈자리접수 <br>
                                                05.03 ~ 05.04
                                            </td>
                                            <td>05.09 ~ 05.28</td>
                                            <td>06.05(수)</td>
                                            <td>05.09 ~ 06.17</td>
                                            <td>06.25 ~ 06.28 <br>
                                                ※빈자리접수 <br>
                                                07.22 ~ 07.23</td>
                                            <td>07.28 ~ 08.14</td>
                                            <td>08.28, 09.10</td>
                                        </tr>
                                        <tr>
                                            <td>2024년 제3회</td>
                                            <td>06.18 ~ 06.21 <br>
                                                ※빈자리접수 <br>
                                                06.29 ~ 06.30</td>
                                            <td>07.05 ~ 07.27</td>
                                            <td>08.07(수)</td>
                                            <td>07.05 ~ 08.19</td>
                                            <td>09.10 ~ 09.13 <br>
                                                ※빈자리접수 <br>
                                                10.14</td>
                                            <td>10.19 ~ 11.08</td>
                                            <td>11.20, 12.11</td>
                                        </tr>
                                    </table>
                                    <br><br><br>

                                    <div class="test-color">
                                        <b> ※ 필기 시험은 CBT 방식으로 시행됩니다. <br>
                                            ※ 응시자격서류제출은 실기시험 원서접수전까지 제출해야 합니다.
                                            (실기시험 접수기간과 응시자격서류 제출기간이 다르므로 반드시 확인하시기 바랍니다.) <br>
                                            ※기술사, 기능장, 기사, 산업기사, 서비스(일부종목) 필기시험 합격예정자는 당회 응시자격서류제출기간 이내 원본의 응시자격서류를
                                            제출하여야 함. <br>
                                            ※실기(면접)시험 접수는 응시자격 서류제출 및 심사완료 후 가능. <br>
                                            ※필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00임. <br>
                                            ※회별마다 시행종목이 다르므로 반드시 아래 회별 시행종목을 확인하시기 바랍니다. <br>
                                            ※주말 및 공휴일, 공단창립기념일(3.18)에는 원서 접수 불가</b>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">기술사 시험일정</button>
                                <div class="accordion-content">
                                    <h5>기술사 시험일정(2024년)</h5> <br>
                                    <table>
                                        <tr>
                                            <th>회별</th>
                                            <th>필기시험 원서접수<br>(휴일제외)</th>
                                            <th>필기시험</th>
                                            <th>필기시험 합격예정자 발표</th>
                                            <th>응시자격 서류제출/ <br>필기시험 합격자결정</th>
                                            <th>면접시험 <br>원서접수<br>(휴일제외)</th>
                                            <th>면접시험</th>
                                            <th>합격자발표</th>
                                        </tr>
                                        <tr>
                                            <td>2024년 제132회</td>
                                            <td>01.02 ~ 01.05 <br>
                                                ※빈자리접수 <br>
                                                01.21 ~ 01.22 <br>
                                                (휴일제외)</td>
                                            <td>01.27 </td>
                                            <td>02.28</td>
                                            <td>01.29 ~ 03.11</td>
                                            <td>03.05 ~ 03.08 <br>
                                                빈자리접수 <br>
                                                03.25 ~ 03.26 <br>
                                                (휴일제외)
                                            </td>
                                            <td>04.01
                                                - 04.13</td>
                                            <td>04.30</td>
                                        </tr>
                                        <tr>
                                            <td>2024년 제133회</td>
                                            <td>04.16 ~ 04.19 <br>
                                                ※빈자리접수 <br>
                                                05.12 ~ 05.13 <br>
                                                (휴일제외) </td>
                                            <td>05.18</td>
                                            <td>06.19</td>
                                            <td>05.13 ~ 06.28</td>
                                            <td>05.28 ~ 05.31 <br>
                                                06.25 ~ 06.28 <br>
                                                ※빈자리접수 <br>
                                                07.14 ~ 07.15 <br> (휴일제외)</td>
                                            <td>07.20 ~ 08.02</td>
                                            <td>08.21</td>
                                        </tr>
                                        <tr>
                                            <td>2024년 제134회</td>
                                            <td>07.02 ~ 07.05 <br>
                                                ※빈자리접수 <br>
                                                07.21 ~ 07.22 <br>
                                                (휴일제외)</td>
                                            <td>07.27</td>
                                            <td>09.04</td>
                                            <td>07.08 ~ 09.13</td>
                                            <td>08.12 ~ 08.16 <br>
                                                09.10 ~ 09.13 <br>
                                                ※빈자리접수 <br>
                                                10.20 ~ 10.21 <br> (휴일제외)</td>
                                            <td>10.26 ~ 11.08</td>
                                            <td>12.04</td>
                                        </tr>
                                    </table>
                                    <br><br><br>

                                    <div class="test-color">
                                        <b> ※ 필기 시험은 CBT 방식으로 시행됩니다. <br>
                                            ※ 응시자격서류제출은 실기시험 원서접수전까지 제출해야 합니다.
                                            (실기시험 접수기간과 응시자격서류 제출기간이 다르므로 반드시 확인하시기 바랍니다.) <br>
                                            ※기술사, 기능장, 기사, 산업기사, 서비스(일부종목) 필기시험 합격예정자는 당회 응시자격서류제출기간 이내 원본의 응시자격서류를
                                            제출하여야 함. <br>
                                            ※실기(면접)시험 접수는 응시자격 서류제출 및 심사완료 후 가능. <br>
                                            ※필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00임. <br>
                                            ※회별마다 시행종목이 다르므로 반드시 아래 회별 시행종목을 확인하시기 바랍니다. <br>
                                            ※주말 및 공휴일, 공단창립기념일(3.18)에는 원서 접수 불가</b>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">기능장 시험일정</button>
                                <div class="accordion-content">
                                    <h5>기능장 시험일정(2024년)</h5> <br>
                                    <table>
                                        <tr>
                                            <th>년도별/회별</th>
                                            <th>필기시험 원서접수<br>(휴일제외)</th>
                                            <th>필기시험</th>
                                            <th>필기시험 합격예정자 발표</th>
                                            <th>응시자격 서류제출/ <br>필기시험 합격자결정</th>
                                            <th>실기시험 <br>원서접수<br>(휴일제외)</th>
                                            <th>실기시험</th>
                                            <th>합격자발표</th>
                                        </tr>
                                        <tr>
                                            <td>2024년/제75회</td>
                                            <td>01.02 ~ 01.05 <br>
                                                ※빈자리접수 <br>
                                                01.15 ~ 01.16
                                            </td>
                                            <td>01.21</td>
                                            <td>01.31</td>
                                            <td>01.22 ~ 02.13</td>
                                            <td>02.05 ~ 02.08, <br>
                                                ※빈자리접수 <br>
                                                03.10 ~ 03.11
                                            </td>
                                            <td>03.16 ~ 04.04</td>
                                            <td>04.09 ~ 04.17</td>
                                        </tr>
                                        <tr>
                                            <td>2024년/제76회</td>
                                            <td>05.28 ~ 05.31, <br>
                                                ※빈자리접수 <br>
                                                06.10 ~ 06.11</td>
                                            <td>06.16</td>
                                            <td>06.26</td>
                                            <td>06.17 ~ 07.05</td>
                                            <td>07.16 ~ 07.19, <br>
                                                ※빈자리접수 <br>
                                                08.11 ~ 08.12</td>
                                            <td>08.17 ~ 09.03</td>
                                            <td>09.11 ~ 09.25</td>
                                        </tr>
                                    </table>
                                    <br><br><br>

                                    <div class="test-color">
                                        <b> ※ 필기 시험은 CBT 방식으로 시행됩니다. <br>
                                            ※ 응시자격서류제출은 실기시험 원서접수전까지 제출해야 합니다.
                                            (실기시험 접수기간과 응시자격서류 제출기간이 다르므로 반드시 확인하시기 바랍니다.) <br>
                                            ※기술사, 기능장, 기사, 산업기사, 서비스(일부종목) 필기시험 합격예정자는 당회 응시자격서류제출기간 이내 원본의 응시자격서류를
                                            제출하여야 함. <br>
                                            ※실기(면접)시험 접수는 응시자격 서류제출 및 심사완료 후 가능. <br>
                                            ※필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00임. <br>
                                            ※회별마다 시행종목이 다르므로 반드시 아래 회별 시행종목을 확인하시기 바랍니다. <br>
                                            ※주말 및 공휴일, 공단창립기념일(3.18)에는 원서 접수 불가</b>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">기능사(정기) 시험일정</button>
                                <div class="accordion-content">
                                    <h5>기능사(정기) 시험일정(2024년)</h5> <br>
                                    <table>
                                        <tr>
                                            <th>년도별/회별</th>
                                            <th>필기시험 원서접수<br>(휴일제외)</th>
                                            <th>필기시험</th>
                                            <th>필기시험 합격예정자 발표</th>
                                            <th>실기시험 <br>원서접수<br>(휴일제외)</th>
                                            <th>실기시험</th>
                                            <th>합격자발표</th>
                                        </tr>
                                        <tr>
                                            <td>2024년/제1회</td>
                                            <td>01.02 ~ 01.05 <br>
                                                ※빈자리접수 <br>
                                                01.15 ~ 01.16
                                            </td>
                                            <td>01.21 ~ 01.24</td>
                                            <td>01.31</td>
                                            <td>02.05 ~ 02.08,<br>
                                                ※빈자리접수 <br>
                                                03.10 ~ 03.11
                                            </td>
                                            <td>03.16 ~ 04.04</td>
                                            <td>04.09 , 04.17</td>
                                        </tr>
                                        <tr>
                                            <td>2024년/제2회</td>
                                            <td>03.12 ~ 03.15, <br>
                                                ※빈자리접수 <br>
                                                03.25 ~ 03.26</td>
                                            <td>03.31 ~ 04.04</td>
                                            <td>04.17</td>
                                            <td>04.23 ~ 04.26, <br>
                                                ※빈자리접수 <br>
                                                05.26 ~ 05.27</td>
                                            <td>06.01 ~ 06.16</td>
                                            <td>06.26 , 07.03</td>
                                        </tr>
                                        <tr>
                                            <td>2024년/없음</td>
                                            <td colspan="3">산업수요 맞춤형 고등학교 및 특성화 고등학교 <br>
                                                필기시험 면제자 검정 <br>
                                                ※ 일반인 필기시험 면제자 응시 불가</td>
                                            <td>05.21 ~ 05.24</td>
                                            <td>06.16 ~ 06.25</td>
                                            <td>07.03 , 07.10</td>
                                        </tr>
                                        <tr>
                                            <td>2024년/제3회</td>
                                            <td>05.28 ~ 05.31, <br>
                                                ※빈자리접수 <br>
                                                06.10 ~ 06.11</td>
                                            <td>06.16 ~ 06.20</td>
                                            <td>06.26</td>
                                            <td>07.16 ~ 07.19, <br>
                                                ※빈자리접수 <br>
                                                08.11 ~ 08.12</td>
                                            <td>08.17 ~ 09.03</td>
                                            <td>09.11 , 09.25</td>
                                        </tr>
                                        <tr>
                                            <td>2024년/제4회</td>
                                            <td>08.20 ~ 08.23, <br>
                                                ※빈자리접수 <br>
                                                09.02 ~ 09.03</td>
                                            <td>09.08 ~ 09.12</td>
                                            <td>09.25</td>
                                            <td>09.30 ~ 10.04, <br>
                                                ※빈자리접수 <br>
                                                11.03 ~ 11.04</td>
                                            <td>11.09 ~ 11.26</td>
                                            <td>12.04 , 12.11</td>
                                        </tr>
                                    </table>
                                    <br><br><br>

                                    <div class="test-color">
                                        <b> ※ 필기 시험은 CBT 방식으로 시행됩니다. <br>
                                            ※ 응시자격서류제출은 실기시험 원서접수전까지 제출해야 합니다.
                                            (실기시험 접수기간과 응시자격서류 제출기간이 다르므로 반드시 확인하시기 바랍니다.) <br>
                                            ※기술사, 기능장, 기사, 산업기사, 서비스(일부종목) 필기시험 합격예정자는 당회 응시자격서류제출기간 이내 원본의 응시자격서류를
                                            제출하여야 함. <br>
                                            ※실기(면접)시험 접수는 응시자격 서류제출 및 심사완료 후 가능. <br>
                                            ※필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00임. <br>
                                            ※회별마다 시행종목이 다르므로 반드시 아래 회별 시행종목을 확인하시기 바랍니다. <br>
                                            ※주말 및 공휴일, 공단창립기념일(3.18)에는 원서 접수 불가</b>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">시험장 탐색</button>
                                <div class="accordion-content">
                                    <h5>장소검색</h5> <br>
                                    <div class="region">
                                        <select id="areaSelect" class="examArea">
                                            <option value="">지역 선택</option>
                                            <option value="강원">강원</option>
                                            <option value="강원동부">강원동부</option>
                                            <option value="경기남부">경기남부</option>
                                            <option value="경기동부">경기동부</option>
                                            <option value="경기북부">경기북부</option>
                                            <option value="경기서부">경기서부</option>
                                            <option value="경남">경남</option>
                                            <option value="경남서부">경남서부</option>
                                            <option value="경북">경북</option>
                                            <option value="경북동부">경북동부</option>
                                            <option value="경북서부">경북서부</option>
                                            <option value="경인">경인</option>
                                            <option value="광주">광주</option>
                                            <option value="남부">남부</option>
                                            <option value="대구">대구</option>
                                            <option value="대전">대전</option>
                                            <option value="부산">부산</option>
                                            <option value="부산남부">부산남부</option>
                                            <option value="서부">서부</option>
                                            <option value="서울">서울</option>
                                            <option value="서울강남">서울강남</option>
                                            <option value="세종">세종</option>
                                            <option value="울산">울산</option>
                                            <option value="인천">인천</option>
                                            <option value="전남">전남</option>
                                            <option value="전남서부">전남서부</option>
                                            <option value="제주">제주</option>
                                            <option value="충남">충남</option>
                                            <option value="충북">충북</option>
                                            <option value="충북북부">충북북부</option>
                                        </select>
                                        <ul id="areaList"></ul>
                                        <!-- API로 불러온 데이터가 여기에 추가될 예정 -->
                                        </ul>
                                    </div>
                                    <br><br>
                                    <div class="map_wrap">
                                        <button class="map-btn" onclick="relayout()">지도 호출하기</button> <br>
                                        <div id="map"></div>
                                    </div>
                                    <br><br>
                                    <div class="shortTermWheather">
                                        <pre><b>해당 지역 날씨 정보 (현재 날짜 기준 최대 10일)</b></pre> <br>
                                        <b>지역을 선택하세요</b> <br>
                                        <select id="selectArea1" class="examArea">
                                            <option value="73,134">강원도</option>
                                            <option value="60, 120">경기도</option>
                                            <option value="91, 77">경상남도</option>
                                            <option value="87, 106">경상북도</option>
                                            <option value="58, 74">광주</option>
                                            <option value="89, 90">대구</option>
                                            <option value="67, 100">대전</option>
                                            <option value="98, 76">부산</option>
                                            <option value="60, 127">서울</option>
                                            <option value="66, 103">세종</option>
                                            <option value="102, 84">울산</option>
                                            <option value="55, 124">인천</option>
                                            <option value="51, 124">전라남도</option>
                                            <option value="63, 89">전라북도</option>
                                            <option value="52, 67">제주</option>
                                            <option value="68, 100">충청남도</option>
                                            <option value="69, 107">충청북도</option>
                                        </select>


                                        <table id="todayTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="25">오늘</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- 시간, 날씨, 습도, 기온을 넣을 각 tr이 여기에 들어갑니다 -->
                                            </tbody>
                                        </table>
                                        <br><br>

                                        <table id="tomorrowTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="25">내일</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- 내일의 날씨 정보 -->
                                            </tbody>
                                        </table>
                                        <br><br>


                                        <table id="dayAfterTomorrowTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="25">모레</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- 모레의 날씨 정보 -->
                                            </tbody>
                                        </table>
                                    </div>
                                    <br><br>
                                    <br><br>
                                    <pre><b>글피~최대 10일</b></pre> <br>
                                    <div class="midTermWheather">
                                        <select id="selectArea2" class="examArea">
                                            <option value="11B00000,11B10101">서울</option>
                                            <option value="11B00000,11B20201">인천</option>
                                            <option value="11B00000,11B20601">수원</option>
                                            <option value="11B00000,11B20305">파주</option>
                                            <option value="11D10000,11D10301">춘천</option>
                                            <option value="11D10000,11D10401">원주</option>
                                            <option value="11D20000,11D20501">강릉</option>
                                            <option value="11C20000,11C20401">대전</option>
                                            <option value="11C20000,11C20101">서산</option>
                                            <option value="11C20000,11C20404">세종</option>
                                            <option value="11C10000,11C10301">청주</option>
                                            <option value="11F20000,11F20501">광주</option>
                                            <option value="11F20000,21F20801">목포</option>
                                            <option value="11F20000,11F20401">여수</option>
                                            <option value="11F10000,11F10201">전주</option>
                                            <option value="11F10000,21F10501">군산</option>
                                            <option value="11H10000,11H10701">대구</option>
                                            <option value="11H10000,11H10501">안동</option>
                                            <option value="11H10000,11H10201">포항</option>
                                            <option value="11H20000,11H20201">부산</option>
                                            <option value="11H20000,11H20101">울산</option>
                                            <option value="11H20000,11H20301">창원</option>
                                            <option value="11G00000,11G00201">제주</option>
                                            <option value="11G00000,11G00401">서귀포</option>
                                        </select>

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>날짜</th>
                                                    <th>3일 후</th>
                                                    <th>4일 후</th>
                                                    <th>5일 후</th>
                                                    <th>6일 후</th>
                                                    <th>7일 후</th>
                                                    <th>8일 후</th>
                                                    <th>9일 후</th>
                                                    <th>10일 후</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>날씨 <br>
                                                        오전/오후</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>기온</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>강수확률</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <br><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-2" class="tab-content">
                        <div class="board-lib">
                        </div>
                    </div>
                </div>
            </div>
            <script src="${pageContext.request.contextPath}/resources/static/js/infopage/infoPage.js"></script>
            <script src="${pageContext.request.contextPath}/resources/static/js/infopage/map.js"></script>
            <script src="${pageContext.request.contextPath}/resources/static/js/infopage/certiInfo.js"></script>
            <script src="${pageContext.request.contextPath}/resources/static/js/infopage/area.js"></script>
            <script src="${pageContext.request.contextPath}/resources/static/js/infopage/midWeather.js"></script>
            <script src="${pageContext.request.contextPath}/resources/static/js/infopage/shortWeather.js"></script>
            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>