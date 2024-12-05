function initPersonalView(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    getMemberInfo(urlParam.get('pno'), contextPath, urlParam); 
    
    
}


function getMemberInfo(pno, contextPath, urlParam){
    ajaxGetMemberInfo({pno: pno}, function(result){
        console.log(result)
        if(result === null){
            document.querySelector('#middle-view-profileInfo').innerHTML = "<h1>해당 유저의 정보가 없습니다.</h1>"
            document.querySelector('.bottom-view').innerHTML = ""
        }else {
            setMemberInfo(result, pno, contextPath);
            getSetLikeStatus(urlParam.get('pno'), contextPath);
            getSetLicense(urlParam.get('pno'), contextPath);
        }
    })
}


function setMemberInfo(result, pno, contextPath){
    console.log(result);
    document.querySelector('#member-name').textContent = result.memberNickname + "님의 페이지";
    document.querySelector('#simple-view-name').textContent = result.memberNickname;
    document.querySelector('#simple-profile-view > img').src = contextPath + result.memberImg;
    if(result.mentorStatus === 'Y') {
        document.querySelector('#history-view p').textContent = '경력';
        if(result.career === "" || result.career === undefined){
            document.querySelector('#history-list').textContent = "경력이 없습니다.";
        }else {
            document.querySelector('#history-list').textContent = result.career;
        }
        
        if(result.memberIntro === "" || result.memberIntro === undefined){
            document.querySelector('#simple-view-intro').textContent = "소개가 없습니다."
        }else {
            document.querySelector('#simple-view-intro').textContent = result.memberIntro;
        }

        if(result.mentorIntro === "" || result.mentorIntro === undefined){
            document.querySelector('#intro-detail p').textContent = "멘토소개가 없습니다.";
        }else {
            document.querySelector('#intro-detail p').textContent = result.mentorIntro;
        }
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
        document.querySelector('#mentor-ask-status').remove()
        document.querySelector('#mentor-ask-sub').remove()
        if(result.memberIntro === null || result.memberIntro === '' || result.memberIntro === undefined){
            document.querySelector('#intro-detail').innerText = "이분은 너무 쿨해서 자기소개도 패스하셨습니다.";
        } else{
            document.querySelector('#intro-detail').innerText = result.memberIntro;
        }
        
    }
}


function getSetLikeStatus(pno, contextPath){
    getLikeStatus(pno, contextPath)
}


function getLikeStatus(pno, contextPath){
    ajaxGetLikeStatus({pno: pno}, function(result){
        console.log(result)
        document.querySelector('.like-heart > p').textContent = result.likeCount;
        if(result.likeStatus === 1){
            document.querySelector('#mentor-like').src = contextPath + '/resources/static/img/profile/full_heart.png'
            $('[data-bs-target="#apply-modal2"]').on("click", function () {
                $('[data-bs-target="#apply-modal2"]').off("click");
                ajaxLikebtnClick({pno: pno}, function(result){
                    if(result > 0){
                        document.querySelector('#modal-text2').textContent = '좋아요 취소 성공'
                        getSetLikeStatus(pno, contextPath)
                    } else {
                        document.querySelector('#modal-text2').textContent = '좋아요 취소 실패...'
                        getSetLikeStatus(pno, contextPath)
                    }
                })
            })
        } else if(result.likeStatus === 0){
            document.querySelector('#mentor-like').src = contextPath + '/resources/static/img/profile/heart.png'
            $('[data-bs-target="#apply-modal2"]').on("click", function () {
                $('[data-bs-target="#apply-modal2"]').off("click");
                ajaxLikebtnClick({pno: pno}, function(result){
                    if(result > 0){
                        document.querySelector('#modal-text2').textContent = '좋아요 성공'
                        getSetLikeStatus(pno, contextPath)
                    } else {
                        document.querySelector('#modal-text2').textContent = '좋아요 실패...'
                        getSetLikeStatus(pno, contextPath)
                    }
                })
            })
        } else if(result.likeStatus === -1){
            document.querySelector('#modal-text2').textContent = '로그인 후 이용해주세요.'
        }
    })
}


function getSetLicense(pno, contextPath){
    ajaxGetHaveLicense({pno: pno}, function(result) {
        result.forEach(li => {
            // 대상 요소를 선택
            const parentElement = document.querySelector('#own-certi-view .look-license');

            // 새로운 요소를 생성
            const newDiv = document.createElement('div');
            newDiv.classList.add('tag', 'bgcolor3', 'font-size-content');
            newDiv.textContent = li.licenseName;

            // 부모 요소에 추가
            parentElement.appendChild(newDiv);
        });
    })
    ajaxGetLookLicense({pno: pno}, function(result) {
        result.forEach(li => {
            // 대상 요소를 선택
            const parentElement = document.querySelector('#favor-certi .look-license');

            // 새로운 요소를 생성
            const newDiv = document.createElement('div');
            newDiv.classList.add('tag', 'bgcolor3', 'font-size-content');
            newDiv.textContent = li.licenseName;

            // 부모 요소에 추가
            parentElement.appendChild(newDiv);
        })

    })
}