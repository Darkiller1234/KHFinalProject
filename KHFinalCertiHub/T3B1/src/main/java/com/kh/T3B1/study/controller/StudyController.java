package com.kh.T3B1.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/study")
public class StudyController {
	
	@RequestMapping("list")
	public String studySearchPage(Model m) {
		m.addAttribute("pageName","studySearch");
		return "studyroom/studySearch";
	}
	
	@RequestMapping("detail")
	public String studyDetailPage(Model m) {
		m.addAttribute("pageName","studyDetail");
		return "studyroom/studyDetail";
	}
}
