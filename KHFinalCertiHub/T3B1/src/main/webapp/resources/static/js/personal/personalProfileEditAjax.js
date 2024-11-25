function saveProfile(formData, callback) {
    $.ajax({
        url: 'proflie/save', // 서버 엔드포인트
        type: 'POST',
        processData: false, // FormData 전송 시 필수
        contentType: false, // FormData 전송 시 필수
        data: formData,
        success: function (response) {
            callback(response); // 서버 응답을 콜백으로 전달
        },
        error: function (xhr, status, error) {
            console.error('전송 중 오류 발생:', error);
            console.error('상태 코드:', xhr.status); // HTTP 상태 코드 출력
            console.error('응답 내용:', xhr.responseText); // 서버에서 반환한 내용 출력
            alert('전송 실패: ' + xhr.status + ' - ' + xhr.responseText);
        }
    });
}

function ajaxProfileLookLicense(data, callback){
    $.ajax({
        url: "profile/lookLicense",
        data: data,
        success: function(res){
            callback(res);
        },
        error: function(res){
            console.log("관심 자격증 ajax 오류");
        }
    })
}