package com.kh.T3B1.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.T3B1.info.model.service.SearchService;
import com.kh.T3B1.info.model.vo.License;

@Controller
public class InfoPageController {
	
	@Autowired
	private SearchService searchService;
	
	//검색 페이지로 이동
	  @RequestMapping("search")
	    public String searchPage(@RequestParam(value = "keyword", required = false) String keyword,
	                             @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber,
	                             @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
	                             Model model) {
	        
	        // 키워드가 존재하면, 검색 수행
	        if (keyword != null && !keyword.trim().isEmpty()) {
	            // 검색된 자격증 목록 (페이징)
	            List<License> licenses = searchService.searchLicenseList(keyword, pageSize, pageNumber);
	            
	            // 전체 검색 결과 개수
	            int totalResults = searchService.searchLicenseCount(keyword);
	            
	            // 전체 페이지 수 계산
	            int totalPages = (int) Math.ceil((double) totalResults / pageSize);
	            
	            // 모델에 결과 및 페이징 정보 추가
	            model.addAttribute("licenses", licenses);  // 자격증 목록
	            model.addAttribute("totalPages", totalPages);  // 총 페이지 수
	            model.addAttribute("currentPage", pageNumber);  // 현재 페이지
	            model.addAttribute("keyword", keyword);  // 검색 키워드
	        }

	        return "infoPage/searchPage";  // 동일한 JSP 파일로 반환
	  }
	
	
	

	//정보창으로 이동
	@RequestMapping("info")
	public String infoPage(Model m) {
		m.addAttribute("pageName", "infoPage");
		return "infoPage/infoPage";
	}
	
}