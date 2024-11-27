package com.kh.T3B1.chatbot.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.T3B1.chatbot.service.ChatbotServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("chatbot/")
@Controller
public class ChatbotController {

	public final ChatbotServiceImpl chatbotService;

	@ResponseBody
	@RequestMapping(value="getChat", produces="application/json; charset-UTF-8")
	public String getChat(HttpServletRequest request) {
		String ip = request.getHeader("X-Forwarded-For");
		
		log.info("request Header : {}", ip);
		return ip;
	}
}
