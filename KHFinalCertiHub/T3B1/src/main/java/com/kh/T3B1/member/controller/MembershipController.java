package com.kh.T3B1.member.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.kh.T3B1.member.model.service.MemberService;
import com.kh.T3B1.member.model.vo.Member;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/member")
public class MembershipController {
	
	private final MemberService memberService;
	private final BCryptPasswordEncoder bcryptPasswordEncoder;
	
	@Autowired
	public MembershipController(MemberService memberService, BCryptPasswordEncoder bcryptPasswordEncoder) {
		this.memberService = memberService;
		this.bcryptPasswordEncoder = bcryptPasswordEncoder;
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
	
	@ResponseBody
	@RequestMapping("nicknameCheck.me")
	public String nicknameCheck(String checknickName) {
		int result = memberService.nicknameCheck(checknickName);
		
		if(result > 0) {
			return "NN";
		}else {
			return "NY";
		}
	}
	
	

	@RequestMapping("join")
	public String membershipPage(Member m, HttpSession session, Model model) {
		String encodePwd = bcryptPasswordEncoder.encode(m.getMemberPwd());
		m.setMemberPwd(encodePwd);
		
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
	
	@RequestMapping("login.me")
	public ModelAndView loginMember(Member m, HttpSession session, ModelAndView mv, String saveId, HttpServletResponse response) {
		
		Member loginMember = memberService.loginMember(m);
		
		if(loginMember == null) {
			
			mv.addObject("errorMsg","아이디가 틀렸습니다.");
			mv.setViewName("member/login");
		}else if(!bcryptPasswordEncoder.matches(m.getMemberPwd(),loginMember.getMemberPwd())) {
			
			mv.addObject("errorMsg","비밀번호가 틀렸습니다.");
			mv.setViewName("member/login");
		}else {
			Cookie ck = new Cookie("saveId", loginMember.getMemberId());
			if(saveId == null) {
				ck.setMaxAge(0);
			}
			response.addCookie(ck);
			
			session.setAttribute("loginMember", loginMember);
			
			mv.setViewName("redirect:/main");
			
		}
		
		return mv;
	}
	
	@RequestMapping("logout.me")
	public String logoutMember(HttpSession session) {
		session.removeAttribute("loginMember");
		
		return "redirect:/main";
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
