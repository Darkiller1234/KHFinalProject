package com.kh.T3B1.etc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EtcController {
	
	@RequestMapping("compiler")
	public String compilerPage(Model m) {
		m.addAttribute("pageName", "compilerPage");
		return "etc/compiler";
	}

}
