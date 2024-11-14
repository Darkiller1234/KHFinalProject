package com.kh.T3B1.mentor.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
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

@RequiredArgsConstructor
@Controller
@RequestMapping("/mentor")
public class MentorController {
	
	@Autowired
	public final MentorService mentorService;
	
	@RequestMapping("search")
	public String mentorSearchPage(Model m) {
		m.addAttribute("pageName","mentorSearch");
		return "studyroom/mentorSearch";
	}
	
	@RequestMapping("detail")
	public String mentorDetailPage(Model m, int no) {
		int memberNo = no;
		
		Member mentor = mentorService.selectMentorDetail(memberNo);
		int mentorLike = mentorService.countMentorLike(memberNo);
		mentor.setMentorLike(mentorLike);
		
		m.addAttribute("mentor", mentor);
		m.addAttribute("pageName","mentorDetail");
		return "studyroom/mentorDetail";
	}
	
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
	@RequestMapping(value="likeMentor")
	public int likeMentor(HttpSession session, int mentorNo) {
		int memberNo = ((Member) session.getAttribute("loginMember")).getMemberNo();
		
		HashMap<String, Integer> likeInfo = new HashMap<>();
		likeInfo.put("memberNo",memberNo);
		likeInfo.put("mentorNo",mentorNo);
		
		// 좋아요 증가에 성공했다면 result > 0
		int result = mentorService.likeMentor(likeInfo);
		
		return result;
	}

}
