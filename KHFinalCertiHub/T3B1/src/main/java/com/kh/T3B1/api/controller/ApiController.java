//package com.kh.T3B1.api.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.kh.T3B1.api.model.vo.ApiKeys;
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStreamReader;
//import java.net.HttpURLConnection;
//import java.net.URL;
//
//@RestController
//public class ApiController {
//
//    @Autowired
//    private ApiKeys apiKeys;
//
//    // HttpURLConnection을 사용하여 외부 API 호출
//    private String callApi(String apiUrl) throws IOException {
//        URL requestURL = new URL(apiUrl);
//        HttpURLConnection urlConnection = (HttpURLConnection) requestURL.openConnection();
//        urlConnection.setRequestMethod("GET");
//        urlConnection.setConnectTimeout(5000);  // 타임아웃 설정
//        urlConnection.setReadTimeout(5000);     // 읽기 타임아웃 설정
//        
//        int status = urlConnection.getResponseCode(); // 응답 코드 확인
//        
//        // 응답 코드가 200(OK)이 아니면 예외를 던짐
//        if (status != HttpURLConnection.HTTP_OK) {
//            throw new IOException("Failed to fetch data: HTTP " + status);
//        }
//
//        try (BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()))) {
//            StringBuilder result = new StringBuilder();
//            String line;
//            
//            while ((line = br.readLine()) != null) {
//                result.append(line);
//            }
//            
//            return result.toString();
//        } finally {
//            urlConnection.disconnect();
//        }
//    }
//
//    // 중기 예보 데이터를 반환하는 API
//    @GetMapping("/T3B1/info/lib/mid-weather")
//    public ResponseEntity<String> getMidWeatherApi(@RequestParam String regionCode) {
//        String apiUrl = String.format(
//            "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=%s&regId=%s&dataType=JSON",
//            apiKeys.getMidWeatherAPIKey(),
//            regionCode
//        );
//
//        try {
//            String response = callApi(apiUrl);
//            return ResponseEntity.ok(response);  // JSON 형식으로 클라이언트에 반환
//        } catch (IOException e) {
//            return ResponseEntity.status(500).body("API 호출 실패: " + e.getMessage());
//        }
//    }
//
//    // 단기 예보 데이터를 반환하는 API
//    @GetMapping("/T3B1/info/lib/short-weather")
//    public ResponseEntity<String> getShortWeatherApi(@RequestParam String regionCode) {
//        String apiUrl = String.format(
//            "http://apis.data.go.kr/1360000/ShortFcstInfoService/getShortWeather?serviceKey=%s&regId=%s&dataType=JSON",
//            apiKeys.getShortWeatherAPIKey(),
//            regionCode
//        );
//
//        try {
//            String response = callApi(apiUrl);
//            return ResponseEntity.ok(response);  // JSON 형식으로 클라이언트에 반환
//        } catch (IOException e) {
//            return ResponseEntity.status(500).body("API 호출 실패: " + e.getMessage());
//        }
//    }
//
//    // 이벤트 정보를 반환하는 API
//    @GetMapping("/T3B1/info/main/event")
//    public String getEventApi() {
//        return "Event API Key: " + apiKeys.getEventAPIKey();
//    }
//
//    // 시험장 정보를 반환하는 API
//    @GetMapping("/T3B1/info/main/exam-venues")
//    public String getExamVenues(@RequestParam String regionCode) {
//        String apiUrl = String.format(
//            "https://api.exam.com/venues?serviceKey=%s&regionCode=%s",
//            apiKeys.getAreaAPIKey(),
//            regionCode
//        );
//        
//        try {
//            String response = callApi(apiUrl);
//            return response;  // 응답 결과 반환
//        } catch (IOException e) {
//            return "API 호출 실패: " + e.getMessage();
//        }
//    }
//
//    // 자격증 정보를 반환하는 API
//    @GetMapping("/T3B1/info/main/certifications")
//    public String getCertifications(@RequestParam String jmCd) {
//        String apiUrl = String.format(
//            "http://openapi.q-net.or.kr/api/service/rest/InquiryInformationTradeNTQSVC/getList?jmCd=%s&ServiceKey=%s",
//            jmCd,
//            apiKeys.getCertiInfoAPIKey()
//        );
//        
//        try {
//            String response = callApi(apiUrl);
//            return response;  // 응답 결과 반환
//        } catch (IOException e) {
//            return "API 호출 실패: " + e.getMessage();
//        }
//    }
//}
