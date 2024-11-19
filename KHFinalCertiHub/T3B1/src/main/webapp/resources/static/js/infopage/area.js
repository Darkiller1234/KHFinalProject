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

    if (data.length === 0) {
        resultList.innerHTML = "<li>해당 지역의 시험장 데이터가 없습니다.</li>";
        return;
    }

    // 데이터 출력 시 최대 5줄 넘으면 스크롤 추가
    resultList.style.maxHeight = "200px"; // 예: 5줄 기준
    resultList.style.overflowY = "auto"; // 스크롤 활성화

    // 데이터를 줄바꿈 포함하여 출력
    resultList.innerHTML = data.map(item => `
        <li style="margin-bottom: 10px;">
            <strong>지사명:</strong> ${item.지사명}<br>
            <strong>시험장소:</strong> ${item.시험장소.replace(/\n/g, "<br>")}<br>
            <strong>시험일:</strong> ${item.시험일}
            <strong>부실:</strong> ${item.부}
        </li>
    `).join("");
}
