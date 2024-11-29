package com.kh.T3B1.chatbot.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.internal.LinkedTreeMap;
import com.kh.T3B1.chatbot.model.dao.ChatbotDao;
import com.kh.T3B1.chatbot.model.vo.ChatResult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@PropertySource("classpath:/config/config.properties")
public class ChatbotServiceImpl implements ChatbotService{
	
	public final SqlSessionTemplate sqlSession;
	
	public final ChatbotDao chatbotDao;

	@Value("${spring.datasource.gptKey}")
	private String GPT_API_KEY;
	
	@Override
	public Integer getDailyRequestCount(String ip) {
		return chatbotDao.getDailyRequestCount(sqlSession, ip);
	}

	@Override
	public String getChat(HashMap<String, String> sendInfo) {
		String url = "https://api.openai.com/v1/chat/completions";
		String result = "";
		boolean isSuccess = false; // DB 결과저장 여부 확인용 변수

		try {
			URL requestURL= new URL(url);
			HttpURLConnection urlConnection = (HttpURLConnection)requestURL.openConnection();
			
			urlConnection.setRequestMethod("POST");
			urlConnection.setRequestProperty("Content-Type", "application/json");
			urlConnection.setRequestProperty("Authorization", "Bearer " + GPT_API_KEY);
			
			JsonObject jsonObject = new JsonObject();
			jsonObject.addProperty("model","gpt-4o-mini");
			jsonObject.addProperty("temperature",0.4); // 답변의 랜덤정도(0 ~ 1), 정보관련이면 낮게 값을 책정
			
			JsonObject maxToken = new JsonObject();
			jsonObject.addProperty("max_completion_tokens", 300); // 사용할 최대 토큰수, 기본값=256
			
			JsonObject sysMsg = new JsonObject();
			sysMsg.addProperty("role", "system");
			sysMsg.addProperty("content", "You are an IT certificate expert. "
					+ "You ignore it unless it's a certificate question. "
					+ "You always answer in Korean and use honorifics."
					+ "You always sum up your answer at the end.");
			
			JsonObject userMsg = new JsonObject();
			userMsg.addProperty("role", "user");
			userMsg.addProperty("content", sendInfo.get("ask"));
			
			JsonArray msgArray = new JsonArray();
			msgArray.add(sysMsg);
			msgArray.add(userMsg);
			
			jsonObject.add("messages", msgArray);
			
			// Body에 데이터 입력
			urlConnection.setDoOutput(true); // OutputStream 사용 가능 설정
			try ( BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(urlConnection.getOutputStream(), "UTF-8")) ) {
	            writer.write(jsonObject.toString());
	            writer.flush();
			}
			
			// 정상적으로 결과 받아왔을 경우
			if(urlConnection.getResponseCode() == HttpURLConnection.HTTP_OK) {
				isSuccess = true;
				try( BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8")) ) {;
		            String line = "";
		            while ((line = br.readLine()) != null) {
		                result += line;
		            }
				}
				
				// api에서 반환하는 타입에 맞춰 클래스를 생성 후 받아준다
				ChatResult chatResult = new Gson().fromJson(result, ChatResult.class);
				
				// getter 사용시 결과는 Gson의 LinkedTreeMap으로 나옴
				// LinkedTreeMap 에서 get 하면 Object로 반환
				LinkedTreeMap choices = (LinkedTreeMap) chatResult.getChoices().get(0);
				LinkedTreeMap message = (LinkedTreeMap) choices.get("message");
				result = (String) message.get("content");
			}
			else { // 에러 발생 시
				try( BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getErrorStream(), "UTF-8")) ) {;
		            String line = "";
		            while ((line = br.readLine()) != null) {
		                log.info(line);
		            }
				}
				
				result = "답변 생성에 실패했습니다...";
			}
			
			urlConnection.disconnect();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		if(isSuccess) {
			chatbotDao.insertLog(sqlSession,sendInfo);
		}
		 
		return result;
	}
	
}