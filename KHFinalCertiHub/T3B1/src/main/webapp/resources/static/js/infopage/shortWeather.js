// 페이지 로드 시 강원도 데이터 자동 로드
window.onload = function () {
    fetchWeatherData(0); // '오늘' 데이터 자동 로드
    fetchWeatherData(1); // '내일' 데이터 자동 로드
    fetchWeatherData(2); // '모레' 데이터 자동 로드

    // 지역 변경 이벤트 추가
    document.getElementById("selectArea1").addEventListener("change", () => {
        fetchWeatherData(0); // '오늘' 데이터 갱신
        fetchWeatherData(1); // '내일' 데이터 갱신
        fetchWeatherData(2); // '모레' 데이터 갱신
    });
};

// 날씨 데이터 가져오기 함수
function fetchWeatherData(dayOffset = 0) {
    const areaSelect = document.getElementById("selectArea1");
    const areaCoords = areaSelect.value.split(",");
    const nx = areaCoords[0].trim();
    const ny = areaCoords[1].trim();

    // 날짜 설정 (base_date 계산: 항상 전날 기준으로 설정)
    const today = new Date();
    today.setDate(today.getDate() - 1); // 전날 기준으로 설정
    const baseDate = today.toISOString().split("T")[0].replace(/-/g, ""); // yyyyMMdd 형식
    const baseTime = "2300"; // 기준 시간 고정

    // API 호출 URL
    const timestamp = new Date().getTime(); // 캐싱 방지를 위한 타임스탬프 추가
    const shortWeatherUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D&numOfRows=1000&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}&_=${timestamp}`;

    console.log("API 호출 URL:", shortWeatherUrl); // 디버깅용 로그 출력

    // API 호출
    fetch(shortWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log("응답 데이터:", data); // 디버깅용 응답 로그
            if (data.response.header.resultCode === "00") {
                const items = data.response.body.items.item;
                if (items && items.length > 0) {
                    const forecastData = processWeatherData(items, dayOffset);
                    renderWeatherTable(forecastData, dayOffset);
                } else {
                    console.error("날씨 데이터가 없습니다.");
                }
            } else {
                console.error("API 호출 오류:", data.response.header.resultMsg);
            }
        })
        .catch(error => {
            console.error("API 호출 실패:", error);
        });
}

// API 데이터 가공 함수
function processWeatherData(items, dayOffset) {
    const forecastData = {
        time: [],         // 시간 (00시, 03시, 06시 ...)
        weather: [],      // 날씨 (맑음, 흐림 ...)
        humidity: [],     // 습도 (%)
        temperature: []   // 기온 (℃)
    };

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + dayOffset); // 오늘(0), 내일(1), 모레(2)
    const targetDateString = targetDate.toISOString().split("T")[0].replace(/-/g, "");

    // 시간 기준으로 데이터 필터링
    items.forEach((item) => {
        const hour = item.fcstTime.substring(0, 2); // '00', '03', '06' 처럼 시간 추출
        const forecastDate = item.fcstDate;

        // 목표 날짜에 맞는 데이터만 필터링
        if (forecastDate === targetDateString) {
            if (!forecastData.time.includes(hour)) {
                forecastData.time.push(hour); // 시간 목록에 추가
            }

            // 각 데이터 항목 분류
            if (item.category === "TMP") {   // 기온
                forecastData.temperature.push(item.fcstValue + "℃");
            } else if (item.category === "REH") {  // 습도
                forecastData.humidity.push(item.fcstValue + "%");
            } else if (item.category === "SKY") {  // 날씨
                forecastData.weather.push(item.fcstValue === "1" ? "맑음" : "흐림");
            }
        }
    });

    // 시간 순서대로 정렬
    forecastData.time.sort(); // 00시, 03시, 06시, ...

    console.log("가공된 날씨 데이터:", forecastData); // 가공된 데이터 확인
    return forecastData;
}

// 테이블 렌더링 함수
function renderWeatherTable(forecastData, dayOffset) {
    if (!forecastData || !forecastData.time || !forecastData.weather || !forecastData.temperature) {
        console.error("잘못된 데이터:", forecastData);
        return;
    }

    const weatherIcons = {
        "맑음": "/T3B1/resources/static/img/weather/sun.png",
        "비": "/T3B1/resources/static/img/weather/rain.png",
        "흐리고 비": "/T3B1/resources/static/img/weather/rain.png",
        "소나기": "/T3B1/resources/static/img/weather/rain.png",
        "구름많고 비": "/T3B1/resources/static/img/weather/rain.png",
        "눈": "/T3B1/resources/static/img/weather/snow.png",
        "흐리고 눈": "/T3B1/resources/static/img/weather/snow.png",
        "흐리고 비/눈": "/T3B1/resources/static/img/weather/snow.png",
        "구름많고 눈": "/T3B1/resources/static/img/weather/snow.png",
        "구름많고 비/눈": "/T3B1/resources/static/img/weather/snow.png",
        "구름많음": "/T3B1/resources/static/img/weather/sunAndCloud.png",
        "흐림": "/T3B1/resources/static/img/weather/cloud.png",
        "-": "/T3B1/resources/static/img/weather/unknown.png"
    };

    const table = dayOffset === 0 ? document.getElementById("todayTable")
        : dayOffset === 1 ? document.getElementById("tomorrowTable")
        : document.getElementById("dayAfterTomorrowTable");

    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    // 시간 행 생성
    const timeRow = document.createElement('tr');
    let th = document.createElement('th');
    th.innerText = "시간";
    timeRow.appendChild(th);
    forecastData.time.forEach((time) => {
        const td = document.createElement('td');
        td.innerText = time + "시";
        timeRow.appendChild(td);
    });
    tbody.appendChild(timeRow);

    // 날씨 행 생성 (이미지 추가)
    const weatherRow = document.createElement('tr');
    th = document.createElement('th');
    th.innerText = "날씨";
    weatherRow.appendChild(th);
    forecastData.weather.forEach((weather) => {
        const td = document.createElement('td');
        const img = document.createElement('img');
        img.src = weatherIcons[weather] || weatherIcons["-"]; // 날씨에 해당하는 이미지 경로
        img.alt = weather; // 대체 텍스트
        img.style.width = "30px"; // 이미지 크기 조정
        img.style.height = "30px";
        td.appendChild(img);
        weatherRow.appendChild(td);
    });
    tbody.appendChild(weatherRow);

    // 습도 행 생성
    const humidityRow = document.createElement('tr');
    th = document.createElement('th');
    th.innerText = "습도";
    humidityRow.appendChild(th);
    forecastData.humidity.forEach((humidity) => {
        const td = document.createElement('td');
        td.innerText = humidity;
        humidityRow.appendChild(td);
    });
    tbody.appendChild(humidityRow);

    // 기온 행 생성
    const temperatureRow = document.createElement('tr');
    th = document.createElement('th');
    th.innerText = "기온";
    temperatureRow.appendChild(th);
    forecastData.temperature.forEach((temp) => {
        const td = document.createElement('td');
        td.innerText = temp;
        temperatureRow.appendChild(td);
    });
    tbody.appendChild(temperatureRow);
}