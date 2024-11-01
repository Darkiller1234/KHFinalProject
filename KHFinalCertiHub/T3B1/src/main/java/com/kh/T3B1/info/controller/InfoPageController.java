package com.kh.T3B1.info.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InfoPageController {

	@RequestMapping("info")
	public String searchPage() {
		return "infoPage/searchPage";
	}
}
