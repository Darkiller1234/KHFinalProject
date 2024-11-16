package com.kh.T3B1.study.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;
import com.kh.T3B1.study.service.StudyService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@RequestMapping("/study")
public class StudyController {
	
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
	public String studyBoardViewPage(Model m, int no) {
		StudyBoard studyBoard = studyService.selectBoard(no);
		
		m.addAttribute("board",studyBoard);
		m.addAttribute("pageName","studyBoardView");
		return "studyroom/studyBoardView";
	}
	
	@RequestMapping("write")
	public String studyWritePage(Model m) {
		m.addAttribute("pageName","studyWrite");
		return "studyroom/studyWrite";
	}
	
	@PostMapping("insertBoard")
	public String insertBoard(StudyBoard board, HttpSession session) {
		
		return "redirect:main";
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
		SearchOption so = new SearchOption(); // defaultValue로 변경 예정 
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		if(recruit != null && !recruit.equals("")) so.setRecruit(recruit);
		if(sort != null) so.setSortNo(sort);
		
		ArrayList<Study> studyList = studyService.selectStudyList(pi, so);
		
		return new Gson().toJson(studyList);
	}
	
	@ResponseBody
	@RequestMapping(value="memberList", produces="application/json; charset=UTF-8")
	public String selectStudyMemberList(int pageLimit, int currentPage,  String keyword, int no) {
		// 요청 한번에 불러올 스터디 그룹의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 회원 페이지라면 DB에서 조회하지 않도록 막아준다
		int memberCount = studyService.countStudyMember(no);
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
		so.setNo(no);
		
		ArrayList<Member> memberList = studyService.selectStudyMemberList(pi, so);
		
		return new Gson().toJson(memberList);
	}
	
	
	@ResponseBody
	@RequestMapping(value="boardList", produces="application/json; charset=UTF-8")
	public String selectBoardList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = studyService.countBoard(keyword);
		if((currentPage - 1) * pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<StudyBoard> boardList = studyService.selectBoardList(pi, so);
		HashMap<String, String> jsonData =  new HashMap<>();
		jsonData.put("board", new Gson().toJson(boardList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	//ajax로 파일 업로드
	//파일목록을 저장하고 저장된 파일명목록 반환
	@ResponseBody
	@PostMapping("uploadImg")
	public String upload(List<MultipartFile> fileList, HttpSession session) {
		System.out.println(fileList);
		
		List<String> changeNameList = new ArrayList<>();
		for(MultipartFile f : fileList) {
			changeNameList.add(Template.saveFile(f, session, "/resources/static/img/studyBoard/"));
		}
		
		return new Gson().toJson(changeNameList);
	}
}
