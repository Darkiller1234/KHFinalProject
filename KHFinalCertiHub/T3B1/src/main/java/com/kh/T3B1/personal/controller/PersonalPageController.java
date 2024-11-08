package com.kh.T3B1.personal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/personal")
public class PersonalPageController {
	
	@RequestMapping("view")
	public String PersonalPageView(Model p) {
		p.addAttribute("pageName", "personalView");
		return "personal/anotherPageView";
	}
	
	@RequestMapping("viewSc")
	public String PersonalPageViewSchedule(Model p) {
		p.addAttribute("pageName", "personalViewSchedule");
		return "personal/anotherPageViewSchedule";
	}
	
	@RequestMapping("certiRegi")
	public String PersonalPageCertiRegistry(Model p) {
		p.addAttribute("pageName", "personalCertiRegi");
		return "personal/personalCertiRegi";
	}
	
	@RequestMapping("makeSc")
	public String PersonalPageMakeSchedule(Model p) {
		p.addAttribute("pageName", "PersonalPmSc");
		return "personal/personalMakeSc";
	}
	
	@RequestMapping("profile")
	public String PersonalProfileEditPage(Model p) {
		p.addAttribute("pageName","personalProfileEdit");
		return "personal/personalProfileEdit";
	}
	
	@RequestMapping("mentor")
	public String PersonalMentorPage(Model p) {
		// 멘토 가입했다면 personalMentor, 가입하지 않았다면 personalMentorEnroll 페이지로
		p.addAttribute("pageName","personalMentor");
		return "personal/personalMentor";
	}

}
