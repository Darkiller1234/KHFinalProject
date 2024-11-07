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
	
	@RequestMapping("certiRegi")
	public String PersonalPageCertiApplication(Model p) {
		p.addAttribute("pageName", "personalCertiRegi");
		return "personal/personalCertiRegi";
	}

}
