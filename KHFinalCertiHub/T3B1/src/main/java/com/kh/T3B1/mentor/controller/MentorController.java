package com.kh.T3B1.mentor.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.mentor.service.MentorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/mentor")
public class MentorController {
	
	public final MentorService mentorService;
	
	@RequestMapping("search")
	public String mentorSearchPage(Model m) {
		m.addAttribute("pageName","mentorSearch");
		return "studyroom/mentorSearch";
	}
	
	@RequestMapping("detail")
	public String mentorDetailPage(HttpSession session, Model m, int no) {
		int mentorNo = no;
		
		Member mentor = mentorService.selectMentorDetail(mentorNo);
		
		Member member = (Member)session.getAttribute("loginMember");
		if(member != null) {
			HashMap<String, Integer> searchInfo = new HashMap<>();
			searchInfo.put("memberNo", member.getMemberNo());
			searchInfo.put("mentorNo", mentorNo);
			
			m.addAttribute("isApplied", mentorService.isApplyExist(searchInfo));
			m.addAttribute("optional","Y"); // 로그인 여부 전달
		} else {
			m.addAttribute("optional","N"); // 로그인 여부 전달
		}
		
		m.addAttribute("mentor", mentor);
		m.addAttribute("pageName","mentorDetail");
		return "studyroom/mentorDetail";
	}
	
	// ==================== AJAX 핸들러 =====================
	
	@ResponseBody
	@RequestMapping(value="list", produces="application/json; charset=UTF-8")
	public String selectMentorList(int pageLimit, int currentPage,  String keyword, Integer license, Integer sort) {
		// 요청 한번에 불러올 멘토의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 멘토 페이지라면 DB에서 조회하지 않도록 막아준다
		int mentorCount = mentorService.countMentor();
		if((currentPage - 1) * pageLimit > mentorCount) {
			return null;
		}
		
		// 멘토 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		if(license != null) so.setLicenseNo(license);
		if(sort != null) so.setSortNo(sort);
		
		ArrayList<Member> mentorList = mentorService.selectMentorList(pi, so);
		
		return new Gson().toJson(mentorList);
	}
	
	@ResponseBody
	@RequestMapping(value="licenseList", produces="application/json; charset=UTF-8")
	public String selectLicenseList() {
		// 자격증 목록 조회
		ArrayList<License> licenseList = mentorService.selectLicenseList();
		return new Gson().toJson(licenseList);
	}
	
	@ResponseBody
	@RequestMapping(value="likeMentor", produces="application/json; charset=UTF-8")
	public String likeMentor(HttpSession session, int mentorNo) {
		int memberNo = ((Member) session.getAttribute("loginMember")).getMemberNo();
		
		HashMap<String, Integer> likeInfo = new HashMap<>();
		likeInfo.put("memberNo",memberNo);
		likeInfo.put("mentorNo",mentorNo);
		
		String isLiked = mentorService.checkLike(likeInfo);
		int likeCount = 0;
		
		if(isLiked.equals("Y")) {
			likeCount = mentorService.deleteLikeMentor(likeInfo);
			isLiked = "N";
		} else {
			likeCount = mentorService.likeMentor(likeInfo);
			isLiked = "Y";
		}
		
		HashMap<String, Object> result = new HashMap<>();
		result.put("type",isLiked);
		result.put("likeCount",likeCount);
		
		return new Gson().toJson(result);
	}
	
	@ResponseBody
	@RequestMapping(value="checkLike", produces="application/json; charset=UTF-8")
	public String checkLike(HttpSession session, int mentorNo) {
		// 좋아요를 이미 눌렀는지 정보를 불러온다
		Member member = (Member)session.getAttribute("loginMember");
		String isLiked = "N";
		
		if(member != null) {
			int memberNo = member.getMemberNo();
			HashMap<String, Integer> likeInfo = new HashMap<>();
			likeInfo.put("mentorNo",mentorNo);
			likeInfo.put("memberNo",memberNo);

			// 존재하면 Y, 없다면 N 리턴
			isLiked = mentorService.checkLike(likeInfo);
		}
		
		int likeCount = 0;
		likeCount = mentorService.countMentorLike(mentorNo);

		HashMap<String, Object> result = new HashMap<>();
		result.put("type",isLiked);
		result.put("likeCount",likeCount);
		
		return new Gson().toJson(result);
	}
	
	@ResponseBody
	@RequestMapping(value="applyMentee", produces="application/json; charset=UTF-8")
	public String applyMentee(HttpSession session, int mentorNo) {
		String result = "N"; // 실패 N 성공 Y
		Member member = (Member)session.getAttribute("loginMember");
		
		String mentorValid = mentorService.checkMentorValid(mentorNo);
		
		// 멘토가 현재 멘티 신청을 받는 중인지 확인한다
		if(mentorValid.equals("Y")) {
			HashMap<String, Integer> insertInfo = new HashMap<>();
			insertInfo.put("memberNo",member.getMemberNo());
			insertInfo.put("mentorNo",mentorNo);

			result = mentorService.insertApply(insertInfo);
		}
		
		HashMap<String, String> resultObj = new HashMap<>();
		resultObj.put("success",result);

		return new Gson().toJson(resultObj);
	}

}
