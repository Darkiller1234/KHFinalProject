function ajaxGetMemberInfo(data, callback){
    $.ajax({
        url: "view/getMemberInfo",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("다른사람 정보 가져오기 ajax 오류");
        }

    })
}

function ajaxGetMentorSubInfo(data, callback){
    $.ajax({
        url: "view/getMentorSubInfo",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("맨토신청여부 가져오기 ajax 오류")
        }
    })
}

function ajaxInsertMentorSub(data, callback){
    $.ajax({
        url: "view/insertMentorSub",
        data: data, 
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("멘토신청 삽입 ajax 오류")
        }
    })
}

function ajaxGetLikeStatus(data, callback){
    $.ajax({
        url: "view/getLikeStatus",
        data: data, 
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("좋아요 여부 및 갯수 ajax 오류")
        }
    })
}

function ajaxLikebtnClick(data, callback){
    $.ajax({
        url: "view/likebtnClick",
        data: data, 
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("좋아요 버튼 클릭 ajax 오류")
        }
    })
}

function ajaxGetHaveLicense(data, callback){
    $.ajax({
        url: "view/haveLicense",
        data: data, 
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("보유 자격증 ajax 오류")
        }
    })
}

function ajaxGetLookLicense(data, callback){
    $.ajax({
        url: "view/lookLicense",
        data: data, 
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("관심 자격증 ajax 오류")
        }
    })
}