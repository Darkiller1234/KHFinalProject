package com.kh.T3B1.manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("manager/")
public class CertifyController {
	
	@RequestMapping("certify")
	public String mainPage(Model m) {
		m.addAttribute("pageName","certifyPage");
		return "manager/certify";
	}
}
