package com.kh.T3B1.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("main")
	public String mainPage() {
		return "main/mainPage";
	}
	
	// 테스트용 경로들, 서비스시 없앨것
	@RequestMapping("modal")
	public String modal() {
		return "common/popup";
	}
	
	@RequestMapping("profile")
	public String profile() {
		return "common/profile";
	}
}
