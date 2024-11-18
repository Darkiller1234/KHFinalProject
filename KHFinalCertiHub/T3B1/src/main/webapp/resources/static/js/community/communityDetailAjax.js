function getWriterProfileImg(data, callback){
    $.ajax({
        url: "detail/writerProfileImgJson",
        data: data,
        success: function(res){
            callback(res)
        },
        error: function(res){
            res = "error";
        }
    })
}

function getReplyList(data, callback) {
    $.ajax({
        url: "detail/replyListJson",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("댓글 가져오는 ajax 오류");
        }
    })
}

function getLikeStatus(data, callback) {
    $.ajax({
        url: "detail/likeStatusJson",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("좋아요 여부 가져오는 ajax 오류");
        }
    })
}

function clickLikeButton(int, data, callback){
    if(int === 1){
        $.ajax({
            url: "detail/likeBtnClickJson",
            data: data,
            success: function(res){
                callback(res);
            },
            error: function(res){
                console.log("좋아요 버튼 클릭 ajax 오류");
            }
        })
    }
    else if(int === 2){
        $.ajax({
            url: "detail/hateBtnClickJson",
            data: data,
            success: function(res){
                callback(res);
            },
            error: function(res){
                console.log("싫어요 버튼 클릭 ajax 오류");
            }
        })
    }
    else{
        console.log("int가 아니잖아!!");
    }
}

function boardLoading(data, callback){
    $.ajax({
        url: "detail/boardLoadingJson",
        data: data,
        success: callback,
        error: function(res){
            console.log("글 불러오기 ajax 오류");
        }
    })
}

function clickDeleteBtn(data, callback){
    $.ajax({
        url: "detail/clickDeleteBtn",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("글 삭제버튼 ajax 오류");
        }
    })
}

function clickEditBtn(data, callback){
    $.ajax({
        url: "detail/clickEditBtn",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("글 수정버튼 ajax 오류");
        }
    })
}