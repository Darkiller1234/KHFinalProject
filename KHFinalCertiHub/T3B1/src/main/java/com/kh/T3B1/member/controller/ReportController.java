package com.kh.T3B1.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("manager/")
public class ReportController {
	@RequestMapping("report")
	public String mainPage() {
		return "member/report";
	}
}
