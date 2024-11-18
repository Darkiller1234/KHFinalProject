<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
    <script src="${pageContext.request.contextPath}/resources/static/js/common/common.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communityDetailAjax.js"></script>
    <script src="${pageContext.request.contextPath}/resources/static/js/community/communityDetail.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/static/css/community/communityDetail.css">
    <title>Document</title>
  </head>

  <body>
    <%@ include file="../common/header.jsp" %>
      
        
      <div class="wrapper">
        <nav class="navbar bg-body-tertiary page-title" id="certiSelect">
          <div class="container-fluid">
            <a class="navbar-brand" onclick="certiChange(${certiNo})">${certiList[certiNo-1]}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"><img src="<%=contextPath%>/resources/static/img/button/triangle_down.png" alt=""></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <c:forEach var="d" items="${certiList}" varStatus="status">
                  <c:if test="${certiList[certiNo-1] ne d}">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" onclick="certiChange(${status.count})">${d}</a>
                    </li>
                  </c:if>
                </c:forEach>
              </ul>
            </div>
          </div>
        </nav>

        <div id="middle-area">
          <div id="listArea">
            
            <div id="detail-area">
              <div>
                <div>
                  <p id="tabNameP"></p>
                  <p id="boardTitleP"></p>
                </div>
                <div>
                  <c:if test="${loginMember.memberNo eq Bo.memberNo}">
                    <button id="delete-btn"><img src="<%=contextPath%>/resources/static/img/button/delete.png" alt="">삭제</button>
                    <button id="edit-btn"><img src="<%=contextPath%>/resources/static/img/button/pencil_icon.png" alt="">수정</button>
                  </c:if>
                </div>
                
              </div>
              <div>
                <p id="nickNameP"></p>
                <p id="likehatereplyviewdateCountP"></p>
              </div>
              <div>
                <p id="boardContentP"></p>
              </div>
              <div>
                <div>
                    <button id="like-btn"><img src="<%=contextPath%>/resources/static/img/button/good.png" alt="">좋아요</button>
                    <button id="hate-btn"><img src="<%=contextPath%>/resources/static/img/button/bad.png" alt="">싫어요</button>
                </div>
                <button>신고</button>
              </div>
              <div id="replys">
                <div class="reply">
                  <img src="<%=contextPath%>/resources/static/img/profile/profileTest.webp" alt="">
                  <div>
                    <p class="font-size-subtitle">윤대한</p>
                    <p class="font-size-content">왜 안알려줌? 빨리 알려주셈</p>
                    <div class="font-size-footer">
                      <button>답글</button>
                      |
                      <button>신고</button>
                      |
                      <button>삭제</button>
                      |
                      <button>수정</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination">
                <span class="page-num">1</span>
                <span class="page-num active">2</span>
                <span class="page-arrow">></span>
              </div>
                <script>
                  console.log('${loginMember.memberNo}')
                </script>
              <form action="">
                <div class="reply-write">
                  <textarea id="reply-write-area" placeholder="댓은 거울"></textarea>
                  <button id="reply-write-btn"><img src="<%=contextPath%>/resources/static/img/button/Vector.png" alt=""><span class="font-size-subtitle">작성</span></button>
                </div>
              </form>
              
            </div>
            <div class="scroll-container">
              
              <div class="scroll-content btn-group" role="group" aria-label="Basic radio toggle button group">
                <!-- 여기에 스크롤 가능한 콘텐츠를 추가하세요 -->
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" <c:if test="${tabNo eq 0}">checked</c:if>>
                  <label class="btn btn-outline-primary" for="btnradio1" onclick="tabNoChange(${certiNo}, 0)">전체</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" <c:if test="${tabNo eq 1}">checked</c:if>>
                  <label class="btn btn-outline-primary" for="btnradio2" onclick="tabNoChange(${certiNo}, 1)">공지</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"<c:if test="${tabNo eq 2}">checked</c:if>>
              <label class="btn btn-outline-primary" for="btnradio3" onclick="tabNoChange(${certiNo}, 2)" >자유</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" <c:if test="${tabNo eq 3}">checked</c:if>>
              <label class="btn btn-outline-primary" for="btnradio4" onclick="tabNoChange(${certiNo}, 3)" >질문(자유)</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" <c:if test="${tabNo eq 4}">checked</c:if>>
              <label class="btn btn-outline-primary" for="btnradio5" onclick="tabNoChange(${certiNo}, 4)" >질문(코딩)</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" <c:if test="${tabNo eq 5}">checked</c:if>>
              <label class="btn btn-outline-primary" for="btnradio6" onclick="tabNoChange(${certiNo}, 5)" >후기</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off" <c:if test="${tabNo eq 6}">checked</c:if>>
              <label class="btn btn-outline-primary" for="btnradio7" onclick="tabNoChange(${certiNo}, 6)" >문제집/강의 추천</label>
                </div>
                <div class="item2">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off" <c:if test="${tabNo eq 7}">checked</c:if>>
              <label class="btn btn-outline-primary" for="btnradio8" onclick="tabNoChange(${certiNo}, 7)" >문제집 거래</label>
                </div>
                
              </div>
              
            </div>
            <div class="listArea-div1">
              <div class="listArea-div1-info">
                <div>
                  <div class="listArea-div1-tab">
                    탭
                  </div>
                  <div class="listArea-div1-title">
                    제목
                  </div>
                  <div class="listArea-div1-replyCount">
                    [댓글숫자]
                  </div>
                </div>
                <div>
                  <div class="listArea-div1-writter">
                    작성자
                  </div>
                  <div class="listArea-div1-date">
                    작성일
                  </div>
                  <div class="listArea-div1-viewCount">
                    조회수
                  </div>
                  <div class="listArea-div1-dogchu">
                    추천수
                  </div>
                </div>
              </div>
              <c:forEach var="b" items="${notiList}">
                <div <c:if test="${b.tabNo == 1}">class="listArea-noti"</c:if> onclick="DirectAttack('<%=contextPath%>/community/detail?certiNo=${certiNo}&cno=${b.boardNo}')">
                  <div >
                    <div class="listArea-div1-tab">
                      ${b.tabName}
                    </div>
                    <div class="listArea-div1-title">
                      ${b.boardTitle}
                    </div>
                    <div class="listArea-div1-replyCount">
                      [${b.replyCount}]
                    </div>
                  </div>
                  <div>
                    <div class="listArea-div1-writter">
                      ${b.memberNickname}
                    </div>
                    <div class="listArea-div1-date">
                      ${b.boardDate}
                    </div>
                    <div class="listArea-div1-viewCount">
                      ${b.viewCount}
                    </div>
                    <div class="listArea-div1-dogchu">
                      ${b.likeCount - b.hateCount}
                    </div>
                  </div>
                </div>
              </c:forEach>
              <c:forEach var="b" items="${list}">
                <div <c:if test="${b.tabNo == 1}">class="listArea-noti"</c:if> onclick="DirectAttack('<%=contextPath%>/community/detail?certiNo=${certiNo}&cno=${b.boardNo}')">
                  <div >
                    <div class="listArea-div1-tab">
                      ${b.tabName}
                    </div>
                    <div class="listArea-div1-title">
                      ${b.boardTitle}
                    </div>
                    <div class="listArea-div1-replyCount">
                      [${b.replyCount}]
                    </div>
                  </div>
                  <div>
                    <div class="listArea-div1-writter">
                      ${b.memberNickname}
                    </div>
                    <div class="listArea-div1-date">
                      ${b.boardDate}
                    </div>
                    <div class="listArea-div1-viewCount">
                      ${b.viewCount}
                    </div>
                    <div class="listArea-div1-dogchu">
                      ${b.likeCount - b.hateCount}
                    </div>
                  </div>
                </div>
              </c:forEach>
            </div>
            <div class="listArea-div2">
              <c:forEach var="b" items="${notiList}">
                <div <c:if test="${b.tabNo == 1}">class="listArea-noti"</c:if> onclick="DirectAttack('<%=contextPath%>/community/detail?certiNo=${certiNo}&cno=${b.boardNo}')">
                  <div >
                    <div class="listArea-div2-tab">
                      ${b.tabName}
                    </div>
                    <div class="listArea-div2-title">
                      ${b.boardTitle}
                    </div>
                    <div class="listArea-div2-replyCount">
                      [${b.replyCount}]
                    </div>
                  </div>
                  <div>
                    <div class="listArea-div2-writter">
                      ${b.memberNickname}
                    </div>
                    <div class="listArea-div2-rightStuff">
                      <div class="listArea-div2-date">
                        ${b.boardDate}
                      </div>
                      |
                      <div class="listArea-div2-viewCount">
                        조회수 ${b.viewCount}
                      </div>
                      |
                      <div class="listArea-div2-dogchu">
                        추천수 ${b.likeCount - b.hateCount}
                      </div>
                    </div>
                  </div>
                </div>
              </c:forEach>
              <c:forEach var="b" items="${list}">
                <div <c:if test="${b.tabNo == 1}">class="listArea-noti"</c:if> onclick="DirectAttack('<%=contextPath%>/community/detail?certiNo=${certiNo}&cno=${b.boardNo}')">
                  <div >
                    <div class="listArea-div2-tab">
                      ${b.tabName}
                    </div>
                    <div class="listArea-div2-title">
                      ${b.boardTitle}
                    </div>
                    <div class="listArea-div2-replyCount">
                      [${b.replyCount}]
                    </div>
                  </div>
                  <div>
                    <div class="listArea-div2-writter">
                      ${b.memberNickname}
                    </div>
                    <div class="listArea-div2-rightStuff">
                      <div class="listArea-div2-date">
                        ${b.boardDate}
                      </div>
                      |
                      <div class="listArea-div2-viewCount">
                        조회수 ${b.viewCount}
                      </div>
                      |
                      <div class="listArea-div2-dogchu">
                        추천수 ${b.likeCount - b.hateCount}
                      </div>
                    </div>
                  </div>
                </div>
              </c:forEach>
            </div>

            
            
            <div class="pagination">
              <c:if test="${pi.currentPage != 1}">
                <span class="page-arrow" onclick="pageChange(${pi.currentPage - 1}, ${certiNo}, ${tabNo})">
                  <img src="<%=contextPath%>/resources/static/img/button/arrow_left.png" alt="">
                </span>
              </c:if>
              <c:if test="${pi.currentPage == pi.maxPage && pi.maxPage >= 5}">
                <span class="page-num" onclick="pageChange(${pi.currentPage - 4}, ${certiNo}, ${tabNo})">${pi.currentPage - 4}</span>
              </c:if>
              <c:if test="${pi.currentPage >= pi.maxPage - 1 && pi.maxPage >= 4}">
                <span class="page-num" onclick="pageChange(${pi.currentPage - 3}, ${certiNo}, ${tabNo})">${pi.currentPage - 3}</span>
              </c:if>
              <c:if test="${pi.currentPage - 2 >= 1}">
                <span class="page-num" onclick="pageChange(${pi.currentPage - 2}, ${certiNo}, ${tabNo})">${pi.currentPage - 2}</span>
              </c:if>
              <c:if test="${pi.currentPage - 1 >= 1}">
                <span class="page-num" onclick="pageChange(${pi.currentPage - 1}, ${certiNo}, ${tabNo})">${pi.currentPage - 1}</span>
              </c:if>
              <span class="page-num active"  onclick="pageChange(${pi.currentPage}, ${certiNo}, ${tabNo})">${pi.currentPage}</span>
              <c:if test="${pi.currentPage + 1 <= pi.maxPage}">
                <span class="page-num" onclick="pageChange(${pi.currentPage + 1}, ${certiNo}, ${tabNo})">${pi.currentPage + 1}</span>
              </c:if>
              <c:if test="${pi.currentPage + 2 <= pi.maxPage}">
                <span class="page-num" onclick="pageChange(${pi.currentPage + 2}, ${certiNo}, ${tabNo})">${pi.currentPage + 2}</span>
              </c:if>
              <c:if test="${pi.currentPage <= 2 && pi.maxPage >= 4}">
                <span class="page-num" onclick="pageChange(${pi.currentPage + 3}, ${certiNo}, ${tabNo})">${pi.currentPage + 3}</span>
              </c:if>
              <c:if test="${pi.currentPage == 1 && pi.maxPage >= 5}">
                <span class="page-num" onclick="pageChange(${pi.currentPage + 4}, ${certiNo}, ${tabNo})">${pi.currentPage + 4}</span>
              </c:if>
              <c:if test="${pi.currentPage < pi.maxPage}">
                <span class="page-arrow" onclick="pageChange(${pi.currentPage + 1}, ${certiNo}, ${tabNo})">
                  <img src="<%=contextPath%>/resources/static/img/button/arrow_right.png"
                      alt="">
                </span>
              </c:if>
              
          </div>
          <div id="search-area">
            <div id="selectbox1" class="custom-select">
              <!-- <select>
              <option value="1" selected>최신순</option>
              <option value="2">추천순</option>
            </select> -->
            </div>
            <div>
              <div id="selectbox2" class="custom-select">
              </div>
              <input type="text" id="search-input-text" value="${filterText}" onkeypress="keypress(event, ${certiNo}, ${tabNo})">
                <button class="rounded-circle" onclick="searchExcute(${certiNo}, ${tabNo})" >
                    <img src="<%=contextPath%>/resources/static/img/button/search_icon.png">
                </button> 
            </div>
            <button onclick="location.href='<%=contextPath%>/community/write?certiNo=${certiNo}'">
              <img src="<%=contextPath%>/resources/static/img/button/write.png" alt="">
              글쓰기
            </button>
          </div>
        </div>
        <div id="popular-list-div" >
          <div class="sticky-element">
            <div id="popular-list-area-all">
              <h2 class="font-size-subtitle">전체 인기글</h2>
              <div class="popular-list-info">
                <span>제목</span><span>댓글수</span><span>추천수</span>
              </div>
            </div>
            <br>
            <div id="popular-list-area-this">
              <h2 class="font-size-subtitle">이 게시판의 인기글</h2>
              <div class="popular-list-info">
                <span>제목</span><span>댓글수</span><span>추천수</span>
              </div>
              <div>
                <span>이거 왜 안됨?모녀듀어펴ㅠ어뎌륭더</span><span>[99999]</span><span>-999999</span>
              </div>
            </div>
          </div>
          
        </div>

        </div>

      </div>



  
      <!-- 모달창 -->
      <div class="modal" id="myModal">
          <div class="modal-dialog">
          <div class="modal-content">
      
              <!-- Modal Header -->
              <div class="modal-header">
              <h4 class="modal-title">                
                  <img 
                  src="<%=contextPath%>/resources/static/img/logo/logo_big.png"
                  ">
              </h4>
              </div>
      
              <!-- Modal body -->
              <div class="modal-body" id="modal-body">
              모달 내용 작성
              </div>
      
              <!-- Modal footer -->
              <div class="modal-footer">
              <button type="button" data-bs-dismiss="modal">닫기</button>
              </div>
      
          </div>
          </div>
      </div>

      <%@ include file="../common/footer.jsp"%>
  </body>

  </html>