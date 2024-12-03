package com.kh.T3B1.manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kh.T3B1.manager.model.vo.ManagerBoard;
import com.kh.T3B1.manager.service.ManagerService;

@Controller
@RequestMapping("/manager")
public class ManagerController {
	
	@Autowired
	private ManagerService managerService;
	
	@RequestMapping("manager")
	public String noticePage(Model m) {
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
