//글쓴이 프로필이미지 불러오기 (처음에 추가를 못해서 귀찮아서 따로 불러옴)
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

//좋아요 여부 가져오기
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

//좋아요 또는 싫어요 누르기
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

//글 불러오기
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

//글 삭제
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

//글 수정
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

//댓글 리스트 불러오기
function replyList(data, callback){
    $.ajax({
        url:"detail/replyList",
        data: data,
        success: callback,
        error: function(res){
            console.log("댓글 불러오기 ajax 오류");
        }
    })
}

//댓글 페이징 정보 불러오기
function replyPaging(data, callback){
    $.ajax({
        url:"detail/replyPaging",
        data: data,
        success: callback,
        error: function(res){
            console.log("페이징 정보 불러오기 ajax 오류");
        }
    })  
}

//로그인 정보 가져오기
function getLoginInfo(data, callback){
    $.ajax({
        url:"detail/getLoginInfo",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("로그인 정보 가져오기 ajax 오류");
        }
    })
}

//댓글 삭제
function deleteReply(data, callback){
    $.ajax({
        url: "detail/deleteReply",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("댓글 삭제 ajax 오류");
        }
    })
}

//댓글 수정
function editReply(data, callback){
    $.ajax({
        url: "detail/editReply",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("댓글 수정 ajax 오류");
        }
    })
}

//전체 게시판에서 인기글
function poppularAll(data, callback){
    $.ajax({
        url: "detail/poppularAll",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("전체개시판 인기글 ajax 오류");
        }
    })
}

//현재 게시판에서 인기글
function poppularThis(data, callback){
    $.ajax({
        url: "detail/poppularThis",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("현재개시판 인기글 ajax 오류");
        }
    })
}