package com.kh.T3B1.community.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.service.CommunityService;

@Controller
@RequestMapping("/community")
public class CommunityController {
	
//	private final CommunityService communityService;
	
//	@Autowired
//	public CommunityController(CommunityService communityService) {
//		this.communityService = communityService;
//	}
	
	@RequestMapping("main")
	public String CommunityMain(@RequestParam(value="cpage", defaultValue="1") int currentPage,Model c) {
		
//		int boardCount = communityService.selectListCount();
//		
//		PageInfo pi = Template.getPageInfo(boardCount, currentPage, 10, 5);
//		ArrayList<Board> list = communityService.selectList(pi);
//		
//		
//		c.addAttribute("list", list);
//		c.addAttribute("pi", pi);
//		
//		c.addAttribute("pageName","communitySearch");
		return "community/communityMain";
	}
	@RequestMapping("detail")
	public String CommunityDetail(Model c) {
		c.addAttribute("pageName","commuDInit");
		return "community/communityDetail";
	}
	@RequestMapping("write")
	public String CommunityWrite(Model c) {
		c.addAttribute("pageName","commuWInit");
		return "community/communityWrite";
	}
}
