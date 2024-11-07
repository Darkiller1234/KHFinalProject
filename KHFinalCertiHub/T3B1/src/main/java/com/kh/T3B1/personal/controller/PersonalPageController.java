package com.kh.T3B1.personal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PersonalPageController {
	
	@RequestMapping("view.pp")
	public String PersonalPageView(Model p) {
		p.addAttribute("pageName", "personalView");
		return "personal/anotherPageView";
	}
	
	@RequestMapping("certiRegi.pp")
	public String PersonalPageCertiApplication(Model p) {
		p.addAttribute("pageName", "personalCertiRegi");
		return "personal/personalCertiRegi";
	}

}
