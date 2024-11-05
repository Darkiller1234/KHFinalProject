package com.kh.T3B1.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("manager/")
public class ManagerController {
	
	@RequestMapping("notice")
	public String mainPage(Model m) {
		m.addAttribute("pageName","managerPage");
		return "member/manager";
	}
}
