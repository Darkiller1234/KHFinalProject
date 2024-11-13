package com.kh.T3B1.study.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.service.StudyService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@RequestMapping("/study")
public class StudyController {
	
	@Autowired
	public final StudyService studyService;
	
	@RequestMapping("search")
	public String studySearchPage(Model m) {
		m.addAttribute("pageName","studySearch");
		return "studyroom/studySearch";
	}
	
	@RequestMapping("create")
	public String studyCreatePage(Model m) {
		m.addAttribute("pageName","studyCreatePage");
		return "studyroom/studyCreate";
	}
	
	@RequestMapping("detail")
	public String studyDetailPage(Model m, int no) {
		Study study = studyService.selectStudy(no);
		
		m.addAttribute("study",study);
		m.addAttribute("pageName","studyDetail");
		return "studyroom/studyDetail";
	}
	
	@RequestMapping("detail/edit")
	public String studyDetailEditPage(Model m) {
		m.addAttribute("pageName","studyDetailEdit");
		return "studyroom/studyDetailEdit";
	}
	
	@RequestMapping("list")
	public String studyBoardPage(Model m) {
		m.addAttribute("pageName","studyBoard");
		return "studyroom/studyBoard";
	}
	
	@RequestMapping("board")
	public String studyBoardViewPage(Model m) {
		m.addAttribute("pageName","studyBoardView");
		return "studyroom/studyBoardView";
	}
	
	@RequestMapping("write")
	public String studyWritePage(Model m) {
		m.addAttribute("pageName","studyWrite");
		return "studyroom/studyWrite";
	}
	
	@ResponseBody
	@RequestMapping(value="studyList", produces="application/json; charset=UTF-8")
	public String selectMentorList(int pageLimit, int currentPage,  String keyword, String recruit, Integer sort) {
		// 요청 한번에 불러올 스터디 그룹의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 스터디 페이지라면 DB에서 조회하지 않도록 막아준다
		int studyCount = studyService.countStudy();
		if((currentPage - 1) * pageLimit > studyCount) {
			return null;
		}
		
		// 스터디 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		if(recruit != null && !recruit.equals("")) so.setRecruit(recruit);
		if(sort != null) so.setSortNo(sort);
		
		ArrayList<Study> studyList = studyService.selectStudyList(pi, so);
		System.out.println(studyList);
		
		return new Gson().toJson(studyList);
	}
	
	@ResponseBody
	@RequestMapping(value="memberList", produces="application/json; charset=UTF-8")
	public String selectStudyMemberList(int pageLimit, int currentPage,  String keyword) {
		// 요청 한번에 불러올 스터디 그룹의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 회원 페이지라면 DB에서 조회하지 않도록 막아준다
		int memberCount = studyService.countStudyMember();
		if((currentPage - 1) * pageLimit > memberCount) {
			return null;
		}
		
		// 스터디 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<Study> studyList = studyService.selectStudyList(pi, so);
		System.out.println(studyList);
		
		return new Gson().toJson(studyList);
	}
}
