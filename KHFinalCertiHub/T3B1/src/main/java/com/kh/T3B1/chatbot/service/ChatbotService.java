package com.kh.T3B1.chatbot.service;

import java.util.HashMap;

public interface ChatbotService {

	/**
	 * @param HashMap sendInfo Key=ip(클라이언트 아이피주소), ask(클라이언트의 질문)
	 * @return String answer(ChatGPT로 생성된 답변)
	 */
	String getChat(HashMap<String, String> sendInfo);

	/** 
	 * @param String ip : 일일 요청횟수를 확인할 ip주소
	 * @return int 일일 요청횟수
	 */
	Integer getDailyRequestCount(String ip);
	
}
