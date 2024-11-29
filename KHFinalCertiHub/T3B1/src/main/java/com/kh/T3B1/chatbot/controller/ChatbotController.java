package com.kh.T3B1.chatbot.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.chatbot.service.ChatbotService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("chatbot/")
@Controller
public class ChatbotController {

	public final ChatbotService chatbotService;

	@ResponseBody
	@RequestMapping(value="getChat", produces="application/json; charset-UTF-8")
	public String getChat(HttpServletRequest request, String ask) {
		
		HashMap<String, String> result = new HashMap<>();
		result.put("status","N");
		
		// X-Forwarded-For : 로드밸런서나 프록시 서버를 거쳤을 경우에, 헤더에 담긴 IP주소(기본 IPv6)
		String ip = request.getHeader("X-Forwarded-For");
        
		// equalsIgnoreCase : 대소문자 구분없이 비교
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
            ip = request.getHeader("Proxy-Client-IP"); // WebLogic(WAS) 모듈 weblogic connector(mod_wl)에서 사용하는 헤더
        } 
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
            ip = request.getHeader("WL-Proxy-Client-IP"); // WebLogic(WAS) 헤더 2
        } 
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
            ip = request.getHeader("HTTP_CLIENT_IP"); // PHP에서 실제 Client IP를 구하는데 사용
        } 
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
            ip = request.getHeader("HTTP_X_FORWARDED_FOR"); // ASP에서 실제 Client IP를 구하는데 사용
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
            ip = request.getHeader("X-Real-IP"); // Nginx 리버스 프록시에서 사용
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) { 
            ip = request.getRemoteAddr(); // 프록시 서버가 없을때 기본적으로 클라이언트 IP가 담김
        }
        
        log.info("request ip : {}",ip);
        
        // ip주소값이 존재하면 실행
        if(ip != null) {
        	// 해당 아이피로 gpt 사용 횟수 조회
        	Integer dailyReqCnt = chatbotService.getDailyRequestCount(ip);
        	
            if(dailyReqCnt != null && dailyReqCnt < 10) {
                HashMap<String, String> sendInfo = new HashMap<>();
                sendInfo.put("ip",ip);
                sendInfo.put("ask",ask);
                
                String answer = chatbotService.getChat(sendInfo);
                result.put("status", "Y");
                result.put("answer", answer);
            }
        }
        
		return new Gson().toJson(result);
	}
}
