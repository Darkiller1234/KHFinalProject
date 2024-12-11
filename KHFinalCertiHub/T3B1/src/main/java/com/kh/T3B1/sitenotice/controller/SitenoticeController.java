package com.kh.T3B1.sitenotice.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.sitenotice.service.SitenoticeService;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/notice")
public class SitenoticeController {
	
	public final SitenoticeService noticeService;
	
	@RequestMapping("notice")
	public String noticePage(Model m) {
		m.addAttribute("pageName", "noticePage");
		return "sitenotice/notice";
	}
	
	@RequestMapping("noticepost") 
	public String noticepostPage() {
		return "sitenotice/noticepost";
	}
	
	@RequestMapping("noticewrite") 
	public String noticewritePage(Model m) {
		m.addAttribute("pageName","noticeWrite");
		return "sitenotice/noticewrite";
	}
	
	@ResponseBody
	@PostMapping(value="boardList", produces="application/json; charset=UTF-8")
	public String selectBoardList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = noticeService.countBoard(keyword);
		if((currentPage - 1) * pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<StudyBoard> boardList = noticeService.selectBoardList(pi, so);
		HashMap<String, String> jsonData =  new HashMap<>();
		jsonData.put("board", new Gson().toJson(boardList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	
}
