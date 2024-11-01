package com.kh.T3B1.mentor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("mentor")
public class MentorController {
	
	@RequestMapping("/search")
	public String mentorSearch() {
		return "studyroom/mentorSearch";
	}
}
