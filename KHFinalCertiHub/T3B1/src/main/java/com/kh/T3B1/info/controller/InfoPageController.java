package com.kh.T3B1.info.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InfoPageController {

	// 검색 페이지로 이동
	@RequestMapping("search")
	public String searchPage(Model m) {

		return "infoPage/searchPage";
	}

	// 정보창으로 이동
	@RequestMapping("info")
	public String infoPage(Model m) {
		m.addAttribute("pageName", "infoPage");
		return "infoPage/infoPage";
	}

}