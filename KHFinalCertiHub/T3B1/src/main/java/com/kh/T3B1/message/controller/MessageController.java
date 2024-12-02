package com.kh.T3B1.message.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;
import com.kh.T3B1.message.service.MessageService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("message/")
public class MessageController {
	
	public final MessageService messageService;
	
	@RequestMapping("main")
	public String messageMainPage(HttpSession session, Model m) {
		m.addAttribute("pageName","messageMain");
		return "personal/messageMain";
	}
	
	@ResponseBody
	@PostMapping(value="getMemberInfo", produces="application/json; charset=UTF-8")
	public String getMemberInfo(HttpSession session) {
		Member member = (Member)session.getAttribute("loginMember");
		
		HashMap<String, Object> memberInfo = new HashMap<>();
		memberInfo.put("memberNo", member.getMemberNo());
		memberInfo.put("memberName", member.getMemberNickname());
		
		return new Gson().toJson(memberInfo);
	}
	
	@ResponseBody
	@PostMapping(value="loadMentor", produces="application/json; charset=UTF-8")
	public String loadMentor(HttpSession session) {
		Member member = (Member)session.getAttribute("loginMember");
		
		ArrayList<Talkroom> talkroomList = messageService.selectMentorList(member.getMemberNo());
		
		return new Gson().toJson(talkroomList);
	}
	
	@ResponseBody
	@PostMapping(value="loadStudy", produces="application/json; charset=UTF-8")
	public String loadStudy(HttpSession session) {
		Member member = (Member)session.getAttribute("loginMember");
		
		ArrayList<Talkroom> talkroomList = messageService.selectStudyList(member.getMemberNo());
		
		return new Gson().toJson(talkroomList);
	}
	
	@ResponseBody
	@PostMapping(value="loadMessage", produces="application/json; charset=UTF-8")
	public String loadMessage(HttpSession session, int pageLimit, int currentPage, int talkroomNo) {
		Member member = (Member)session.getAttribute("loginMember");
		
		// 요청 한번에 불러올 메시지의 수, 최대 10개 까지
		pageLimit = pageLimit <= 10 ? pageLimit : 10;
		
		// 이미 마지막 페이지라면 DB에서 조회하지 않도록 막아준다
		Integer studyCount = messageService.countMessage(talkroomNo);
		if(studyCount == null && ( (currentPage - 1) * pageLimit > studyCount) ) {
			return null;
		}
		
		// 스터디 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<Message> messageList = messageService.selectMessageList(pi, talkroomNo);
		
		return new Gson().toJson(messageList);
	}
}
