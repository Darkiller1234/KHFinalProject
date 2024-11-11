package com.kh.T3B1.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MembershipController {
	
	@RequestMapping("membership")
	public String membershipPage() {
		return "member/membership";
	}
	
	@RequestMapping("login")
	public String loginPage() {
		return "member/login";
	}
	
	@RequestMapping("idfind")
	public String idfindPage() {
		return "member/idfind";
	}
	
	@RequestMapping("idfindpage")
	public String idfindPage2() {
		return "member/idfindpage";
	}
	
	@RequestMapping("idfindpages")
	public String idfindPages() {
		return "member/idfindpages";
	}
	
	@RequestMapping("pwdfind")
	public String pwdfindPage() {
		return "member/pwdfind";
	}
	
	@RequestMapping("pwdfindpage")
	public String pwdfindPage2() {
		return "member/pwdfindpage";
	}
	
	@RequestMapping("pwdfindpages")
	public String pwdfindPages() {
		return "member/pwdfindpages";
	}
}
