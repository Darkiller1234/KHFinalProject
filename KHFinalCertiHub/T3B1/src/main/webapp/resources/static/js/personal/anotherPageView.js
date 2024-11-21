function initPersonalView(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    getMemberInfo(urlParam.get('pno'), contextPath);
}


function getMemberInfo(pno, contextPath){
    ajaxGetMemberInfo({pno: pno}, function(result){
        setMemberInfo(result, pno, contextPath);
    })
}


function setMemberInfo(result, pno, contextPath){
    document.querySelector('#member-name').textContent = result.memberNickname + "님의 페이지";
    document.querySelector('#simple-view-name').textContent = result.memberNickname;
    document.querySelector('#simple-profile-view > img').src = contextPath + result.memberImg;
    if(result.mentorStatus === 'Y') {
        document.querySelector('#history-view p').textContent = '경력';
        document.querySelector('#history-list').textContent = result.career;
        document.querySelector('#simple-view-intro').textContent = result.memberIntro;
        document.querySelector('#intro-detail p').textContent = result.mentorIntro;
        if(result.mentorValid === 'N') {
            document.querySelector('.bottom-view > div > p').textContent = '질문불가'
            document.querySelector('.bottom-view > div > img').src = contextPath + '/resources/static/img/button/stop_icon.png'
            document.querySelector('#mentor-ask-status').classList.add('bgcolor4')
            document.querySelector('#mentor-ask-sub').classList.add('bgcolor5')
            document.querySelector('#mentor-ask-sub > button > p').innerText = "신청불가"
            document.querySelector('#mentor-ask-sub > button > img').src = contextPath + '/resources/static/img/personalPage/Phoneoff.png'
            document.querySelector('#mentor-ask-sub > button').disabled = true;
            document.querySelector('#modal-text').textContent = '신청 불가능합니다.'
        } else {
            ajaxGetMentorSubInfo({pno: pno}, function (result){
                console.log(result)
                document.querySelector('#mentor-ask-status').classList.add('bgcolor3')
                document.querySelector('#mentor-ask-sub').classList.add('bgcolor1')
                if(result == -1) {
                    document.querySelector('#modal-text').textContent = '로그인 후 신청가능'
                }
                else if(result != 0) {
                    document.querySelector('#mentor-ask-sub').classList.remove('bgcolor1')
                    document.querySelector('#mentor-ask-sub').classList.add('bgcolor2')
                    document.querySelector('#mentor-ask-sub > button').disabled = true;
                    document.querySelector('#mentor-ask-sub > button > p').innerText = "신청완료"
                    document.querySelector('#modal-text').textContent = '이미 신청하였습니다.'
                } else {
                    $("#mentor-ask-sub > button").on("click", function () {
                        $("#mentor-ask-sub > button").off("click");
                        ajaxInsertMentorSub({pno: pno}, function(result){
                            document.querySelector('#mentor-ask-sub').classList.remove('bgcolor1')
                            document.querySelector('#mentor-ask-sub').classList.add('bgcolor2')
                            document.querySelector('#mentor-ask-sub > button').disabled = true;
                            document.querySelector('#mentor-ask-sub > button > p').innerText = "신청완료"
                        })
                    })
                }
            })
            
        }
    } else {
        document.querySelector('#history-view').remove()
        if(result.memberIntro === null || result.memberIntro === '' || result.memberIntro === undefined){
            document.querySelector('#intro-detail p').textContent = "이분은 너무 쿨해서 자기소개도 패스하셨습니다.";
        } else{
            document.querySelector('#intro-detail p').textContent = result.memberIntro;
        }
        
    }
}