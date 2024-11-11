package com.kh.T3B1.calendar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.kh.T3B1.calendar.model.service.CalendarService;

@Controller
public class CalendarController {
	@Autowired(required = false)
	private CalendarService service;
	
	@GetMapping(params="method=list")
	public String list() {
		return "mainPage.jsp";
	}
}
