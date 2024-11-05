package com.kh.T3B1.message.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("message/")
public class MessageController {
	@RequestMapping("main")
	public String messageMainPage(Model m) {
		m.addAttribute("pageName","messageMain");
		return "personal/messageMain";
	}
}
