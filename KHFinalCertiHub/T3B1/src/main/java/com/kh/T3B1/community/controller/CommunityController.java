package com.kh.T3B1.community.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommunityController {
	
	
	@RequestMapping("list.cm")
	public String CommunityMain(Model c) {
		c.addAttribute("pageName","communitySearch");
		return "community/communityMain";
	}
	@RequestMapping("detail.cm")
	public String CommunityDetail(Model c) {
		c.addAttribute("pageName","commuDInit");
		return "community/communityDetail";
	}
	@RequestMapping("write.cm")
	public String CommunityWrite(Model c) {
		c.addAttribute("pageName","commuWInit");
		return "community/communityWrite";
	}
}
