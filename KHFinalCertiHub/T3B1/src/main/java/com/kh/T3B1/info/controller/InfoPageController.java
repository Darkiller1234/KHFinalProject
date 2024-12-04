package com.kh.T3B1.info.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.info.service.SearchService;

@Controller
@RequestMapping("info/")
public class InfoPageController {

	private final SearchService searchService;

	@Autowired
	public InfoPageController(SearchService searchService) {
		this.searchService = searchService;
	}

	// 검색 페이지로 이동
	@RequestMapping("search")
	public String searchPage(@RequestParam(value = "keyword", defaultValue = "") String keyword,
			@RequestParam(value = "cpage", defaultValue = "1") int currentPage, Model m) {
		// 검색 결과의 총 개수 조회
		int searchCount = searchService.selectResultCount(keyword);

		// 페이지 정보 객체 생성 (현재 페이지, 총 검색 개수, 한 페이지당 항목 수, 페이지 범위)
		PageInfo pi = Template.getPageInfo(searchCount, currentPage, 10, 5);
		
		// 검색 결과 목록 조회
		ArrayList<License> list = searchService.selectListResult(pi, keyword);

		// 모델에 데이터를 추가
		m.addAttribute("list", list); // 검색 결과 목록
		m.addAttribute("pi", pi); // 페이징 정보
		m.addAttribute("keyword", keyword); // 검색 키워드 (페이징 후에도 검색어가 유지되도록)
		m.addAttribute("pageName", "searchPage");

		// 검색 페이지로 이동
		return "infoPage/searchPage";
	}  

	// 정보창으로 이동
	@RequestMapping("lib")
	public String infoPage(Model m) {
		m.addAttribute("pageName", "infoPage");
		return "infoPage/infoPage";
	}
	
	@RequestMapping("board")
	public String boardPage(Model m) {
		m.addAttribute("pageName","boardPage");
		return "infoPage/boardPage";
	}
}
