package com.kh.T3B1.personal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PersonalChangePageController {
	
	@RequestMapping("personalChangePage")
	public String PersonalPageView() {
		return "personal/personalChangePage";
	}
}
