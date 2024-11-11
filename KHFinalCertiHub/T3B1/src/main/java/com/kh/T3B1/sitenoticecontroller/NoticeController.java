package com.kh.T3B1.sitenoticecontroller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/notice")
public class NoticeController {
	
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
