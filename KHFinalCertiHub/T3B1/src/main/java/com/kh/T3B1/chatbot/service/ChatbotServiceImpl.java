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

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.kh.T3B1.chatbot.model.dao.ChatbotDao;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@PropertySource("classpath:/config/config.properties")
public class ChatbotServiceImpl implements ChatbotService{
	
	public ChatbotDao chatbotDao;

	@Value("${spring.datasource.gptKey}")
	private String GPT_API_KEY;

	@Override
	public String getChat(HashMap<String, String> sendInfo) {
		String url = "https://api.openai.com/v1/chat/completions";
		String result = "";

		try {
			URL requestURL= new URL(url);
			HttpURLConnection urlConnection = (HttpURLConnection)requestURL.openConnection();
			
			urlConnection.setRequestMethod("POST");
			urlConnection.setRequestProperty("Content-Type", "application/json");
			urlConnection.setRequestProperty("Authorization", "Bearer " + GPT_API_KEY);
			
			JsonObject jsonObject = new JsonObject();
			jsonObject.addProperty("model","gpt-4o-mini");
			jsonObject.addProperty("temperature",0.7);
			
			JsonObject msg = new JsonObject();
			msg.addProperty("role", "user");
			msg.addProperty("content", sendInfo.get("ask"));
			
			JsonArray msgArray = new JsonArray();
			msgArray.add(msg);
			
			jsonObject.add("messages", msgArray);
			
			urlConnection.setDoOutput(true); // OutputStream 사용 가능 설정
			try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(urlConnection.getOutputStream(), "UTF-8"))) {
	            writer.write(jsonObject.toString());
	            writer.flush();
	        }
			
            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8"));
            String line;
            while ((line = br.readLine()) != null) {
                result += line;
            }
            
            br.close();
			urlConnection.disconnect();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		 
		return result;
	}
	
}