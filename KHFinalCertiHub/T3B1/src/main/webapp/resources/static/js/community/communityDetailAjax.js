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