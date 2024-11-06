package com.kh.T3B1.sitenoticecontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NoticePostController {
	
	@RequestMapping("noticepost") 
		public String mainPage() {
			return "sitenotice/noticepost";
		}
}
