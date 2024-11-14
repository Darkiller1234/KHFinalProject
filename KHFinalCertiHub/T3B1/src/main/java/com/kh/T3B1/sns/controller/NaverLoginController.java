package com.kh.T3B1.sns.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


//@Controller
//public class NaverLoginController {
//	
//	@Value("${sns.naver.clientId}")
//	private String clientId;
//	
//	@Value("${sns.naver.clientId}")
//	private String clientSecret;
//	
//	@RequestMapping("login")
//	public String login() {
//		return "redirect:/";
//	}
//	
//	@RequestMapping("naver-login")
//	public String naverLoginCallback(String code, String state ) throws Exception {
//		
//		String redirectURL = URLEncoder.encode("http://localhost:5500/T3B1/member/login", "UTF-8");
//		String apiURL = "https://nid.naver.com/oaith2.0/token?grant_type=authorization_code";
//        apiURL += "&client_id=" + clientId;
//        apiURL += "&client_Secret=" + clientSecret;
//        apiURL += "&redirect_uri=" + redirectURL;
//        apiURL += "&code=" + code;
//        apiURL += "&state=" + state;
//        
//        URL url = new URL(apiURL);
//        HttpURLConnection con = (HttpURLConnection) url.openConnection();
//        
//        int responseCode = con.getResponseCode();
//        
//        String inputLine = "";
//        if(responseCode == 200) {
//        	BufferedReader br;
//        	br = new BufferedReader(new InputStreamReader(con.getInputStream()));
//        	StringBuffer res = new StringBuffer();
//            while((inputLine = br.readLine()) != null) {
//            	res.append(inputLine);
//            }
//        br.close();
//        
//        String result = res.toString();
//        
//        JsonObject totalObj = JsonParser.parseString(result).getAsJsonObject();
//        
//        String accessToken = totalObj.get("access_token").getAsString();
//        String header = "Barer" + accessToken;
//        
//        apiURL = "https://openapi.anver.com/v1/nid/me";
//        Map<String, String> requestHeaders = new HashMap<>();
//        requestHeaders.put("Authorization", header);
//       }
//       
//        return "redirect:/";
//	}
//	
//	//
//	private static String get(String apiUrl, Map<String, String> requestHeaders) {
//		HttpURLConnection conn = 
//	}
//	
//	private static HttpURLConnection connect(String apiUrl) {
//		try {
//		URL url = new URL(apiUrl);
//		return (HttpURLException e) {
//	}catch (MalformedURLException e) {
//		e.printStackTrace();
//		throw new RuntimeException("API URL이 잘못되었습니다. :" + apiUrl, e);
//			}
//		}                                                        
//	}
//}
