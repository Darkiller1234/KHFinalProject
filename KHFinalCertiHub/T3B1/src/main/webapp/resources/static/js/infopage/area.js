$(document).ready(function () {
    var currentPage = 1; // 현재 페이지 추적

    function TestArea(areaList) {
        var brchCd = getBrchCd(areaList); // 지역 코드 가져오기

        if (!brchCd) {
            alert('올바른 지역을 선택하세요.');
            return;
        }

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';  // 프록시 서버 주소
        const targetUrl = 'http://openapi.q-net.or.kr/api/service/rest/InquiryExamAreaSVC/getList';

        $.ajax({
            url: proxyUrl + targetUrl,  // 프록시 서버를 통해 요청을 보냄
            data: {
                serviceKey: 'AiATDYDO2nw7aWzpDtDvC8aswTEabFvLtwjy0RwuM2KnGpfE%2BD4ffB3SmCH4VqDihRDB%2FNR8RmbluUBQL%2Bo10w%3D%3D',
                numOfRows: '5',
                pageNo: currentPage,  // 현재 페이지
                brchCd: brchCd // 지역 코드로 데이터 요청
            },
            dataType: 'JSON',
            success: function (data) {
                console.log("API 호출 성공");
                parseAndDisplayData(data);
            },
            error: function (xhr, status, error) {
                console.error("API 호출 실패:", error);
            }
        });
    }

    // 지역에 따라 지역 코드를 설정하는 함수
    function getBrchCd(areaList) {
        switch (areaList) {
            case '본부': return '00';
            case '서울': return '01';
            case '서부': return '02';
            case '부산': return '03';
            case '남부': return '04';
            case '대구': return '05';
            case '인천': return '06';
            case '광주': return '07';
            case '충남': return '08';
            case '울산': return '09';
            case '경기': return '10';
            case '강원': return '11';
            case '충북': return '12';
            case '대전': return '13';
            case '전북': return '14';
            case '전남': return '15';
            case '경북': return '16';
            case '경남': return '17';
            case '제주': return '18';
            case '강원동부': return '19';
            case '전남서부': return '20';
            case '부산남부': return '21';
            case '경북동부': return '22';
            case '경기북부': return '23';
            case '경기동부': return '24';
            default: return '';  // 해당 지역이 없으면 빈 문자열 반환
        }
    }

    // 데이터를 파싱하고 출력하는 함수
    function parseAndDisplayData(data) {
        var areaList = $('#areaList'); // 출력 영역
        areaList.empty(); // 기존 데이터 초기화

        // 응답 데이터 구조 확인 후 item 데이터가 있는지 확인
        if (data && data.response && data.response.body && data.response.body.items && Array.isArray(data.response.body.items.item)) {
            var items = data.response.body.items.item;

            // items 배열에 데이터가 있을 때만 처리
            if (items.length > 0) {
                items.forEach(function (item) {
                    var examAreaNm = item.examAreaNm || '정보 없음';
                    var address = item.address || '주소 없음';
                    var telNo = item.telNo || '전화번호 없음';

                    var listItem = `
                        <li>
                            <strong>${examAreaNm}</strong><br>
                            주소: ${address}<br>
                            전화번호: ${telNo}
                        </li>
                    `;
                    areaList.append(listItem);  // 데이터 출력
                });
                currentPage++; // 페이지 번호 증가
            } else {
                areaList.append('<li>해당 지역의 시험 장소 정보가 없습니다.</li>');
            }
        } else {
            areaList.append('<li>응답 데이터에 오류가 있습니다. 다시 시도해주세요.</li>');
        }
    }

    // 페이지 스크롤을 구현하기 위해 출력 영역에 스타일 추가
    $('#areaList').css({
        'max-height': '300px',
        'overflow-y': 'auto',
        'border': '1px solid #ccc',
        'padding': '10px'
    });

    // 테스트 실행: 지역 코드 입력으로 테스트 가능
    $('#areaSelect').change(function () {
        var selectedArea = $(this).val();
        TestArea(selectedArea); // 지역 선택에 따른 데이터 요청
    });
});
