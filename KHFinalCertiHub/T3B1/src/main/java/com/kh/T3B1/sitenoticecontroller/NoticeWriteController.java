package com.kh.T3B1.sitenoticecontroller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NoticeWriteController {
	
	@RequestMapping("noticewrite") 
	public String mainPage(Model m) {
		m.addAttribute("pageName","noticeWrite");
		return "sitenotice/noticewrite";
	}
}
