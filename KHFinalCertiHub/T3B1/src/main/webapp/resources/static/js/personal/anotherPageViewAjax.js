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