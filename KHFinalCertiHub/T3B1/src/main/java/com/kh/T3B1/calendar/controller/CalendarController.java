package com.kh.T3B1.calendar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.kh.T3B1.calendar.service.CalendarService;

@Controller
public class CalendarController {
	@Autowired(required = false)
	private CalendarService service;
	
}
