document.getElementById('selectArea1').addEventListener('change', function () {
    callWeatherAPI(getRecentDate(), getRecentTime());
});

// 최근 날짜와 시간으로 API 호출하는 함수
function callWeatherAPI(baseDate, baseTime) {
    const regId = document.getElementById("selectArea1").value;
    const [X, Y] = regId.split(','); // 지역 좌표 분리

    const serviceKey = "AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D";

    const shortWeatherUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${X}&ny=${Y}`;
    console.log(shortWeatherUrl); // 생성된 URL 확인

    // API 호출
    fetch(shortWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // 응답 데이터 확인
        if (data.response && data.response.body && data.response.body.items) {
            updateTable(data.response.body.items.item); // 테이블 업데이트
        } else {
            console.error("유효한 데이터가 없습니다:", data);
        }
    })
    .catch((error) => console.error("API 호출 실패:", error));

}

// 오늘, 내일, 모레 버튼 클릭 이벤트
document.querySelectorAll("button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + index); // 오늘(0), 내일(1), 모레(2)

        const BD = baseDate.toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD 형식
        const BT = getRecentTime();

        callWeatherAPI(BD, BT); // 버튼 클릭 시 날짜를 기준으로 API 호출
    });
});

// 최근 발표 시각 계산
function getRecentTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const formattedTime = String(hour).padStart(2, '0') + String(minute).padStart(2, '0');
    const timePoints = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"];

    for (let i = timePoints.length - 1; i >= 0; i--) {
        if (formattedTime >= timePoints[i]) {
            return timePoints[i];
        }
    }
    return "2300"; // 0200 이전일 경우
}

// 최근 날짜 계산
function getRecentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0].replace(/-/g, '');
}

// 테이블 업데이트 함수 (동일)
function updateTable(items) {
    const weatherData = items.filter(
        (item) =>
            item.category === "PTY" || // 날씨 상태
            item.category === "REH" || // 습도
            item.category === "TMP"   // 기온
    );

    const weatherRow = document.querySelector("tr:nth-child(2)");
    const humidityRow = document.querySelector("tr:nth-child(3)");
    const tempRow = document.querySelector("tr:nth-child(4)");

    weatherRow.querySelectorAll("td:not(:first-child)").forEach((td) => (td.textContent = ""));
    humidityRow.querySelectorAll("td:not(:first-child)").forEach((td) => (td.textContent = ""));
    tempRow.querySelectorAll("td:not(:first-child)").forEach((td) => (td.textContent = ""));

    weatherData.forEach((item) => {
        const timeIndex = parseInt(item.fcstTime.substring(0, 2));
        const targetCell = document.querySelector(`tr:nth-child(${getRowIndex(item.category)}) td:nth-child(${timeIndex + 2})`);

        if (targetCell) {
            if (item.category === "PTY") targetCell.textContent = getWeatherStatus(item.fcstValue);
            if (item.category === "REH") targetCell.textContent = item.fcstValue + "%";
            if (item.category === "TMP") targetCell.textContent = item.fcstValue + "°C";
        }
    });
}

function getRowIndex(category) {
    if (category === "PTY") return 2;
    if (category === "REH") return 3;
    if (category === "TMP") return 4;
}

function getWeatherStatus(code) {
    const status = { 0: "맑음", 1: "비", 2: "비/눈", 3: "눈", 4: "소나기" };
    return status[code] || "알 수 없음";
}

// 페이지 로드 시 초기 데이터 로드
window.onload = function () {
    document.getElementById("selectArea1").value = "73,134"; // 기본 지역 설정
    document.getElementById("selectArea1").dispatchEvent(new Event("change"));
};
