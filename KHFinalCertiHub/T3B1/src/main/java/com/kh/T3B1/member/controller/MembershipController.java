package com.kh.T3B1.member.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.T3B1.member.model.service.MemberService;
import com.kh.T3B1.member.model.vo.Member;

@Controller
@RequestMapping("/member")
public class MembershipController {
	
	private final MemberService memberService;
	
	@Autowired
	public MembershipController(MemberService memberService) {
		this.memberService = memberService;
		
	}
	
	@RequestMapping("membership")
	public String membershipPage() {
		return "member/membership";
	}
	
	@ResponseBody
	@RequestMapping("idCheck.me")
	public String idCheck(String checkId) {
		int result = memberService.idCheck(checkId);
		
		if(result > 0) { // id 존재
			return "NNNNN";
		}else {
			return "NNNNY";
		}
	}
	

	@RequestMapping("join")
	public String membershipPage(Member m, HttpSession session, Model model) {
		
		int result = memberService.membershipPage(m);
		
		if(result > 0) {
			session.setAttribute("alertMsg", "회원가입 성공");
			return "redirect:/member/login";
		}else {
			model.addAttribute("errorMsg", "회원가입 실패");
			return "redirect:/membership";
		}
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
