package com.kh.T3B1.manager.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.model.vo.Report;
import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;
import com.kh.T3B1.manager.service.ManagerService;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.extern.slf4j.Slf4j;

@Slf4j
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
	
	@RequestMapping("commulist")
	public String commulistPage(Model m) {
		m.addAttribute("pageName","commulistPage");
		return "manager/commulist";
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
	
	@ResponseBody
	@PostMapping(value="licenseList", produces="application/json; charset=UTF-8")
	public String selectLicenseList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = managerService.countLicenseList(keyword);
		if((currentPage - 1) * pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<License2> licenseList = managerService.selectLicenseList(pi, so);
		
		HashMap<String, String> jsonData =  new HashMap<>();
		jsonData.put("board", new Gson().toJson(licenseList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	@ResponseBody
	@PostMapping(value="reportList", produces="application/json; charset=UTF-8")
	public String selectReportList(int currentPage, String keyword) {
		if(keyword != null && keyword.replaceAll(" ", "").equals("")) {
			keyword = null;
		}
		int listCount = managerService.countReportList(keyword);
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, 10, 10);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<Report> reportList = managerService.selectReportList(pi, so);
		
		log.info("\nlicenseList : {}\n", reportList);
		
		HashMap<String, String> jsonData =  new HashMap<>();
		jsonData.put("board", new Gson().toJson(reportList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	@ResponseBody
	@PostMapping(value="report/getStudy", produces="application/json; charset=UTF-8")
	public String getStudy(int boardNo) {
		StudyBoard sb = managerService.getStudy(boardNo);
		
		return new Gson().toJson(sb);
	}
	
	@ResponseBody
	@PostMapping(value="report/getBoard", produces="application/json; charset=UTF-8")
	public String getBoard(int boardNo) {
		Board b = managerService.getBoard(boardNo);
		
		return new Gson().toJson(b);
	}
	
	@ResponseBody
	@PostMapping(value="report/getReply", produces="application/json; charset=UTF-8")
	public String getReply(int replyNo) {
		Reply r = managerService.getReply(replyNo);
		
		return new Gson().toJson(r);
	}
	
	@ResponseBody
	@PostMapping(value="report/getMessage", produces="application/json; charset=UTF-8")
	public String getMessage(int messageNo) {
		Message m = managerService.getMessage(messageNo);
		
		return new Gson().toJson(m);
	}
	
	@ResponseBody
	@PostMapping(value="report/deleteReport", produces="application/json; charset=UTF-8")
	public String deleteReport(String name, int reportNo) {
		int result = managerService.deleteReport(name, reportNo);
		
		return new Gson().toJson(result);
	}
	
	
	
	@ResponseBody
	@PostMapping(value="userList", produces="application/json; charset=UTF-8")
	public String selectUserList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = managerService.countUserList(keyword);
		if((currentPage - 1) * pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<Member> userList = managerService.selectUserList(pi, so);
		
		log.info("\nuserList : {}\n", userList);
		
		HashMap<String, String> jsonData = new HashMap<>();
		jsonData.put("board", new Gson().toJson(userList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	@ResponseBody
	@PostMapping(value="commulistList", produces="application/json; charset=UTF-8")
	public String selectCommuList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개까지
		pageLimit =  pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = managerService.countCommuList(keyword);
		if((currentPage - 1)* pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<Board> commulist = managerService.selectCommuList(pi, so);
		
		log.info("\ncommulist : {}\n", commulist);
		
		HashMap<String, String> jsonData = new HashMap<>();
		jsonData.put("board", new Gson().toJson(commulist));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	@ResponseBody
	@PostMapping(value="promoteList", produces="application/json; charset=UTF-8")
	public String selectlistList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개까지
		pageLimit =  pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = managerService.countListList(keyword);
		if((currentPage - 1)* pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<StudyBoard> listlist = managerService.selectListList(pi, so);
		
		log.info("\nlistlist : {}\n", listlist);
		
		HashMap<String, String> jsonData = new HashMap<>();
		jsonData.put("board", new Gson().toJson(listlist));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
}
