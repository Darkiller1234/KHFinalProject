$(document).ready(function(){
    function TestArea(areaList){
        var brchCd = getBrchCd(areaList);

        $.ajax({
            url : 'http://openapi.q-net.or.kr/api/service/rest/InquiryExamAreaSVC',
            data:{
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D',
                numOfRows: '10',
                pageNo: '1',
                brchCd: getBrchCd
            },
            dataType: 'json', // JSON 형식으로 응답받기
            success: function (data) {
                console.log("API 호출 성공");
                console.log(data);  // 응답 데이터 확인
                parseAndDisplayData(data);  // 데이터를 파싱하고 출력하는 함수 호출
            },
            error: function (xhr, status, error) {
                console.error("API 호출 실패:", error);
            }
        });
        TestArea(areaList);
    }

    // 지역에 따라 지역코드를 설정하는 함수
    function getBrchCd(areaList) {
        switch (areaList) {
            case '서울본부': return '본부'; // 
            case '서울': return '서울'; // 
            case '서울서부': return '서부'; // 
            case '서울남부': return '남부'; // 
            case '대구': return '대구'; // 
            case '인천': return '인천'; // 
            case '광주': return '광주'; // 
            case '충남': return '충남'; // 
            case '울산': return '울산'; // 
            case '경기': return '경기'; // 
            case '강원': return '강원'; // 
            case '충북': return '충북'; // 
            case '대전': return '대전'; // 
            case '전북': return '전북'; // 
            case '전남': return '전남'; // 
            case '경북': return '경북'; // 
            case '경남': return '경남'; // 
            case '제주': return '제주'; // 
            case '강원동부': return '강원동부'; // 
            case '전남서부': return '전남서부'; // 
            case '부산남부': return '부산남부'; // 
            case '경북동부': return '경북동부'; // 
            case '경기북부': return '경기북부'; // 
            case '경기동부': return '경기동부'; // 

            default: return ''; // 기본값
        }
    }
})