package com.kh.T3B1.personal.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.License2;
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
		
		Member m = personalService.ajaxGetMemberInfo(pno);
		return new Gson().toJson(m);
	}
	
	
	@ResponseBody
	@RequestMapping(value="view/getMentorSubInfo", produces="application/json; charset-UTF-8")
	public String ajaxGetMentorSubInfo(int pno, HttpSession session) {
		
		
		if(session.getAttribute("loginMember") == null) {
			return new Gson().toJson(-1);
		}
		int mNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		int result = personalService.ajaxGetMentorSubInfo(pno, mNo);
		return new Gson().toJson(result);
	}
	
	@ResponseBody
	@RequestMapping(value="view/insertMentorSub", produces="application/json; charset-UTF-8")
	public String ajaxInsertMentorSub(int pno, HttpSession session) {
		
		
		if(session.getAttribute("loginMember") == null) {
			return new Gson().toJson(-1);
		}
		int mNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		int result = personalService.ajaxInsertMentorSub(pno, mNo);
		return new Gson().toJson(result);
	}

	@ResponseBody
	@RequestMapping(value="view/getLikeStatus", produces="application/json; charset-UTF-8")
	public String ajaxGetLikeStatus(int pno, HttpSession session) {
		
		
		int likeCount = personalService.getLikeCount(pno);
		int likeStatus;
		
		if(session.getAttribute("loginMember") == null) {
			likeStatus = -1;
		} else {
			likeStatus = personalService.getLikeStatus(pno, ((Member)session.getAttribute("loginMember")).getMemberNo());
		}
		Map<String, Object> params = new HashMap<>();
		params.put("likeStatus", likeStatus);
		params.put("likeCount", likeCount);
		return new Gson().toJson(params);
	}
	
	@ResponseBody
	@RequestMapping(value="view/likebtnClick", produces="application/json; charset-UTF-8")
	public String ajaxLikebtnClick(int pno, HttpSession session) {
		
		if(session.getAttribute("loginMember") == null) {
			return new Gson().toJson(-1);
		}
		return new Gson().toJson(personalService.likebtnClick(pno, ((Member)session.getAttribute("loginMember")).getMemberNo()));
	}
	
	@ResponseBody
	@RequestMapping(value="view/haveLicense", produces="application/json; charset-UTF-8")
	public String ajaxHaveLicense(int pno, HttpSession session) {
		ArrayList<License2> list = personalService.haveLicense(pno);
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="view/lookLicense", produces="application/json; charset-UTF-8")
	public String ajaxLookLicense(int pno, HttpSession session) {
		ArrayList<License2> list = personalService.lookLicense(pno);
		return new Gson().toJson(list);
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
