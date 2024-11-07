<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>InfoPage</title>
        <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
        <script src="${pageContext.request.contextPath}/resources/static/js/infopage/selectBox.js"></script>
    </head>
    <body>
        <%@ include file="../common/header.jsp" %>
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/common/default.css">
            <link rel="stylesheet" href="<%=contextPath%>/resources/static/css/infopage/infoPage.css">
            <div class="wrapper">
                <div class="container">
                    <div class="certi">
                        <h1>정보처리기사</h1>
                    </div>
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
                                    <div class="explan">
                                        <h4>** 응시자격사항 상세설명</h4> <br>

                                        <h6>1.학력응시</h6>
                                        <p>- 학력응시는 대한민국 모든 대학 모든학과가 포함되니 학년 조건만 잘 보시면 됩니다.</p>
                                        <p>- <span>휴학 및 복학 등으로 학기가 애매한 경우</span></p>

                                        <p>&nbsp;&nbsp; 각 대학 학사일정에 따라 학기 표시가 조금 다를 수 있습니다. 공단측에서 서류를 심사할때 보는건 재학/휴학/수료/제적 등의 증명서에 (기사인
                                            경우) <span>'4학년1학기'란 단어만 명시되어 있으면 승인</span>해줍니다.</p>

                                        <p>-<span>방통대 등 학점을 모두 이수해야 학점이 인정되는 대학의 경우는 필기시험일 전일까지</span> 4학년 1학기 이수 표시가 되어 있어야 합니다.</p>

                                        <p>- 큐넷과 협력된 대학기간은 필기원서접수기간에 인터넷으로 바로 제출할 수 있습니다.</p>

                                        <p>(매 회차 합격자발표 4일전까지 제출가능)</p> <br>

                                        <h6>2.경력응시</h6>
                                        <p>- 해당 회차 필기시험일까지 만으로 실무경력일수를 (1년, 2년 등) 만족해야 응시가능합니다.</p>
                                        <p>&nbsp;&nbsp; ex) A란 사람이 경력응시로 정보처리기사에 응시하려고 합니다.</p>
                                        <p>&nbsp;&nbsp;&nbsp; 2009년 5월10일에 있는 기사필기시험에 응시하려고 하면</p>
                                        <p>&nbsp;&nbsp;&nbsp; 이사람은 2005년 5월10일 부터 실무 경력이 있어야 합니다.</p>
                                        <p>-경력증명서에는 '재직기간, 소속, 직위, 구체적인 담당업무(3~4서술), 사업자의 도장날인' 5가지 요소가 받으시 있으셔야 합니다.</p>
                                        <p>- 경력 해당 조건: 실무경력이란 업무수행과정 중 컴퓨터프로그램(한글,파워포인트,엑셀 등)을  활용하면 실무경력으로 인정됩니다. (프로그램명을 정확하게 명시되어있어야 경력인정이 됩니다.)</p>
                                        <p>- 경력 사업장이 4대보험 미가입 사업장일 경우: 추가서류를 더 제출해야 합니다.</p>
                                        <p>- 군대경력도 일반사업체와 같이 경력을 인정해줍니다. 단, 군 복무시 특기코드가 있는데 그 코드와 정보처리기사, 정보처리산업기사 응시 종목이 맞아야 실무경력으로 인정됩니다.</p> <br>
                                        
                                        <h6>3.기타응시</h6>

                                        <p>-학점인정법률에 의거하여 기사의 경우 106학점 이상 이수하게 되면 응시자격이 주어집니다.</p>
                                        <p>&nbsp;&nbsp;여기서 학접인정법률에 의거하려면 '학점인정제'통해 일정수준의 교육을 받고 학점을 이수해야합니다.</p>
                                        <p>* 단, 대학의 재학하는 경우는 시간제수업을 들어도 학점인정이 안됩니다.</p>
                                        <p>&nbsp;&nbsp;중퇴나 졸업후 학점은행제를 통해 학점을 이수하실 수 있습니다.</p>
                                        <p>&nbsp;&nbsp;(이때 중퇴 혹은 졸업 전 학점이 인정됩니다.)</p>
                                        <p>-기사나 산업기사에 응시하시려면 해당회 필기시험전일까지 '평생교육진흥원에서 발급한 증명서에 응시제한 학점이 이수완료처리 되어있어야 합니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">시험내용</button>
                                <div class="accordion-content">
                                    <h6>개요</h6> <br>
                                    <b>정보처리기사 Engineer Information Processing</b> <br>
                                    <p>컴퓨터를 효과적으로 활용하기 위해서 하드웨어뿐만 아니라 정교한 소프트웨어가 필요함.</p>
                                    <p>이에 따라 우수한 프로그램을 개발하여 업무의 효율성을 높이고, 궁극적으로 국가발전에 이바지하기 위해서 컴퓨터에 관한 전문적인 지식과 기술을 갖춘 사람을 양성 할 목적으로 제정됨.</p> <br> <br>

                                    <h6>1. 관련학과</h6>
                                    &nbsp;&nbsp;<p>대학 및 전문대학의 전자, 컴퓨터, 전산 계열학과 (컴퓨터공학과, 전산 공학, 전자계산공학과, 전산학과, 소프트웨어공학과등) 및 동국대, 숭실대, 광운대, 한남대 부설 전자계산원.</p>
                                    &nbsp;&nbsp;<p class="test-color">응시자격사항에서 '관련학과'는 '모든 대학, 모든 학과'가 해당됩니다.</p>
                                    &nbsp;&nbsp;<h6>2. 시험 과목 및 합격 기준</h6> <br><br>
                                    <table>
                                        <colgroup class="second-table">
                                            <col>  
                                            <col>  
                                            <col>
                                            <col>
                                            <col>
                                          </colgroup>
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>과목</th>
                                            <th>검정 방법</th>
                                            <th>합격 기준</th>
                                            <th>응시료</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            <tr>
                                                <td rowspan="5">필기</td>
                                                <td>1. 소프트웨어 설계</td>
                                                <td rowspan="5">객관식 4지 택일형 과목당 20문항 (과목당 30분)</td>
                                                <td rowspan="5">100점을 만점으로 하여 과목당 40점 이상, 전과목 평균 60점 이상</td>
                                                <td rowspan="5">19,400원</td>
                                            </tr>
                                            <tr>
                                                <td>2. 소프트웨어 개발</td>
                                            </tr>
                                            <tr>
                                                <td>3. 데이터베이스 구축</td>
                                            </tr>
                                            <tr>
                                                <td>4. 프로그래밍언어 활용</td>
                                            </tr>
                                            <tr>
                                                <td>5. 정보시스템 구축관리</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="12">실기</td>
                                                <td>1. 요구사항 확인</td>
                                                <td rowspan="12">필답형(2시간 30분)</td>
                                                <td rowspan="12">100점을 만점으로 하여 60점 이상.</td>
                                                <td rowspan="12">22,600원</td>
                                            </tr>
                                            <tr>
                                                <td>2. 데이터 입출력 구현</td>
                                            </tr>
                                            <tr>
                                                <td>3. 통합 구현</td>
                                            </tr>
                                            <tr>
                                                <td>4. 서버프로그램 구현</td>
                                            </tr>
                                            <tr>
                                                <td>5. 인터페이스 구현</td>
                                            </tr>
                                            <tr>
                                                <td>6. 화면 설계</td>
                                            </tr>
                                            <tr>
                                                <td>7. 애플리케이션 테스트 관리</td>
                                            </tr>
                                            <tr>
                                                <td>8. SQL 응용</td>
                                            </tr>
                                            <tr>
                                                <td>9. 소프트웨어 개발 보안 구축</td>
                                            </tr>
                                            <tr>
                                                <td>10. 프로그래밍 언어 활용</td>
                                            </tr>
                                            <tr>
                                                <td>11. 응용 SW 기초 기술 활용</td>
                                            </tr>
                                            <tr>
                                                <td>12. 제품소프트웨어 패키징</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                    <br><br>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">시험일정</button>
                                <div class="accordion-content">
                                    <h5>정보처리기사(2024년)</h5>
                                    <table>
                                        <tr>
                                            <th>회별</th>
                                            <th>필기시험 접수</th>
                                            <th>필기시험</th>
                                            <th>합격자발표</th>
                                            <th>실기시험 접수</th>
                                            <th>실기시험</th>
                                            <th>합격자발표</th>
                                        </tr>
                                        <tr>
                                            <td>제1회</td>
                                            <td>01.23 ~ 01.26</td>
                                            <td>02.15 ~ 02.17 <br>
                                                02.19 ~ 02.23 <br>
                                                03.03 ~ 03.07	</td>
                                            <td>03.13(수)</td>
                                            <td>03.26 ~ 03.29</td>
                                            <td>04.27(토)</td>
                                            <td>06.18(화)</td>
                                        </tr>
                                        <tr>
                                            <td>제2회</td>
                                            <td>04.16 ~ 04.19</td>
                                            <td>05.09 ~ 05.10 <br>
                                                05.12 ~ 05.14, 05.16 <br>
                                                05.23 ~ 05.24 <br>
                                                05.26 ~ 05.28</td>
                                            <td>06.05(수)</td>
                                            <td>06.25 ~ 06.28</td>
                                            <td>07.28(일)</td>
                                            <td>09.10(화)</td>
                                        </tr>
                                        <tr>
                                            <td>제3회</td>
                                            <td>06.18 ~ 06.21</td>
                                            <td>07.05, <br>
                                                07.07 ~ 07.12 <br>
                                                07.14 ~ 07.16 <br>
                                                07.24 ~ 07.27</td>
                                            <td>08.07(수)</td>
                                            <td>09.10 ~ 09.13</td>
                                            <td>10.20(일)</td>
                                            <td>12.11(수)</td>
                                        </tr>
                                    </table>
                                    <br><br><br>
                                    <div class="test-color">
                                        <b>※ 4회 시험은 없습니다. <br>
                                            ※ 정보처리기사 필기 시험 CBT 방식으로 시행됩니다. <br>
                                            ※ 응시자격서류제출은 실기시험 원서접수전까지 제출해야 합니다. <br>
                                            (실기시험 접수기간과 응시자격서류 제출기간이 다르므로 반드시 확인하시기 바랍니다.)</b>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-toggle">시험장 탐색</button>
                                <div class="accordion-content">
                                    <h5>장소검색</h5>
                                    <div class="region">
                                        <div class="si-select"></div>
                                        <div class="gun-select"></div>
                                        <div class="dong-select"></div>
                                        <div class="test-select"></div>
                                        <button class="search-btn">검색</button>
                                    </div>
                                    <div class="map">
                                        <img src="<%=contextPath%>/resources/static/img/temporary/map.png" alt="">
                                        <br><br>
                                    </div>
                                    <div class="weather">
                                        <pre><b>해당 지역 날씨 정보 (현재 날짜 기준 최대 10일)</b></pre> <br>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>지역</th>
                                                    <th colspan="2">28일(월)</th>
                                                    <th colspan="2">29일(화)</th>
                                                    <th colspan="2">30일(수)</th>
                                                    <th colspan="2">31일(목)</th>
                                                    <th colspan="2">01일(금)</th>
                                                    <th rowspan="2">02일(토)</th>
                                                    <th rowspan="2">03일(일)</th>
                                                    <th rowspan="2">04일(월)</th>
                                                    <th rowspan="2">05일(화)</th>
                                                    <th rowspan="2">06일(수)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowspan="2">
                                                        서울 <br>
                                                        인천 <br>
                                                        경기도</td>
                                                    <td>오전</td>
                                                    <td>오후</td>
                                                    <td>오전</td>
                                                    <td>오후</td>
                                                    <td>오전</td>
                                                    <td>오후</td>
                                                    <td>오전</td>
                                                    <td>오후</td>
                                                    <td>오전</td>
                                                    <td>오후</td>
                                                    <td rowspan="2">맑음 <br>10%</td>
                                                    <td rowspan="2">맑음 <br>10%</td>
                                                    <td rowspan="2">맑음 <br>10%</td>
                                                    <td rowspan="2">맑음 <br>10%</td>
                                                    <td rowspan="2">맑음 <br>10%</td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>구름많음 <br>20% </td>
                                                    <td>구름많음 <br>20% </td>
                                                    <td>구름많음 <br>20% </td>
                                                    <td>맑음 <br>10% </td>
                                                    <td>맑음 <br>10%</td>
                                                    <td>맑음 <br>10%</td>
                                                    <td>맑음 <br>10%</td>
                                                    <td>구름많음 <br>20% </td>
                                                    <td>맑음 <br>10% </td>
                                                    <td>맑음 <br>10%</td>

                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-2" class="tab-content">
                        <div class="selectBox">
                            <div class="custom-select"></div>
                        </div>
                        <div class="board-content"></div>
                    </div>
                </div>
            </div>

            <script src="<%=contextPath%>/resources/static/js/infopage/infoPage.js"></script>


            <%@ include file="../common/footer.jsp" %>
    </body>

    </html>