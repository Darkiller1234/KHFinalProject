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
	
	private final CommunityService communityService;
	
	@Autowired
	public CommunityController(CommunityService communityService) {
		this.communityService = communityService;
	}
	
	@RequestMapping("main")
	public String CommunityMain(@RequestParam(value="cpage", defaultValue="1") int currentPage,
			@RequestParam(value="certiNo", defaultValue="1") int certiNo,
			@RequestParam(value="tabNo", defaultValue="0") int tabNo ,
			@RequestParam(value="orderBy", defaultValue="1") int orderBy,
			@RequestParam(value="filterNo", defaultValue="0") int filterNo, Model c) {
		
		
		
		Board dump = new Board();
		dump.setLicenseNo(certiNo);
		dump.setTabNo(tabNo);
		dump.setOrderBy(orderBy);
		
		int boardCount = communityService.selectListCount(dump);
		
		
		PageInfo pi = Template.getPageInfo(boardCount, currentPage, 10, 5);
		
		if(pi.getCurrentPage() > pi.getMaxPage()) {
			pi.setCurrentPage(pi.getMaxPage());
		}
		
		ArrayList<Board> list = communityService.selectList(pi, dump);
		
		ArrayList<String> certiList = communityService.selectCertiList();
		
		
		ArrayList<Board> notiList = null;
		if(tabNo != 1 && currentPage == 1) {
			notiList = communityService.selectNotiList(dump);
		}
		
		if(orderBy != 1) {
			c.addAttribute("orderBy", orderBy);
		}
		
		c.addAttribute("notiList", notiList);
		c.addAttribute("list", list);
		c.addAttribute("pi", pi);
		c.addAttribute("certiList", certiList);
		
		c.addAttribute("pageName","communitySearch");
		c.addAttribute("certiNo", certiNo);
		c.addAttribute("tabNo", tabNo);
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
