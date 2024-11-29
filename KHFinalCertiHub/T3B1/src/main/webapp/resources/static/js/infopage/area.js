// 지역 선택 시 데이터 가져오기
document.getElementById("areaSelect").addEventListener("change", fetchExamData);

// OpenAPI를 통해 시험 데이터 가져오기 (모든 페이지 가져오기)
async function fetchExamData() {
    const selectedRegion = document.getElementById("areaSelect").value;
    const apiUrl = "https://api.odcloud.kr/api/15059980/v1/uddi:de1aa92f-2507-4fc4-aa21-d0e019e4b504";
    const apiKey = "AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D";
    
    // 지역 선택 확인
    if (!selectedRegion) {
        document.getElementById("areaList").innerHTML = "<li>지역을 선택하세요.</li>";
        return;
    }

    // 데이터 로딩 중 메시지 표시
    document.getElementById("areaList").innerHTML = "<li>데이터를 불러오는중입니다....</li>";

    try {
        // 모든 페이지 데이터를 가져오기
        const allData = await fetchAllData(apiUrl, apiKey);

        // 선택된 지역에 따른 데이터 필터링
        const filteredData = allData.filter(item => item.지사명.includes(selectedRegion));

        displayExamData(filteredData);
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        document.getElementById("areaList").innerHTML = `<li>오류 발생: ${error.message}</li>`;
    }
}

// 모든 페이지 데이터를 가져오기
async function fetchAllData(apiUrl, apiKey) {
    let allData = [];
    let currentPage = 1;
    let perPage = 5000; // 한 번 요청에 가져올 데이터 수
    let totalPages = 1; // 초기값 (총 페이지 수)

    try {
        while (currentPage <= totalPages) {
            // API 요청
            const response = await fetch(`${apiUrl}?page=${currentPage}&perPage=${perPage}&serviceKey=${apiKey}`, {
                headers: {
                    "accept": "*/*",
                },
            });

            const json = await response.json();
            console.log(`페이지 ${currentPage} 응답:`, json);

            // 총 페이지 수 업데이트 (첫 요청 시 결정)
            if (currentPage === 1 && json.totalCount) {
                totalPages = Math.ceil(json.totalCount / perPage);
            }

            // 데이터 병합
            if (json.data && Array.isArray(json.data)) {
                allData = allData.concat(json.data);
            }

            currentPage++; // 다음 페이지로 이동
        }

        console.log("전체 데이터:", allData);
        return allData;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        return [];
    }
}

// 필터링된 데이터 화면에 출력
function displayExamData(data) {
    const resultList = document.getElementById("areaList");

    // "데이터 불러오는중" 메시지 제거
    resultList.innerHTML = "";

    if (data.length === 0) {
        resultList.innerHTML = "<li>해당 지역의 시험장 데이터가 없습니다.</li>";
        return;
    }

    // 시험장소와 시험일 기준으로 중복된 항목 제거
    const uniqueData = [];
    const locationsSeen = new Set();

    data.forEach(item => {
        const locationKey = `${item.시험장소}-${item.시험일}`; // 시험장소와 시험일을 결합한 키 생성

        // 시험장소와 시험일이 이미 등장한 경우, 해당 항목을 추가하지 않음
        if (!locationsSeen.has(locationKey)) {
            locationsSeen.add(locationKey);
            uniqueData.push(item);
        }
    });

    // 데이터를 줄바꿈 포함하여 출력
    resultList.innerHTML = uniqueData.map(item => `
        <li style="margin-bottom: 10px;">
            <strong>지사명:</strong> ${item.지사명}<br>
            <strong>시험장소:</strong> ${item.시험장소.replace(/\n/g, "<br>")}<br>
            <strong>시험일:</strong> ${item.시험일}
        </li>
    `).join("");
}
