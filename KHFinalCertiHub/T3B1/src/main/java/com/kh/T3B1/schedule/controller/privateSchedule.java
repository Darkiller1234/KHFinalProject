package com.kh.T3B1.schedule.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class privateSchedule {
	@RequestMapping("schedule")
	public String privateSchedule() {
		return "personal/privateSchedule";
	}
}