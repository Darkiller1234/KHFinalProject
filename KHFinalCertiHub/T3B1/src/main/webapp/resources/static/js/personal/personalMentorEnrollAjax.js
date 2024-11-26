function ajaxGetMemberStatus(data, callback){
    $.ajax({
        url: "getStatus",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("유저정보 불러오기 ajax 오류");
        }
    })
}

function ajaxGetHaveLicense(data, callback){
    $.ajax({
        url: "getHaveLicense",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("보유 자격증 가져오기 ajax 오류");
        }
    })
}

function ajaxSetMentorEnroll(data, callback){
    $.ajax({
        url: "setMentorEnroll",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("멘토 신청 ajax 오류");
        }
    })
}