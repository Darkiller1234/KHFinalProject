package com.kh.T3B1.sitenotice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/notice")
public class SitenoticeController {
	
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
	
}
