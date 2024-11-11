package com.kh.T3B1.mentor.controller;

import java.util.ArrayList;

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
	public String mentorDetailPage() {
		return "studyroom/mentorDetail";
	}
	
	@ResponseBody
	@RequestMapping(value="list", produces="application/json; charset=UTF-8")
	public String selectMentorList(int pageLimit, int currentPage) {
		System.out.println("AJAX 요청 들어옴");
		// 요청 한번에 불러올 멘토의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		ArrayList<Member> mentorList = mentorService.selectMentorList(pi);
		System.out.println(mentorList);
		
		return new Gson().toJson(mentorList);
	}
}
