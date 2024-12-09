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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.member.service.MemberService;
import com.kh.T3B1.personal.model.vo.Calendar2;
import com.kh.T3B1.personal.model.vo.FullCalendarVo;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.personal.service.PersonalService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/personal")
public class PersonalPageController {
	
	private final PersonalService personalService;
	
	private final MemberService memberService;
	
	private final BCryptPasswordEncoder bcryptPasswordEncoder;
	
	@Autowired
	public PersonalPageController(PersonalService personalService, MemberService memberService, BCryptPasswordEncoder bcryptPasswordEncoder) {
		this.personalService = personalService;
		this.memberService = memberService;
		this.bcryptPasswordEncoder = bcryptPasswordEncoder;
	}
	
	@RequestMapping("view")
	public String PersonalPageView(Model p, @RequestParam(value="pno", defaultValue="0") int pno) {
		if(pno<=0) {
			return"redirect:error";
		}
		p.addAttribute("pageName", "personalView");
		p.addAttribute("pno", pno);
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
	public String PersonalPageViewSchedule(int pno,Model p) {
		if(pno<=0) {
			return"redirect:error";
		}
		p.addAttribute("pageName", "personalViewSchedule");
		p.addAttribute("pno", pno);
		return "personal/anotherPageViewSchedule";
	}
	
	@ResponseBody
	@RequestMapping(value="viewSc/scLoad", produces="application/json; charset-UTF-8")
	public String viewScLoad(int pno, HttpSession session) {
		ArrayList<FullCalendarVo> list = personalService.ScLoad(pno);
		
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="viewSc/getCurrentDateInfo", produces="application/json; charset-UTF-8")
	public String viewGetCurrentDateInfo(String date, int pno, HttpSession session) {
		ArrayList<FullCalendarVo> list = personalService.getCurrentDateInfo(pno, date);
		
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="viewSc/memberCheck", produces="application/json; charset-UTF-8")
	public String memberCheck(String date, int pno, HttpSession session) {
		Member m = personalService.ajaxGetMemberInfo(pno);
		return new Gson().toJson(m);
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
	
	@ResponseBody
	@RequestMapping(value="makeSc/scLoad", produces="application/json; charset-UTF-8")
	public String ScLoad(HttpSession session) {
		log.info(Integer.toString(((Member)session.getAttribute("loginMember")).getMemberNo()));
		ArrayList<FullCalendarVo> list = personalService.ScLoad(((Member)session.getAttribute("loginMember")).getMemberNo());
		
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="makeSc/getCurrentDateInfo", produces="application/json; charset-UTF-8")
	public String GetCurrentDateInfo(String date, HttpSession session) {
		ArrayList<FullCalendarVo> list = personalService.getCurrentDateInfo(((Member)session.getAttribute("loginMember")).getMemberNo(), date);
		
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="makeSc/deleteSc", produces="application/json; charset-UTF-8")
	public String DeleteSc(int calendarNo, HttpSession session) {
		
		int result = personalService.deleteSc(((Member)session.getAttribute("loginMember")).getMemberNo(), calendarNo);
		
		return new Gson().toJson(result); 
	}
	
	@ResponseBody
	@RequestMapping(value="makeSc/insertSc", produces="application/json; charset-UTF-8")
	public String InsertSc(FullCalendarVo cal, HttpSession session) {
		cal.setMemberNo(((Member)session.getAttribute("loginMember")).getMemberNo());
		int result = personalService.insertSc(cal);
		
		return new Gson().toJson(result); 
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
		m.setMemberIntro(intro.replaceAll("(?:\\r\\n|\\r|\\n)", "<br>"));
		
		
		
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
	
	@ResponseBody
	@RequestMapping(value="profile/getCertiList", produces="application/json; charset-UTF-8")
	public String getCertiList(HttpSession session) {
		ArrayList<String> certiList = personalService.selectCertiList();
		return new Gson().toJson(certiList);
	}
	
	
	
	@RequestMapping("mentor")
	public String PersonalMentorPage(Model p, HttpSession session) {
		if(((Member)session.getAttribute("loginMember")).getMentorStatus().equals("N")) {
			return "redirect:/personal/mentor/enroll";
		}
		p.addAttribute("pageName","personalMentor");
		return "personal/personalMentor";
	}
	
	@RequestMapping("mentor/enroll")
	public String PersonalMentorEnrollPage(Model p, HttpSession session) {
		if(((Member)session.getAttribute("loginMember")).getMentorStatus().equals("Y")) {
			return "redirect:/personal/mentor";
		}
		
		p.addAttribute("pageName","personalMentorEnroll");
		return "personal/personalMentorEnroll";
	}
	
	@ResponseBody
	@RequestMapping(value="mentor/getStatus", produces="application/json; charset-UTF-8")
	public String ajaxGetMemberStatus(HttpSession session) {
		Member m = new Member();
		Member temp = (Member)session.getAttribute("loginMember");
		m.setMemberImg(temp.getMemberImg());
		m.setMemberNickname(temp.getMemberNickname());
		m.setMemberIntro(temp.getMemberIntro());
		m.setMentorValid(temp.getMentorValid());
		m.setMentorIntro(temp.getMentorIntro());
		m.setCareer(temp.getCareer());
		return new Gson().toJson(m);
	}
	
	@ResponseBody
	@RequestMapping(value="mentor/getHaveLicense", produces="application/json; charset-UTF-8")
	public String ajaxGetHaveLicense(HttpSession session) {
		ArrayList<License2> list = personalService.haveLicense(((Member)session.getAttribute("loginMember")).getMemberNo());
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="mentor/setMentorEnroll", produces="application/json; charset-UTF-8")
	public String ajaxSetMentorEnroll(String career, String intro, String licenseName, HttpSession session) {
		int pno = ((Member)session.getAttribute("loginMember")).getMemberNo();
		Member temp = new Member();
		temp.setCareer(career);
		temp.setMentorIntro(intro);
		temp.setMemberNo(pno);
		
		int result = personalService.ajaxSetMentorEnroll(temp);
		
		int result2 = personalService.setSymbolLicense(licenseName, ((Member)session.getAttribute("loginMember")).getMemberNo());
		if(result == 1 && result2 ==1) {
			Member m = (Member)session.getAttribute("loginMember");
			m.setCareer(career);
			m.setMentorIntro(intro);
			m.setMentorStatus("Y");
			session.setAttribute("loginMember", m);
			return new Gson().toJson(1);
		}
		return new Gson().toJson(0);
	}
	
	@ResponseBody
	@RequestMapping(value="mentor/getLikeCount", produces="application/json; charset-UTF-8")
	public String ajaxGetMentorLikeCount(HttpSession session) {
		
		
		int likeCount = personalService.getLikeCount(((Member)session.getAttribute("loginMember")).getMemberNo());

		return new Gson().toJson(likeCount);
	}
	
	@ResponseBody
	@RequestMapping(value="mentor/setMentor", produces="application/json; charset-UTF-8")
	public String ajaxSetMentor(String career, String intro, String liName, String valid, HttpSession session) {
		Member temp = (Member)session.getAttribute("loginMember");
		temp.setCareer(career);
		temp.setMentorIntro(intro);
		if(valid.equals("질문가능")) {
			temp.setMentorValid("Y");
		} else {
			temp.setMentorValid("N");
		}
		
		int result = personalService.ajaxSetMentor(temp);
		
		int result2 = personalService.setSymbolLicense(liName, ((Member)session.getAttribute("loginMember")).getMemberNo());
		session.setAttribute("loginMember", temp);
		return new Gson().toJson(1);
	}
	
	
	
	@RequestMapping("Change")
	public String PersonalChange(HttpSession session) {		// 세션에서 비밀번호 사라지면 수정해야함
		
		if(((Member)session.getAttribute("loginMember")).getSocial() != null && !((Member)session.getAttribute("loginMember")).getSocial().equals("")) {
			session.setAttribute("changeEnterCheck", true);
			return "redirect:/personal/ChangePage";
		}
		return "/personal/personalChange";
	}
	
	@ResponseBody
	@RequestMapping(value="Change/checkPwd", produces="application/json; charset-UTF-8")
	public int ajaxCheckPwd(String pwd, HttpSession session) {
		
		int result = bcryptPasswordEncoder.matches(pwd, ((Member)session.getAttribute("loginMember")).getMemberPwd())?1:0;
		session.setAttribute("changeEnterCheck", true);
		
		return result;
	}
	
	@RequestMapping("ChangePage")
	public String PersonalChangePage(HttpSession session, Model p) {
		if(session.getAttribute("changeEnterCheck") != null && (boolean)session.getAttribute("changeEnterCheck")) {
//			session.setAttribute("changeEnterCheck", false);
			p.addAttribute("pageName","personalChangePage");
			return "personal/personalChangePage";
		}
		return "redirect:/personal/Change";
	}
	
	@ResponseBody
	@RequestMapping(value="ChangePage/getInitData", produces="application/json; charset-UTF-8")
	public String ajaxGetInitData(HttpSession session) {
		
		Member temp = ((Member)session.getAttribute("loginMember"));
		
		Member m = new Member();
		m.setMemberName(temp.getMemberName());
		m.setEmail(temp.getEmail());
		m.setPhone(temp.getPhone());
		
		return new Gson().toJson(m);
	}
	
	@ResponseBody
	@RequestMapping(value="ChangePage/setUpdateData", produces="application/json; charset-UTF-8")
	public String ajaxSetUpdateData(String name,
			String email,
			String phone,
			HttpSession session) {
		
		Member temp = ((Member)session.getAttribute("loginMember"));
		
		temp.setEmail(email);
		temp.setPhone(phone);
		temp.setMemberName(name);
		
		int result = personalService.updateMember(temp);
		if(result == 1) {
			session.setAttribute("loginMember", temp);
			return new Gson().toJson(result);
		} else {
			return new Gson().toJson(result);
		}
		
		
	}
	
	@ResponseBody
	@RequestMapping(value="ChangePage/submitChange", produces="application/json; charset-UTF-8")
	public String ajaxSubmitChange(String pwd,
			String newPwd,
			HttpSession session) {
		
		Member temp = ((Member)session.getAttribute("loginMember"));
		
		if(bcryptPasswordEncoder.matches(pwd, ((Member)session.getAttribute("loginMember")).getMemberPwd())) {
			temp.setMemberPwd(bcryptPasswordEncoder.encode(newPwd));
			int result = personalService.ajaxSubmitChange(temp);
			if(result == 1) {
				session.setAttribute("loginMember", temp);
				return new Gson().toJson(result);
			} else {
				return new Gson().toJson(result);
			}
		} else {
			return new Gson().toJson(-1);
		}
	}
	
	@ResponseBody
	@RequestMapping(value="ChangePage/submitDelete", produces="application/json; charset-UTF-8")
	public String ajaxSubmitDelete(String pwd,
			HttpSession session) {
		
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		if(((Member)session.getAttribute("loginMember")).getSocial() != null && ((Member)session.getAttribute("loginMember")).getSocial().equals('N')) {
			int result = personalService.ajaxSubmitDelete(memberNo);
			if(result == 1) {
				session.removeAttribute("loginMember");
				return new Gson().toJson(result);
			} else {
				return new Gson().toJson(result);
			}
		} else {
			if(bcryptPasswordEncoder.matches(pwd, ((Member)session.getAttribute("loginMember")).getMemberPwd())) {
				int result = personalService.ajaxSubmitDelete(memberNo);
				if(result == 1) {
					session.removeAttribute("loginMember");
					return new Gson().toJson(result);
				} else {
					return new Gson().toJson(result);
				}
			} else {
				return new Gson().toJson(-1);
			}
		}
		
	}

}
