package com.kh.T3B1.mentor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;

@Controller
@RequestMapping("/mentor")
public class MentorController {
	
	@RequestMapping("search")
	public String mentorSearchPage(Model m) {
		int pageLimit = 10;
		int currentPage = (int)m.getAttribute("p");
		int offset = (currentPage - 1) * pageLimit;
		
		m.addAttribute("pageName","mentorSearch");
		return "studyroom/mentorSearch";
	}
	
	@RequestMapping("detail")
	public String mentorDetailPage() {
		return "studyroom/mentorDetail";
	}
}
