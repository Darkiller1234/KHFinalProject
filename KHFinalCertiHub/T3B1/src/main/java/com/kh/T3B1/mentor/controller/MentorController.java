package com.kh.T3B1.mentor.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.mentor.service.MentorService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@RequestMapping("/mentor")
public class MentorController {
	
	@Autowired
	public final MentorService mentorService;
	
	@RequestMapping("search")
	public String mentorSearchPage(Model m) {
		m.addAttribute("pageName","mentorSearch");
		return "studyroom/mentorSearch";
	}
	
	@RequestMapping("detail")
	public String mentorDetailPage(Model m, int no) {
		int memberNo = no;
		
		Member mentor = mentorService.selectMentorDetail(memberNo);
		int mentorLike = mentorService.countMentorLike(memberNo);
		mentor.setMentorLike(mentorLike);
		
		m.addAttribute("mentor", mentor);
		m.addAttribute("pageName","mentorDetail");
		return "studyroom/mentorDetail";
	}
	
	@ResponseBody
	@RequestMapping(value="list", produces="application/json; charset=UTF-8")
	public String selectMentorList(int pageLimit, int currentPage) {
		// 요청 한번에 불러올 멘토의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 멘토 페이지라면 DB에서 조회하지 않도록 막아준다
		int mentorCount = mentorService.countMentor();
		if((currentPage - 1) * pageLimit > mentorCount) {
			return null;
		}
		
		// 자격증 목록 조회
		
		// 멘토 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<Member> mentorList = mentorService.selectMentorList(pi);
		
		return new Gson().toJson(mentorList);
	}
}
