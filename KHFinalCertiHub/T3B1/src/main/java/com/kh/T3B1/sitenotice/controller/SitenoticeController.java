package com.kh.T3B1.sitenotice.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.sitenotice.model.vo.NoticeBoard;
import com.kh.T3B1.sitenotice.service.SitenoticeService;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/notice")
public class SitenoticeController {
	
	public final SitenoticeService noticeService;
	
	@RequestMapping("notice")
	public String noticePage(Model m) {
		m.addAttribute("pageName", "noticePage");
		return "sitenotice/notice";
	}
	
	@RequestMapping("noticepost") 
	public String noticepostPage(Model m) {
		m.addAttribute("pageName","noticepost");
		return "sitenotice/noticepost";
	}
	
	@RequestMapping("noticewrite") 
	public String noticewritePage(Model m) {
		m.addAttribute("pageName","noticeWrite");
		return "sitenotice/noticewrite";
	}
	
	@RequestMapping("board")
	public String selectBoard(HttpSession session, Model m, int no) {
		NoticeBoard board = noticeService.selectBoard(no);
		
		if(board == null) {
			session.setAttribute("errorMsg", "게시글 조회에 실패했습니다.");
			return "redirect:/error";
		}
		
		m.addAttribute("board", board);
		m.addAttribute("pageName","noticepost");
		return "sitenotice/noticepost";
	}
	
	@RequestMapping("write")
	public String studyWritePage(Model m, HttpSession session) {
		m.addAttribute("pageName","noticewrite");
		return "sitenotice/noticewrite";
	}
	
	@PostMapping("insertBoard")
	public String insertBoard(NoticeBoard board, HttpSession session) {
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		board.setMemberNo(memberNo);
		
		int result = noticeService.insertBoard(board);	
		
		if(result == 0) {
			session.setAttribute("errorMsg", "게시글 삽입에 실패했습니다.");
			return "redirect:/error";
		}
		
		return "redirect:notice";
	}
	
	@RequestMapping("deleteBoard")
	public String deleteBoard(HttpSession session, int no) {
		int result = noticeService.deleteBoard(no);

		if(result == 0) {
			session.setAttribute("errorMsg", "게시글 삭제에 실패했습니다.");
			return "redirect:/error";
		}
		
		return "redirect:notice";
	}
	
	@RequestMapping("board/edit")
	public String updateBoard(HttpSession session, Model m, int no) {
		NoticeBoard board = noticeService.selectBoard(no);
		m.addAttribute("board",board);
		m.addAttribute("pageName","noticeEdit");
		return "sitenotice/noticeEdit";
	}
	
	@RequestMapping("updateBoard")
	public String updateBoard(HttpSession session, NoticeBoard board) {
		int result = noticeService.updateBoard(board);

		if(result == 0) {
			session.setAttribute("errorMsg", "게시글 수정에 실패했습니다.");
			return "redirect:/error";
		}
		
		return "redirect:notice";
	}
	
	// ========================== AJAX ============================
	
	@ResponseBody
	@PostMapping(value="boardList", produces="application/json; charset=UTF-8")
	public String selectBoardList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = noticeService.countBoard(keyword);
		if((currentPage - 1) * pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<NoticeBoard> boardList = noticeService.selectBoardList(pi, so);
		HashMap<String, String> jsonData =  new HashMap<>();
		jsonData.put("board", new Gson().toJson(boardList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	//ajax로 파일 업로드
	//파일목록을 저장하고 저장된 파일명목록 반환
	@ResponseBody
	@PostMapping("uploadImg")
	public String upload(List<MultipartFile> fileList, HttpSession session) {
		List<String> changeNameList = new ArrayList<>();
		
		for(MultipartFile f : fileList) {
			changeNameList.add(Template.saveFile(f, session, "/resources/static/img/notice/"));
		}
		
		return new Gson().toJson(changeNameList);
	}
	
	
}
