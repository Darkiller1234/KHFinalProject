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