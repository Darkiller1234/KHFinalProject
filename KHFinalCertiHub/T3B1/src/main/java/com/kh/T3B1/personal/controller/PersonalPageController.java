package com.kh.T3B1.personal.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.community.service.CommunityService;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.service.PersonalService;

@Controller
@RequestMapping("/personal")
public class PersonalPageController {
	
	private final PersonalService personalService;
	
	@Autowired
	public PersonalPageController(PersonalService personalService) {
		this.personalService = personalService;
	}
	
	@RequestMapping("view")
	public String PersonalPageView(Model p, @RequestParam(value="pno", defaultValue="0") int pno) {
		if(pno<=0) {
			return"redirect:error";
		}
		p.addAttribute("pageName", "personalView");
		return "personal/anotherPageView";
	}
	
	@ResponseBody
	@RequestMapping(value="view/getMemberInfo", produces="application/json; charset-UTF-8")
	public String ajaxGetMemberInfo(int pno, HttpSession session) {
		
		Member User = (Member)session.getAttribute("loginMember");
		int likeStatus = communityService.ajaxCommunityLikeStatusJson(cno, User.getMemberNo());
		return new Gson().toJson(likeStatus);
	}
	
	@RequestMapping("viewSc")
	public String PersonalPageViewSchedule(Model p) {
		p.addAttribute("pageName", "personalViewSchedule");
		return "personal/anotherPageViewSchedule";
	}
	
	@RequestMapping("certiRegi")
	public String PersonalPageCertiRegistry(Model p) {
		p.addAttribute("pageName", "personalCertiRegi");
		return "personal/personalCertiRegi";
	}
	
	@RequestMapping("makeSc")
	public String PersonalPageMakeSchedule(Model p) {
		p.addAttribute("pageName", "PersonalPmSc");
		return "personal/personalMakeSc";
	}
	
	@RequestMapping("profile")
	public String PersonalProfileEditPage(Model p) {
		p.addAttribute("pageName","personalProfileEdit");
		return "personal/personalProfileEdit";
	}
	
	@RequestMapping("mentor")
	public String PersonalMentorPage(Model p) {
		// 멘토 가입했다면 personalMentor, 가입하지 않았다면 personalMentorEnroll 페이지로
		p.addAttribute("pageName","personalMentor");
		return "personal/personalMentor";
	}
	
	@RequestMapping("Change")
	public String PersonalChange() {
		return "personal/personalChange";
	}
	
	@RequestMapping("ChangePage")
	public String PersonalChangePage() {
		return "personal/personalChangePage";
	}

}
