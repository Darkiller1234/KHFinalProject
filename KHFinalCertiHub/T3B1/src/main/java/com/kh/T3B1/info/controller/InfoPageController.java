package com.kh.T3B1.info.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InfoPageController {

	@RequestMapping("search")
	public String searchPage() {
		
		return "infoPage/searchPage";
	}
	
	@RequestMapping("info")
	public String infoPage(Model m) {
		m.addAttribute("pageName", "infoPage");
		return "infoPage/infoPage";
	}
	
}
