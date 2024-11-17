package com.kh.T3B1.error.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorController {
	
	@GetMapping("error")
	public String errorPage() {
		return "common/errorPage";
	}
}
