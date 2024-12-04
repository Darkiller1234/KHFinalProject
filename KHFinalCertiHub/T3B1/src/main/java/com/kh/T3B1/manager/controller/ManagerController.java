package com.kh.T3B1.manager.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.manager.service.ManagerService;
import com.kh.T3B1.member.model.vo.Member;

@Controller
@RequestMapping("/manager")
public class ManagerController {
	
	private final ManagerService managerService;
	
	@Autowired
	public ManagerController(ManagerService managerService) {
		this.managerService = managerService;
	}
	
	@RequestMapping("manager")
	public String managerPage(@RequestParam(value="cpage",defaultValue="1")int currentPage, Model m) {
		int managerboardCount = managerService.managerListCount();
		
		PageInfo pi = Template.getPageInfo(managerboardCount, currentPage, 1, 1);
		ArrayList<Board> list = managerService.managerList(pi);
		System.out.println("list :" + list);
		System.out.print("pi :" + pi);
		m.addAttribute("list", list);
		m.addAttribute("pi", pi);
		m.addAttribute("pageName","managerPage");
		return "manager/manager";
	}
	
	@RequestMapping("certify")
	public String certifyPage(Model m) {
		m.addAttribute("pageName","certifyPage");
		return "manager/certify";
	}
	
	@RequestMapping("list")
	public String listPage(Model m) {
		m.addAttribute("pageName","listPage");
		return "manager/list";
	}
	
	@RequestMapping("report")
	public String reportPage(Model m) {
		m.addAttribute("pageName", "reportPage");
		return "manager/report";
	}
	
	@RequestMapping("user")
	public String userPage(@RequestParam(value = "keyword",defaultValue = "")String keyword,
			@RequestParam(value = "cpage", defaultValue = "1")int currentPage,Model m) {
		// 검색 결과의 총 개수 조회
		int userCount = managerService.CountUser(keyword);
		
		// 페이지 정보 객체 생성(현재 페이지, 총 검색 개수, 한 페이지당 항목 수, 페이지 범위)
		PageInfo pi = Template.getPageInfo(userCount, currentPage, 10, 5);
		
		// 검색 결과 목록 조회
		ArrayList<Member> list = managerService.selectUserList(pi, keyword);
		// 모델에 데이터를 추가
		m.addAttribute("list", list); // 검색 결과 목록
		m.addAttribute("pi", pi); // 페이징 정보
		m.addAttribute("keyword", keyword); // 검색 키워드
		m.addAttribute("pageName","userPage");
		
		// 검색 페이지로 이동
		return "manager/user";
	}
}
