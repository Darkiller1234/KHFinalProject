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