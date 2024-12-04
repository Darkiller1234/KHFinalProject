package com.kh.T3B1.message.controller;

import java.io.IOException;
import java.util.Date;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.service.MessageService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component("MessageSocketServer")
public class MessageSocketServer extends TextWebSocketHandler {
	private final Map<String, WebSocketSession> userSessions = new ConcurrentHashMap<>();
	private final Map<String, Set<String>> talkroomUserList = new ConcurrentHashMap<>(); 
	
	public final MessageService messageService;
	
	@Autowired
	public MessageSocketServer(MessageService messageService) {
		this.messageService = messageService;
	}
	
	//클라이언트가 연결을 맺을 때 호출이되는 메소드
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		Member member = (Member)session.getAttributes().get("loginMember");
		String memberNo = Integer.toString(member.getMemberNo());
		String talkroomNo = ((Integer)session.getAttributes().get("talkroomNo")).toString();
		log.info("MemberNo : {} 톡방 {}번 연결됨...", member.getMemberNo(), talkroomNo);
		
		// 세션 정보 저장
		userSessions.put(memberNo, session);
		
		// 유저를 해당 톡방 세션 그룹에 등록함
		// 만약 아직 해당 톡방 세션에 아무도 없다면 등록
		if(talkroomUserList.get(talkroomNo) == null) {
			Set<String> list = ConcurrentHashMap.newKeySet();
			list.add(memberNo);
			
			talkroomUserList.put(talkroomNo, list);
		} else {
			talkroomUserList.get(talkroomNo).add(memberNo);
		}
	}

	//클라이언트로부터 메세지를 받을 때 호출되는 메소드
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		Member member = (Member)session.getAttributes().get("loginMember");
		Integer talkroomNo = (Integer)session.getAttributes().get("talkroomNo");
		
		JsonObject jsonMsg = new JsonParser().parse(message.getPayload()).getAsJsonObject();
		
		Message sendMessage = new Message();
		sendMessage.setMemberImg(member.getMemberImg());
		sendMessage.setMemberName(member.getMemberNickname());
		sendMessage.setMemberNo(member.getMemberNo());
		sendMessage.setTalkroomNo(talkroomNo);
		sendMessage.setMessageContent(jsonMsg.get("messageContent").getAsString());
		sendMessage.setMessageDate(new Date().toLocaleString());
		
		sendMessageTalkroom(sendMessage);
		Integer result = messageService.insertMessage(sendMessage);
	}
	
	private void sendMessageTalkroom(Message message) {
		String senderNo = Integer.toString(message.getMemberNo());
		
		WebSocketSession senderSession = userSessions.get(senderNo);
		Set<String> receiverList = talkroomUserList.get(Integer.toString(message.getTalkroomNo()));
		
		log.info("Message : {}", message);
		
		String str = new Gson().toJson(message);
		TextMessage msg = new TextMessage(str);

		for(String receiver : receiverList) {
			if(receiver.equals(senderNo)) continue;
			
			WebSocketSession receiverSession = userSessions.get(receiver);
			try {
				receiverSession.sendMessage(msg);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	//클라이언트가 연결을 끊을 때 호출되는 메소드
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		Member member = (Member)session.getAttributes().get("loginMember");
		String memberNo = Integer.toString(member.getMemberNo());
		String talkroomNo = ((Integer)session.getAttributes().get("talkroomNo")).toString();
		
		Set<String> receiverList = talkroomUserList.get(talkroomNo);
		receiverList.remove(memberNo);
		
		super.afterConnectionClosed(session, status);
	}
}
