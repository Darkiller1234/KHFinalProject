package com.kh.T3B1.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IdFindPageController {
	
	@RequestMapping("idfindpage")
	public String mainPage() {
		return "member/idfindpage";
	}
}
