package com.kh.T3B1.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IdFindPagesController {
	
	@RequestMapping("idfindpages")
	public String mainPage() {
		return "member/idfindpages";
	}
}