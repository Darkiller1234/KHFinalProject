package com.kh.T3B1.manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("manager/")
public class ReportController {
	@RequestMapping("report")
	public String mainPage(Model m) {
		m.addAttribute("pageName", "reportPage");
		return "manager/report";
	}
}
