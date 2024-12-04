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
	public String userPage(Model m) {
		m.addAttribute("pageName","userPage");
		return "manager/user";
	}
}
