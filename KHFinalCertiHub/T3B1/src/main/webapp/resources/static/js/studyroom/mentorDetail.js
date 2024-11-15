function initMentorDetail(contextPath){
    initLikeButton(contextPath)
}

function initLikeButton(contextPath){
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    const mentorNo = urlParam.get('no')

    const likeTag = document.querySelector('#likeTag')

    // 쓰로틀링용 변수
    let timer = 0;

    // 초기값 설정
    let likeInfo = {
        mentorNo : mentorNo,
        likeTag : likeTag,
        contextPath : contextPath
    }

    const onLikeMentor = (res) => {
        likeTag.innerHTML = ""
        let likeTagImg = document.createElement("img")

        // res.type = 좋아요를 이미 눌렀는지 여부
        if(res.type == 'N'){ // 누른적이 없다면 => 누른 모양으로 변경
            likeTag.className = "tag bgcolor4"
            likeTagImg.src = contextPath + "/resources/static/img/profile/full_heart.png"
        } else { // 이미 눌렀었다면 => 누르지 않은 모양으로 변경
            likeTag.className = "tag bgcolor3"
            likeTagImg.src = contextPath + "/resources/static/img/profile/heart.png"
        }
        
        likeTag.appendChild(likeTagImg)
        likeTag.innerHTML += res.likeCount
    }

    let likeMentor = ajaxLikeMentor(likeInfo, onLikeMentor)

    likeTag.onclick = () => {
        if(timer){ // 아직 수행되지 않았다면 return
            return;
        }

        likeMentor() // ajax 수행후 이벤트 제거
        likeMentor = null;

        timer = setTimeout(()=>{ // 1초뒤 이벤트 다시 부여
            likeMentor = ajaxLikeMentor(likeInfo, onLikeMentor)
            timer = 0
        },1000)
    }
}

function ajaxLikeMentor(likeInfo, callback){
    return () => {
        $.ajax({
            url:'likeMentor',
            data:{
                mentorNo : likeInfo.mentorNo
            },
            success: callback,
            error: () => {
                console.log('멘토 좋아요 실패')
            }
        })
    }
}