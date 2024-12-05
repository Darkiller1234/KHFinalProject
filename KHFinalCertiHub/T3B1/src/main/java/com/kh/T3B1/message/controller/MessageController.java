package com.kh.T3B1.message.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.ApplyLog;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;
import com.kh.T3B1.message.service.MessageService;
import com.kh.T3B1.study.service.StudyService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("message/")
public class MessageController {
	
	public final MessageService messageService;
	public final StudyService studyService;
	
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
		memberInfo.put("memberImg", member.getMemberImg());
		
		return new Gson().toJson(memberInfo);
	}
	
	@ResponseBody
	@PostMapping(value="loadMentor", produces="application/json; charset=UTF-8")
	public String loadMentor(HttpSession session, int currentPage, int pageLimit) {
		Member member = (Member)session.getAttribute("loginMember");
		
		// 요청 한번에 불러올 메시지의 수, 최대 10개 까지
		pageLimit = pageLimit <= 10 ? pageLimit : 10;
		
		// 이미 마지막 페이지라면 DB에서 조회하지 않도록 막아준다
		Integer mentorCount = messageService.countMentor(member.getMemberNo());
		if(mentorCount == null || ( (currentPage - 1) * pageLimit > mentorCount) ) {
			return null;
		}
		
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<Talkroom> talkroomList = messageService.selectMentorList(pi, member.getMemberNo());
		
		return new Gson().toJson(talkroomList);
	}
	
	@ResponseBody
	@PostMapping(value="loadStudy", produces="application/json; charset=UTF-8")
	public String loadStudy(HttpSession session, int currentPage, int pageLimit) {
		Member member = (Member)session.getAttribute("loginMember");
		
		// 요청 한번에 불러올 메시지의 수, 최대 10개 까지
		pageLimit = pageLimit <= 10 ? pageLimit : 10;
		
		// 이미 마지막 페이지라면 DB에서 조회하지 않도록 막아준다
		Integer countStudy = messageService.countStudy(member.getMemberNo());
		if(countStudy == null || ( (currentPage - 1) * pageLimit > countStudy) ) {
			return null;
		}
		
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<Talkroom> talkroomList = messageService.selectStudyList(pi, member.getMemberNo());
		
		return new Gson().toJson(talkroomList);
	}
	
	@ResponseBody
	@PostMapping(value="loadApply", produces="application/json; charset=UTF-8")
	public String loadApply(HttpSession session, int pageLimit, int currentPage) {
		Member member = (Member)session.getAttribute("loginMember");
		
		// 요청 한번에 불러올 메시지의 수, 최대 10개 까지
		pageLimit = pageLimit <= 10 ? pageLimit : 10;
		
		// 이미 마지막 페이지라면 DB에서 조회하지 않도록 막아준다
		Integer applyCount = messageService.countApply(member.getMemberNo());
		if(applyCount == null || ( (currentPage - 1) * pageLimit > applyCount) ) {
			return null;
		}
		
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<ApplyLog> applyList = messageService.selectApplyList(pi, member.getMemberNo());
		
		return new Gson().toJson(applyList);
	}
	
	@ResponseBody
	@PostMapping(value="loadMessage", produces="application/json; charset=UTF-8")
	public String loadMessage(HttpSession session, int pageLimit, int currentPage, int talkroomNo) {
		session.setAttribute("talkroomNo", talkroomNo);
		
		Member member = (Member)session.getAttribute("loginMember");
		
		// 요청 한번에 불러올 메시지의 수, 최대 10개 까지
		pageLimit = pageLimit <= 10 ? pageLimit : 10;
		
		// 이미 마지막 페이지라면 DB에서 조회하지 않도록 막아준다
		Integer studyCount = messageService.countMessage(talkroomNo);
		if(studyCount == null || ( (currentPage - 1) * pageLimit > studyCount) ) {
			return null;
		}
		
		// 스터디 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<Message> messageList = messageService.selectMessageList(pi, talkroomNo);
		
		return new Gson().toJson(messageList);
	}
	
	@ResponseBody
	@PostMapping(value="acceptApply", produces="application/json; charset=UTF-8")
	public String acceptApply(HttpSession session, int applyNo, 
			@RequestParam(required = false) int studyNo, int applicantNo, int applyKind) {
		HashMap<String, String> resultObj = new HashMap<>();
		String result = "N";
		Member member = (Member)session.getAttribute("loginMember");

		HashMap<String, Integer> searchInfo = new HashMap<>();
		searchInfo.put("memberNo", member.getMemberNo());
		searchInfo.put("applicantNo", applicantNo);
		searchInfo.put("applyNo", applyNo);
		
		if(applyKind == 1) {
			result = messageService.createTalkroom(searchInfo);
		}		
		else if(applyKind == 2) {
			searchInfo.put("studyNo", studyNo);
			boolean isManager = studyService.isStudyManager(searchInfo);
			
			if(isManager) {
				// DB 추가를 위해 memberNo를 매니저 번호에서 요청자 번호로 변경
				searchInfo.put("memberNo", applicantNo);
				result = studyService.joinStudy(searchInfo);
			}
		}
		
		resultObj.put("result", result);
		return new Gson().toJson(resultObj);
	}
	
	@ResponseBody
	@PostMapping(value="rejectApply", produces="application/json; charset=UTF-8")
	public String rejectApply(HttpSession session, int applyNo, int studyNo, int applicantNo, int applyKind) {
		HashMap<String, String> resultObj = new HashMap<>();
		String result = "N";
		
//		Member member = (Member)session.getAttribute("loginMember");

//		HashMap<String, Integer> searchInfo = new HashMap<>();
//		searchInfo.put("memberNo", member.getMemberNo());
//		searchInfo.put("applicantNo", applicantNo);
//		searchInfo.put("applyNo", applyNo);

		result = messageService.deleteApplyLog(applyNo);
		
		resultObj.put("result", result);
		return new Gson().toJson(resultObj);
	}
}
