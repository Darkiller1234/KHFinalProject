package com.kh.T3B1.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/study")
public class StudyController {
	
	@RequestMapping("search")
	public String studySearchPage(Model m) {
		m.addAttribute("pageName","studySearch");
		return "studyroom/studySearch";
	}
	
	@RequestMapping("detail")
	public String studyDetailPage(Model m) {
		m.addAttribute("pageName","studyDetail");
		return "studyroom/studyDetail";
	}
	
	@RequestMapping("detail/edit")
	public String studyDetailEditPage(Model m) {
		m.addAttribute("pageName","studyDetailEdit");
		return "studyroom/studyDetailEdit";
	}
	
	@RequestMapping("list")
	public String studyBoardPage(Model m) {
		m.addAttribute("pageName","studyBoard");
		return "studyroom/studyBoard";
	}
	
	@RequestMapping("board")
	public String studyBoardViewPage(Model m) {
		m.addAttribute("pageName","studyBoardView");
		return "studyroom/studyBoardView";
	}
	
	@RequestMapping("write")
	public String studyWritePage(Model m) {
		m.addAttribute("pageName","studyWrite");
		return "studyroom/studyWrite";
	}
}
