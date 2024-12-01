package com.kh.T3B1.message.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.Talkroom;
import com.kh.T3B1.message.service.MessageService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("message/")
public class MessageController {
	
	public final MessageService messageService;
	
	@RequestMapping("main")
	public String messageMainPage(Model m) {
		m.addAttribute("pageName","messageMain");
		return "personal/messageMain";
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
}
