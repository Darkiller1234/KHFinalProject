// 최대3일
document.getElementById('selectArea1').addEventListener('change', function () {
    const regId = this.value; // 지역코드 받기
    const values = regId.split(',');  // 쉼표로 분리하여 배열로 저장
    const X = values[0];  // 첫 번째 값
    const Y = values[1];  // 두 번째 값
    const serviceKey = "AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D";  // 인증키
    const BD = getRecentDate(); //오늘 날짜 base_date
    const BT = getRecentTime(); // 최근 발표 시각 계산 base_time
    const shortWeatherUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=${BD}&base_time=${BT}&nx=${X}&ny=${Y}`;


});
    // 최근 발표 시각 계산
    function getRecentTime() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();

        // 시간을 4자리로 포맷(예: 02:00 -> 0200)
        const formattedTime = String(hour).padStart(2,'0') + String(minute).padStart(2,'0');

        //base_time 기준정하기
        const timePoints = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"];
        
        // 시간대에 맞는 기점을 반환
        for(let i = 0; i<timePoints.length; i++){
            if(formattedTime>=timePoints[i]){
                return timePoints[i];
            }
        }
        //0200 이전일경우 2300을 반환
        return "2300";
    }

    function getRecentDate() {
        const now = new Date();
        const date = now.toISOString().split('T')[0].replace(/-/g, '');  // 현재 날짜 (YYYYMMDD 형식)
        return date;
    }

    // 페이지 로드 시 기본값으로 API 호출
    window.onload = function () {
        document.getElementById("selectArea1").value = "73,134";  // 기본 지역 설정 (강원도)
        document.getElementById("selectArea1").dispatchEvent(new Event("change"));  // 기본값으로 데이터 로드
    };

    // // 테이블 업데이트 함수
    // function updateWeatherTable(landData, tempData) {
    //     if (!landData || !tempData) {
    //         console.error("Invalid data received:", landData, tempData);
    //         return;  // 데이터를 제대로 받지 못했을 경우 처리
    //     }

    //     const tbody = document.querySelector(".midTermWheather tbody");
    //     const weatherRow = tbody.rows[0].cells;  // 첫 번째 행: 날씨
    //     const tempRow = tbody.rows[1].cells;     // 두 번째 행: 기온
    //     const rainRow = tbody.rows[2].cells;     // 세 번째 행: 강수확률

    //     const itemsLand = landData.response?.body?.items?.item[0] || {};
    //     const itemsTemp = tempData.response?.body?.items?.item[0] || {};


    //     const weatherIcons = {
    //         "맑음": "/T3B1/resources/static/img/weather/sun.png",
    //         "비": "/T3B1/resources/static/img/weather/rain.png",
    //         "흐리고 비": "/T3B1/resources/static/img/weather/rain.png",
    //         "소나기": "/T3B1/resources/static/img/weather/rain.png",
    //         "구름많고 비": "/T3B1/resources/static/img/weather/rain.png",
    //         "눈": "/T3B1/resources/static/img/weather/snow.png",
    //         "흐리고 눈": "/T3B1/resources/static/img/weather/snow.png",
    //         "구름많고 눈": "/T3B1/resources/static/img/weather/snow.png",
    //         "구름많음": "/T3B1/resources/static/img/weather/sunAndCloud.png",
    //         "흐림": "/T3B1/resources/static/img/weather/cloud.png",
    //         "-": "/T3B1/resources/static/img/weather/unknown.png"
    //     };

    // }
       