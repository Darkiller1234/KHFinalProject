package com.kh.T3B1.community.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.service.CommunityService;
import com.kh.T3B1.member.model.vo.Member;


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
			@RequestParam(value="orderBy", defaultValue="0") int orderBy,
			@RequestParam(value="filterNo", defaultValue="0") int filterNo,
			@RequestParam(value="filterText", defaultValue="") String filterText, Model c) {
		
		
		
		Board boardForSelect = new Board();		// 리스트 불러오기용 보드객체
		boardForSelect.setLicenseNo(certiNo);
		boardForSelect.setTabNo(tabNo);
		if(orderBy == 0) {
			boardForSelect.setOrderBy(1);
		} else {
			boardForSelect.setOrderBy(orderBy);
		}
		
		if(!filterText.equals("")) {
			if(filterNo == 0) {
				filterNo = 2;  // 주석으로 숫자 의미 추가하면 좋을듯요 - 동영
			}
			boardForSelect.setFilterNo(filterNo);
			boardForSelect.setFilterText(filterText);
		}
		
		
		int boardCount = communityService.selectListCount(boardForSelect);		// 전체 개시글 수
		
		
		PageInfo pi = Template.getPageInfo(boardCount, currentPage, 10, 5);		//페이징
		
		if(pi.getCurrentPage() > pi.getMaxPage()) {								//헛소리
			pi.setCurrentPage(pi.getMaxPage());
		}
		
		ArrayList<Board> list = communityService.selectList(pi, boardForSelect);	//게시글 리스트
		
		ArrayList<String> certiList = communityService.selectCertiList();			//자격증 게시판 목록 불러오기
		
		
		ArrayList<Board> notiList = null;					//1페이지에서 보이는 공지사항 리스트
		if(tabNo != 1 && currentPage == 1) {					//공지사항 탭이 아니면서 1페이지일 때
			notiList = communityService.selectNotiList(boardForSelect);	//리스트 불러옴
		}
		
		if(orderBy != 0) {
			c.addAttribute("orderBy", orderBy);					//정렬 조건 부여한 상태면 지속성을 부여함
		}
		
		if(filterNo != 0) {										//마찬가지
			c.addAttribute("filterNo", filterNo);
			c.addAttribute("filterText", filterText);
		}
		
		// 게시글 탭 목록도 DB랑 연동하면 좋을거 같아용 - 동영
		
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
	public String CommunityDetail(@RequestParam(value="certiNo", defaultValue="1") int certiNo,
			int cno,Model c) {
		
		boolean tmp = communityService.increaseViewCount(cno);
		if(!tmp) {
			
		}
		
		ArrayList<String> certiList = communityService.selectCertiList();
		Board temp = communityService.selectBoardOne(cno);
		
		Board dump = new Board();
		dump.setLicenseNo(certiNo);
		dump.setTabNo(0);
		dump.setOrderBy(1);
		dump.setFilterNo(0);
		
		int boardCount = communityService.selectListCount(dump);
		
		
		PageInfo pi = Template.getPageInfo(boardCount, 1, 10, 5);
		
		ArrayList<Board> list = communityService.selectList(pi, dump);
		
		
		
		c.addAttribute("notiList", communityService.selectNotiList(dump));
		c.addAttribute("list", list);
		c.addAttribute("Bo", temp);
		c.addAttribute("pi", pi);
		c.addAttribute("certiList", certiList);
		c.addAttribute("pageName","commuDInit");
		c.addAttribute("certiNo", certiNo);
		c.addAttribute("cno", cno);
		return "community/communityDetail";
	}
	@RequestMapping("write")
	public String CommunityWrite(Model c) {
		c.addAttribute("pageName","commuWInit");
		return "community/communityWrite";
	}
	
	@ResponseBody
	@RequestMapping(value="detail/writerProfileImgJson", produces="application/json; charset-UTF-8")
	public String ajaxCommunityWriterProfileImg(int cno) {
		String imgPath = communityService.ajaxCommunityWriterProfileImg(cno);
		return new Gson().toJson(imgPath);
	}
	
	@ResponseBody
	@RequestMapping(value="detail/likeStatusJson", produces="application/json; charset-UTF-8")
	public String ajaxCommunityLikeStatusJson(int cno, HttpSession session) {
		if(session.getAttribute("loginMember") == null) {
			return null;
		}
		Member User = (Member)session.getAttribute("loginMember");
		int likeStatus = communityService.ajaxCommunityLikeStatusJson(cno, User.getMemberNo());
		return new Gson().toJson(likeStatus);
	}
}
