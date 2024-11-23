document.getElementById('selectArea2').addEventListener('change', function () {
    const regId = this.value; // 지역코드 받기
    const values = regId.split(',');  // 쉼표로 분리하여 배열로 저장
    const regId1 = values[0];  // 첫 번째 값
    const regId2 = values[1];  // 두 번째 값
    const serviceKey = "AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D";  // 인증키
    const tmFc = getRecentForecastTime();  // 최근 발표 시각 계산

    const midLandUrl = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${serviceKey}&regId=${regId1}&tmFc=${tmFc}&dataType=JSON&numOfRows=100&pageNo=1`;
    const midTempUrl = `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${serviceKey}&regId=${regId2}&tmFc=${tmFc}&dataType=JSON&numOfRows=100&pageNo=1`;

    // 두 API 호출 및 데이터 결합
    Promise.all([
        fetch(midLandUrl).then(response => response.json()),  // 날씨 정보
        fetch(midTempUrl).then(response => response.json())   // 기온 정보
    ])
        .then(([landData, tempData]) => {
            updateWeatherTable(landData, tempData);  // 테이블 업데이트
        })
        .catch(error => {
            console.error("API 호출 오류:", error);
        });
});

// 최근 발표 시각 계산
function getRecentForecastTime() {
    const now = new Date();
    const hour = now.getHours();
    const date = now.toISOString().split('T')[0].replace(/-/g, '');  // 현재 날짜 (YYYYMMDD 형식)
    return hour < 18 ? `${date}0600` : `${date}1800`;  // 06:00 또는 18:00 기준
}

// 페이지 로드 시 기본값으로 API 호출
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("selectArea2").value = "11B00000,11B10101";  // 기본 지역 설정 (서울)
    document.getElementById("selectArea2").dispatchEvent(new Event("change"));  // 기본값으로 데이터 로드
});


// 테이블 업데이트 함수
function updateWeatherTable(landData, tempData) {
    if (!landData || !tempData) {
        console.error("Invalid data received:", landData, tempData);
        return;  // 데이터를 제대로 받지 못했을 경우 처리
    }

    const tbody = document.querySelector(".midTermWheather tbody");
    const weatherRow = tbody.rows[0].cells;  // 첫 번째 행: 날씨
    const tempRow = tbody.rows[1].cells;     // 두 번째 행: 기온
    const rainRow = tbody.rows[2].cells;     // 세 번째 행: 강수확률

    const itemsLand = landData.response?.body?.items?.item[0] || {};
    const itemsTemp = tempData.response?.body?.items?.item[0] || {};


    const weatherIcons = {
        "맑음":"/T3B1/resources/static/img/weather/sun.png",
        "비":"/T3B1/resources/static/img/weather/rain.png",
        "흐리고 비":"/T3B1/resources/static/img/weather/rain.png",
        "소나기":"/T3B1/resources/static/img/weather/rain.png",
        "구름많고 비":"/T3B1/resources/static/img/weather/rain.png",
        "눈":"/T3B1/resources/static/img/weather/snow.png",
        "흐리고 눈":"/T3B1/resources/static/img/weather/snow.png",
        "흐리고 비/눈":"/T3B1/resources/static/img/weather/snow.png",
        "구름많고 눈":"/T3B1/resources/static/img/weather/snow.png",
        "구름많고 비/눈":"/T3B1/resources/static/img/weather/snow.png",
        "구름많음":"/T3B1/resources/static/img/weather/sunAndCloud.png",
        "흐림": "/T3B1/resources/static/img/weather/cloud.png",
        "-": "/T3B1/resources/static/img/weather/unknown.png"
    };

    console.log("itemsLand:", itemsLand);  // 날씨 데이터 확인
    console.log("itemsTemp:", itemsTemp);  // 기온 데이터 확인

    for (let day = 3; day <= 10; day++) {
        let weatherMorning, weatherAfternoon, rainMorning, rainAfternoon;

        // 날씨 데이터
        if (day <= 7) {
            weatherMorning = itemsLand[`wf${day}Am`] || "-";
            weatherAfternoon = itemsLand[`wf${day}Pm`] || "-";
            rainMorning = itemsLand[`rnSt${day}Am`] || "-";  // 오전 강수확률
            rainAfternoon = itemsLand[`rnSt${day}Pm`] || "-";  // 오후 강수확률
        } else {
            weatherMorning = itemsLand[`wf${day}`] || "-";
            weatherAfternoon = "-";  // 오후 데이터 없음
            rainMorning = itemsLand[`rnSt${day}`] || "-";
            rainAfternoon = "-";  // 오후 데이터 없음
        }

        // 기온 데이터
        const tempMin = itemsTemp[`taMin${day}`] || "-";
        const tempMax = itemsTemp[`taMax${day}`] || "-";

        // 날씨 아이콘 업데이트
        const weatherMorningIcon = weatherIcons[weatherMorning] || weatherIcons["-"];
        const weatherAfternoonIcon = weatherIcons[weatherAfternoon] || weatherIcons["-"];

        // 테이블 업데이트 (날씨 상태에 맞는 아이콘을 표시)
        weatherRow[day - 2].innerHTML = `
         <img src="${weatherMorningIcon}" alt="${weatherMorning}" title="${weatherMorning}" />
         / 
         <img src="${weatherAfternoonIcon}" alt="${weatherAfternoon}" title="${weatherAfternoon}" />
     `;
        tempRow[day - 2].innerHTML = `${tempMin}℃ ~ ${tempMax}℃`;
        rainRow[day - 2].innerHTML = `${rainMorning}% / ${rainAfternoon}%`;
    }
}
