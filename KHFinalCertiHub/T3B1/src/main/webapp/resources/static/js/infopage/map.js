
function relayout() {    
    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

    var iwContent = '<div"><a href="https://map.kakao.com/link/to/Hello World!,33.450701, 126.570667" style="text-align: center" style="color:blue" target="_blank">이곳을 눌러 지도검색</a></div>';
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

 // 인포윈도우를 생성합니다
 var infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent
});

// 마커 위에 인포윈도우를 표시합니다
infowindow.open(map, marker);

// 지도 중심을 마커 위치로 설정하고 크기 재조정
map.setCenter(markerPosition);
    map.relayout();
}