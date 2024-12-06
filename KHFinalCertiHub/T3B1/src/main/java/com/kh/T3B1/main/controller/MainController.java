package com.kh.T3B1.main.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.main.service.MainService;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.FullCalendarVo;
import com.kh.T3B1.personal.service.PersonalService;

@Controller
public class MainController {
	
	private MainService MainService;
	
	private final PersonalService personalService;
	
	@Autowired
	public MainController(MainService mainService, PersonalService personalService) {
		this.personalService = personalService;
		this.MainService = mainService;
	}
	
	@RequestMapping("main")
	public String mainPage(Model m) {
		List<Board> topPosts = MainService.getTopPostsByViews(10);
		List<Board> latestNotices = MainService.getLatestNotices(5);
		
		m.addAttribute("topPosts", topPosts);
		m.addAttribute("latestNotices", latestNotices);
		m.addAttribute("pageName", "mainPage");
		return "main/mainPage";
	}
	
	@ResponseBody
	@RequestMapping(value="scLoad", produces="application/json; charset-UTF-8")
	public String scLoad(HttpSession session) {
		if((Member)session.getAttribute("loginMember") != null) {
			ArrayList<FullCalendarVo> list = personalService.ScLoad(((Member)session.getAttribute("loginMember")).getMemberNo());
			
			return new Gson().toJson(list);
		} else {
			return new Gson().toJson(0);
		}
		
	}

}
