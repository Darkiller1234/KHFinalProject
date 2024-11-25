package com.kh.T3B1.personal.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.kh.T3B1.member.model.service.MemberService;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.personal.service.PersonalService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/personal")
public class PersonalPageController {
	
	private final PersonalService personalService;
	
	private final MemberService memberService;
	
	@Autowired
	public PersonalPageController(PersonalService personalService, MemberService memberService) {
		this.personalService = personalService;
		this.memberService = memberService;
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
	
	@ResponseBody
	@RequestMapping(value="certiRegi/getNotOwnCertiList", produces="application/json; charset-UTF-8")
	public String GetNotOwnCertiList(HttpSession session) {
		int pno = ((Member)session.getAttribute("loginMember")).getMemberNo();
		
		ArrayList<String> list = personalService.getNotOwnCertiList(pno);
		
		
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="certiRegi/regi", produces="application/json; charset-UTF-8")
	public String regiCerti(@RequestParam(value="memberImg") MultipartFile certiImg,
			@RequestParam(value="licenseName") String licenseName, HttpSession session) {
		
		int licenseNo = personalService.getLicenseNo(licenseName);
		License2 dump = new License2();
		dump.setLicenseNo(licenseNo);
		dump.setMemberNo(((Member)session.getAttribute("loginMember")).getMemberNo());

		if (certiImg != null && !certiImg.isEmpty()) {
			
			//파일원본명
			String originName = certiImg.getOriginalFilename(); 
			
			//확장자
			String ext = originName.substring(originName.lastIndexOf("."));
			
			//년월일시분초
			String currentTime = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
			
			//5자리 랜덤값
			int randNum = (int)(Math.random() * 90000) + 10000;
			
			String changeName = currentTime + "_" + randNum + ext;
			
			//첨부파일 저장할 폴더의 물리적 경로
			String savePath = session.getServletContext().getRealPath("/resources/static/img/license/");
			try {
				certiImg.transferTo(new File(savePath + changeName));
			} catch (IllegalStateException | IOException e) {
				return new Gson().toJson(-1);
			}
			dump.setLicenseImg("/resources/static/img/license/" + changeName);
        }
		
		int result = personalService.saveLicenseEnroll(dump); 
		
		return new Gson().toJson(1);
		
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
	
	
	@ResponseBody
	@RequestMapping(value="proflie/save", produces="application/json; charset-UTF-8")
	public String SaveProfile(@RequestParam(value = "memberImg", required = false) MultipartFile memberImg,
			@RequestParam("nickName") String nickName,
			@RequestParam("intro") String intro,
			@RequestParam("licenseNames") String licenseNamesJson, HttpSession session) {
		
		if(nickName == "") {
			return new Gson().toJson(-2);
		}
		
		int result = memberService.nicknameCheck(nickName);
		Gson gson = new Gson();
		ArrayList<String> licenseNames = gson.fromJson(licenseNamesJson, new TypeToken<List<String>>(){}.getType());
		
		if(licenseNames.size() != 0) {
			for(int i = 0; i < licenseNames.size(); i++) {
				personalService.insertLookLicense(((Member)session.getAttribute("loginMember")).getMemberNo(), licenseNames.get(i));
			}
		}
		
		
		if(result > 0 )  {
			if(((Member)session.getAttribute("loginMember")).getMemberNickname().equals(nickName)) {
				
			}else {
				return new Gson().toJson(-1);
			}

		}
		
		Member m = ((Member)session.getAttribute("loginMember"));
		m.setMemberNickname(nickName);
		m.setMemberIntro(intro);
		
		
		
		if (memberImg != null && !memberImg.isEmpty()) {
			
			//파일원본명
			String originName = memberImg.getOriginalFilename(); 
			
			//확장자
			String ext = originName.substring(originName.lastIndexOf("."));
			
			//년월일시분초
			String currentTime = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
			
			//5자리 랜덤값
			int randNum = (int)(Math.random() * 90000) + 10000;
			
			String changeName = currentTime + "_" + randNum + ext;
			
			//첨부파일 저장할 폴더의 물리적 경로
			String savePath = session.getServletContext().getRealPath("/resources/static/img/profile/");
			try {
				memberImg.transferTo(new File(savePath + changeName));
			} catch (IllegalStateException | IOException e) {
				return new Gson().toJson(-3);
			}
			m.setMemberImg("/resources/static/img/profile/" + changeName);
        }
		
		result = personalService.saveProfile(m);
		if(result <= 0) {
			return new Gson().toJson(0);
		}
		return new Gson().toJson(1);
	}
	
	
	@ResponseBody
	@RequestMapping(value="profile/lookLicense", produces="application/json; charset-UTF-8")
	public String ajaxProfileLookLicense(HttpSession session) {
		ArrayList<License2> list = personalService.lookLicense(((Member)session.getAttribute("loginMember")).getMemberNo());
		return new Gson().toJson(list);
	}
	
	
	
	@RequestMapping("mentor")
	public String PersonalMentorPage(Model p) {
		// 멘토 가입했다면 personalMentor, 가입하지 않았다면 personalMentorEnroll 페이지로
		p.addAttribute("pageName","personalMentor");
		return "personal/personalMentor";
	}
	
	@RequestMapping("mentor/enroll")
	public String PersonalMentorEnrollPage(Model p) {
		// 멘토 가입했다면 personalMentor, 가입하지 않았다면 personalMentorEnroll 페이지로
		p.addAttribute("pageName","personalMentorEnroll");
		return "personal/personalMentorEnroll";
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
