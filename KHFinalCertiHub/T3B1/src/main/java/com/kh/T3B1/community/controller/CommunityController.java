package com.kh.T3B1.community.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/community")
public class CommunityController {
	
	
	@RequestMapping("main")
	public String CommunityMain(Model c) {
		c.addAttribute("pageName","communitySearch");
		return "community/communityMain";
	}
	@RequestMapping("detail")
	public String CommunityDetail(Model c) {
		c.addAttribute("pageName","commuDInit");
		return "community/communityDetail";
	}
	@RequestMapping("write")
	public String CommunityWrite(Model c) {
		c.addAttribute("pageName","commuWInit");
		return "community/communityWrite";
	}
}
