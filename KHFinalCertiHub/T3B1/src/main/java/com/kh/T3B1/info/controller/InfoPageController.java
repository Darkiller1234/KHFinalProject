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
import com.kh.T3B1.info.model.service.SearchService;

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
	public String searchPage(
	    @RequestParam(value="keyword", defaultValue="") String keyword,
	    @RequestParam(value="cpage", defaultValue="1") int currentPage,
	    Model m 
	) {
	    int SearchCount = searchService.selectResultCount(keyword);
	    PageInfo pi = Template.getPageInfo(SearchCount, currentPage, 10, 5);
	    ArrayList<License> list = searchService.selectListResult(pi, keyword);
	    
	    m.addAttribute("list", list);
	    m.addAttribute("pi", pi);
	    return "infoPage/searchPage";
	}

	// 정보창으로 이동
	@RequestMapping("lib")
	public String infoPage(Model m) {
		m.addAttribute("pageName", "infoPage");
		return "infoPage/infoPage";
	}
}
