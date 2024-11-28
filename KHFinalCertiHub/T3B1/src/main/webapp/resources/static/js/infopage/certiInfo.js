document.addEventListener("DOMContentLoaded", () => {
    const jmCd = "1320"; // 종목 코드
    const serviceKey = "AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D";
    const apiUrl = `http://openapi.q-net.or.kr/api/service/rest/InquiryInformationTradeNTQSVC/getList?jmCd=${jmCd}&ServiceKey=${serviceKey}`;

    const examListContainer = document.querySelector("#exam-list");

    examListContainer.innerHTML = "<p>데이터를 불러오는 중...</p>";

    fetch(apiUrl)
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            const resultCode = xmlDoc.querySelector("resultCode").textContent;
            if (resultCode !== "00") {
                throw new Error("API 호출 실패: " + xmlDoc.querySelector("resultMsg").textContent);
            }

            const items = xmlDoc.querySelectorAll("item");

            if (items.length === 0) {
                throw new Error("데이터가 없습니다.");
            }

            //내용 초기화
            examListContainer.innerHTML = "";

            items.forEach(item => {
                const jmfldnm = item.querySelector("jmfldnm")?.textContent || "";
                const infogb = item.querySelector("infogb")?.textContent || "";
                const contents = item.querySelector("contents")?.textContent || "";

                // HTML 태그 제거하기
                const cleanContents = contents.replace(/<[^>]*>?/g, ""); 

                const listItem = document.createElement("li");

                listItem.innerHTML = `
                    <strong>종목명:</strong> ${jmfldnm} <br>
                    <strong>출제범위:</strong> ${infogb} <br>
                    <strong>내용:</strong> ${cleanContents}
                `;

                examListContainer.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("API 호출 실패:", error);
            examListContainer.innerHTML = "<p>정보를 불러오는 데 실패했습니다.</p>";
        });
});