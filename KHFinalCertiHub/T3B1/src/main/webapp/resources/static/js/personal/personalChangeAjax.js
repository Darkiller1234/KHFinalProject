function ajaxCheckPwd(data, callback){
    $.ajax({
        url: "Change/checkPwd",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("비밀번호 확인 ajax 오류");
        }
    })
}