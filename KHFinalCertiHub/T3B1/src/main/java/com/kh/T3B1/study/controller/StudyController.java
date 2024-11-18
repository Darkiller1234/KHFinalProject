package com.kh.T3B1.study.controller;

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
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;
import com.kh.T3B1.study.service.StudyService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/study")
public class StudyController {
	
	public final StudyService studyService;
	
	@RequestMapping("search")
	public String studySearchPage(Model m) {
		m.addAttribute("pageName","studySearch");
		return "studyroom/studySearch";
	}
	
	@RequestMapping("create")
	public String studyCreatePage(Model m) {
		m.addAttribute("pageName","studyCreatePage");
		return "studyroom/studyCreate";
	}
	
	@RequestMapping("detail")
	public String studyDetailPage(Model m, int no) {
		Study study = studyService.selectStudy(no);
		
		m.addAttribute("study",study);
		m.addAttribute("pageName","studyDetail");
		return "studyroom/studyDetail";
	}
	
	@RequestMapping("detail/edit")
	public String studyDetailEditPage(Model m) {
		m.addAttribute("pageName","studyDetailEdit");
		return "studyroom/studyDetailEdit";
	}
	
	@RequestMapping("list")
	public String studyBoardPage(Model m, HttpSession session) {
		Member member = ((Member)session.getAttribute("loginMember"));
		int isManager = 0; // 프론트에서 글 작성 권한 확인용 변수
		
		// 로그인 한 유저면, 프론트에서 글 작성 권한 확인
		if(member != null) {
			// 멤버가 매니저인 스터디 그룹이 있는지 조회
			isManager = studyService.checkStudyManager(member.getMemberNo());
		}
		
		// 스터디 그룹에 1개라도 매니저로 존재한다면( 글 작성 권한이 있다면 )
		if(isManager > 0) {
			m.addAttribute("isManager","Y");
		} else {
			m.addAttribute("isManager","N");
		}
		
		m.addAttribute("pageName","studyBoard");
		return "studyroom/studyBoard";
	}
	
	@RequestMapping("board")
	public String studyBoardViewPage(HttpSession session, Model m, int no) {
		StudyBoard studyBoard = studyService.selectBoard(no);
		
		if(studyBoard == null) {
			session.setAttribute("errorMsg", "게시글 조회에 실패했습니다.");
			return "redirect:/error";
		}
		
		m.addAttribute("board",studyBoard);
		m.addAttribute("pageName","studyBoardView");
		return "studyroom/studyBoardView";
	}
	
	@RequestMapping("write")
	public String studyWritePage(Model m, HttpSession session) {
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		
		// 멤버가 매니저인 스터디 그룹이 있는지 조회
		int isManager = studyService.checkStudyManager(memberNo);
		
		// 없다면 돌려보낸다
		if(isManager < 1) {
			session.setAttribute("errorMsg","현재 매니저로 등록된 스터디그룹이 없습니다.");
			return "redirect:/errorPage";
		}

		m.addAttribute("pageName","studyWrite");
		return "studyroom/studyWrite";
	}
	
	@PostMapping("insertBoard")
	public String insertBoard(StudyBoard board, HttpSession session) {
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		boolean isManager = false; // 해당 스터디 그룹의 매니저가 맞는지 검증하는 변수
		int result = 0; // 삽입이 정상적으로 됬는지 확인하는 변수 0 : 실패 / 1 : 성공
		
		log.info("memberNo : {}",memberNo);
		log.info("board : {}",board);
		
		if(board.getStudyNo() != null) {
			HashMap<String, Integer> searchInfo = new HashMap<>();
			searchInfo.put("memberNo", memberNo);
			searchInfo.put("studyNo", board.getStudyNo());
			isManager = studyService.isStudyMananger(searchInfo);
		}
		
		if(isManager) {
			result = studyService.insertBoard(board);	
		}
		
		if(result < 1) {
			session.setAttribute("errorMsg", "게시글 삽입에 실패했습니다.");
			return "redirect:/error";
		}
		
		return "redirect:list";
	}
	
	@RequestMapping("deleteBoard")
	public String deleteBoard(HttpSession session, int no) {
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		HashMap<String, Integer> searchInfo =  new HashMap<>();
		searchInfo.put("managerNo", memberNo);
		searchInfo.put("boardNo", no);
		
		int result = studyService.deleteBoard(searchInfo);

		if(result < 1) {
			session.setAttribute("errorMsg", "게시글 삭제에 실패했습니다.");
			return "redirect:/error";
		}
		
		return "redirect:list";
	}
	
	@RequestMapping("board/edit")
	public String updateBoard(HttpSession session, Model m, int no) {
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		HashMap<String, Integer> searchInfo =  new HashMap<>();
		searchInfo.put("managerNo", memberNo);
		searchInfo.put("boardNo", no);
		
		boolean isWriter = studyService.isBoardWriter(searchInfo);

		if(!isWriter) {
			session.setAttribute("errorMsg", "게시글 수정 권한이 없습니다.");
			return "redirect:/error";
		}
		
		StudyBoard studyBoard = studyService.selectBoard(no);
		m.addAttribute("board",studyBoard);
		m.addAttribute("pageName","studyBoardEdit");
		return "studyroom/studyBoardEdit";
	}
	
	@RequestMapping("updateBoard")
	public String updateBoard(HttpSession session, StudyBoard board) {
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		board.setManagerNo(memberNo);
		
		int result = studyService.updateBoard(board);

		if(result < 1) {
			session.setAttribute("errorMsg", "게시글 수정에 실패했습니다.");
			return "redirect:/error";
		}
		
		return "redirect:list";
	}
	
	
	// =========================  AJAX 요청 핸들러  ==========================
	
	@ResponseBody
	@RequestMapping(value="studyList", produces="application/json; charset=UTF-8")
	public String selectMentorList(int pageLimit, int currentPage,  String keyword, String recruit, Integer sort) {
		// 요청 한번에 불러올 스터디 그룹의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 스터디 페이지라면 DB에서 조회하지 않도록 막아준다
		int studyCount = studyService.countStudy();
		if((currentPage - 1) * pageLimit > studyCount) {
			return null;
		}
		
		// 스터디 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption(); // defaultValue로 변경 예정 
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		if(recruit != null && !recruit.equals("")) so.setRecruit(recruit);
		if(sort != null) so.setSortNo(sort);
		
		ArrayList<Study> studyList = studyService.selectStudyList(pi, so);
		
		return new Gson().toJson(studyList);
	}
	
	@ResponseBody
	@RequestMapping(value="memberList", produces="application/json; charset=UTF-8")
	public String selectStudyMemberList(int pageLimit, int currentPage,  String keyword, int no) {
		// 요청 한번에 불러올 스터디 그룹의 수, 최대 20명 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 회원 페이지라면 DB에서 조회하지 않도록 막아준다
		int memberCount = studyService.countStudyMember(no);
		if((currentPage - 1) * pageLimit > memberCount) {
			return null;
		}
		
		// 스터디 리스트 조회
		PageInfo pi = new PageInfo();
		pi.setCurrentPage(currentPage);
		pi.setPageLimit(pageLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		so.setNo(no);
		
		ArrayList<Member> memberList = studyService.selectStudyMemberList(pi, so);
		
		return new Gson().toJson(memberList);
	}
	
	
	@ResponseBody
	@RequestMapping(value="boardList", produces="application/json; charset=UTF-8")
	public String selectBoardList(int currentPage, int boardLimit, int pageLimit, String keyword) {
		// 요청 한번에 불러올 게시글의 수, 최대 20개 까지
		pageLimit = pageLimit <= 20 ? pageLimit : 20;
		
		// 이미 마지막 게시판 페이지라면 DB에서 조회하지 않도록 막아준다
		int listCount = studyService.countBoard(keyword);
		if((currentPage - 1) * pageLimit > listCount) {
			return null;
		}
		
		PageInfo pi = Template.getPageInfo(listCount, currentPage, pageLimit, boardLimit);
		
		// 검색 옵션 저장
		SearchOption so = new SearchOption();
		if(keyword != null && !keyword.equals("")) so.setKeyword(keyword);
		
		ArrayList<StudyBoard> boardList = studyService.selectBoardList(pi, so);
		HashMap<String, String> jsonData =  new HashMap<>();
		jsonData.put("board", new Gson().toJson(boardList));
		jsonData.put("pageInfo", new Gson().toJson(pi));
		
		return new Gson().toJson(jsonData);
	}
	
	@ResponseBody
	@PostMapping(value="manageStudy", produces="application/json; charset=UTF-8")
	public String selectManageStudy(HttpSession session) {
		log.info("ajax 요청 도착");
		int memberNo = ((Member)session.getAttribute("loginMember")).getMemberNo();
		// 매니저인 스터디 그룹 목록
		ArrayList<Study> studyList = studyService.selectManagerStudy(memberNo);
		
		return new Gson().toJson(studyList);
	}
	
	//ajax로 파일 업로드
	//파일목록을 저장하고 저장된 파일명목록 반환
	@ResponseBody
	@PostMapping("uploadImg")
	public String upload(List<MultipartFile> fileList, HttpSession session) {
		List<String> changeNameList = new ArrayList<>();
		for(MultipartFile f : fileList) {
			changeNameList.add(Template.saveFile(f, session, "/resources/static/img/studyBoard/"));
		}
		
		return new Gson().toJson(changeNameList);
	}
}
