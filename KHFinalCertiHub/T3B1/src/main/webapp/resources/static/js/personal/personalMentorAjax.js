function ajaxGetHaveLicense(data, callback){
    $.ajax({
        url: "mentor/getHaveLicense",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("보유 자격증 가져오기 ajax 오류");
        }
    })
}

function ajaxGetMemberStatus(data, callback){
    $.ajax({
        url: "mentor/getStatus",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("유저정보 불러오기 ajax 오류");
        }
    })
}

function ajaxGetMentorLikeCount(data, callback){
    $.ajax({
        url: "mentor/getLikeCount",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("좋아요 갯수 불러오기 ajax 오류");
        }
    })
}

function ajaxSetMentor(data, callback){
    $.ajax({
        url: "mentor/setMentor",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("멘토 정보 저장 ajax 오류");
        }
    })
}