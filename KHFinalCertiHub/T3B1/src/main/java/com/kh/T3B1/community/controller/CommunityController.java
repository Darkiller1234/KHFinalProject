package com.kh.T3B1.community.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommunityController {
	
	
	@RequestMapping("list.cm")
	public String CommunityMain() {

		return "community/communityMain";
	}
	@RequestMapping("detail.cm")
	public String CommunityDetail() {
		
		return "community/communityDetail";
	}
}
