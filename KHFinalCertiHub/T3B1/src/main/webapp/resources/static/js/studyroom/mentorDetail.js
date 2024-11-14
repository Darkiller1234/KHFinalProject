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

    // 초기값 설정
    let likeInfo = {
        mentorNo : mentorNo,
        likeTag : likeTag,
        contextPath : contextPath
    }

    const onLikeMentor = (res) => {
        if(res > 0){
            likeTag.innerHTML = ""
            likeTag.className = "tag bgcolor4"

            let likeTagImg = document.createElement("img")
            likeTagImg.src = contextPath + "/resources/static/img/profile/full_heart.png"
            
            likeTag.appendChild(likeTagImg)
            likeTag.innerHTML += res
        }
    }

    likeTag.onclick = ajaxLikeMentor(likeInfo, onLikeMentor)
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