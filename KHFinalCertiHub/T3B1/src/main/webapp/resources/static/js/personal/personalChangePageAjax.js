function ajaxGetInitData(data, callback){
    $.ajax({
        url: "ChangePage/getInitData",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("데이터 가져오기 ajax 오류");
        }
    })
}

function ajaxSetUpdateData(data, callback){
    $.ajax({
        url: "ChangePage/setUpdateData",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("데이터 올리기 ajax 오류");
        }
    })
}

function ajaxSubmitChange(data, callback){
    $.ajax({
        url: "ChangePage/submitChange",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("비밀번호 변경 ajax 오류");
        }
    })
}

function ajaxSubmitDelete(data, callback){
    $.ajax({
        url: "ChangePage/submitDelete",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("회원탈퇴 ajax 오류");
        }
    })
}