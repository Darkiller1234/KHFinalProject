package com.kh.T3B1.community.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.kh.T3B1.common.template.Template;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;
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
		
		
		PageInfo pi = Template.getPageInfo(boardCount, currentPage, 10, 30);		//페이징
		
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
	public String CommunityWrite(int certiNo, Model c, HttpSession session) {
		ArrayList<String> certiList = communityService.selectCertiList();
		
		
		
		session.setAttribute("licenseNo", certiNo);
		
		
		
		c.addAttribute("pageName","commuWInit");
		c.addAttribute("certiList", certiList);
		c.addAttribute("certiNo", certiNo);
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
	
	@ResponseBody
	@RequestMapping(value="detail/likeBtnClickJson", produces="application/json; charset-UTF-8")
	public String ajaxCommunityLikeBtnClickJson(int cno, HttpSession session) {
		if(session.getAttribute("loginMember") == null) {
			return null;
		}
		int success = communityService.ajaxCommunityLikeBtnClickJson(cno, ((Member)session.getAttribute("loginMember")).getMemberNo());
		return new Gson().toJson(success);
	}
	
	@ResponseBody
	@RequestMapping(value="detail/hateBtnClickJson", produces="application/json; charset-UTF-8")
	public String ajaxCommunityHateBtnClickJson(int cno, HttpSession session) {
		if(session.getAttribute("loginMember") == null) {
			return null;
		}
		int success = communityService.ajaxCommunityHateBtnClickJson(cno, ((Member)session.getAttribute("loginMember")).getMemberNo());
		return new Gson().toJson(success);
	}
	
	@ResponseBody
	@RequestMapping(value="detail/boardLoadingJson", produces="application/json; charset-UTF-8")
	public String ajaxCommunityBoardLoadingJson(int cno) {
		Board temp = communityService.selectBoardOne(cno);
		return new Gson().toJson(temp);
	}
	
	
	
	
	
	
	
	
	
	@PostMapping("write/board")
	public String insertBoard(Board b, Model m, HttpSession session) {
		b.setLicenseNo((int)session.getAttribute("licenseNo"));
		b.setMemberNo(((Member)session.getAttribute("loginMember")).getMemberNo());
		System.out.println(b);
		int result = communityService.insertBoard(b);
		m.addAttribute("cno", result);
		
		return "redirect:/community/detail?cno=" + result + "&certiNo=" + b.getLicenseNo();
	}
	
	@ResponseBody
	@PostMapping("write/upload")
	public String upload(List<MultipartFile> fileList, HttpSession session) {
		System.out.println(fileList);
		
		List<String> changeNameList = new ArrayList<>();
		for(MultipartFile f : fileList) {
			changeNameList.add(saveFile(f, session, "/resources/static/img/board/"));
		}
		
		return new Gson().toJson(changeNameList);
	}
	
	
	
	
	
	public String saveFile(MultipartFile upfile, HttpSession session, String path) {
		//파일원본명
		String originName = upfile.getOriginalFilename(); 
		
		//확장자
		String ext = originName.substring(originName.lastIndexOf("."));
		 
		//년월일시분초
		String currentTime = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		
		//5자리 랜덤값
		int randNum = (int)(Math.random() * 90000) + 10000;
		
		String changeName = currentTime + "_" + randNum + ext;
		
		//첨부파일 저장할 폴더의 물리적 경로
		String savePath = session.getServletContext().getRealPath(path);
		System.out.println(savePath);
		try {
			upfile.transferTo(new File(savePath + changeName));
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
		
		return changeName;
	}







	@ResponseBody
	@RequestMapping(value="detail/clickDeleteBtn", produces="application/json; charset-UTF-8")
	public String ajaxClickDeleteBtn(int cno, HttpSession session) {
		int temp = communityService.ajaxClickDeleteBtn(cno, ((Member)session.getAttribute("loginMember")).getMemberNo());
		return new Gson().toJson(temp);
	}
	
	@ResponseBody
	@RequestMapping(value="detail/clickEditBtn", produces="application/json; charset-UTF-8")
	public String ajaxClickEditBtn(int cno, HttpSession session) {
		int temp = communityService.ajaxClickEditBtn(cno, ((Member)session.getAttribute("loginMember")).getMemberNo());
		if(temp == 1){
			session.setAttribute("cno", cno);
		}
		return new Gson().toJson(temp);
	}	
	
	
	
	@ResponseBody
	@RequestMapping(value="detail/replyList", produces="application/json; charset-UTF-8")
	public String ajaxReplyList(int cno, int cpage, HttpSession session) {
		int count = communityService.replySelectListCount(cno);
		if(cpage <= 0) {
			cpage = Template.getPageInfo(count, 1, 10, 5).getMaxPage();
		}
		PageInfo pi = Template.getPageInfo(count, cpage, 10, 5);
		
		ArrayList<Reply> list = communityService.selectReplyList(pi, cno);
		
		System.out.println(list);
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="detail/replyPaging", produces="application/json; charset-UTF-8")
	public String ajaxReplyPaging(int cno, int cpage, HttpSession session) {
		int count = communityService.replySelectListCount(cno);
		if(cpage <= 0) {
			cpage = Template.getPageInfo(count, 1, 10, 5).getMaxPage();
		}
		PageInfo pi = Template.getPageInfo(count, cpage, 10, 5);
		
		return new Gson().toJson(pi);
	}
	
	
	
	@PostMapping("detail/replyWrite")
	public String replyWrite(String replyContent, int certiNo, int cno, Model m, HttpSession session) {
		Member member = (Member) session.getAttribute("loginMember");
		
		Reply r = new Reply();
		r.setBoardNo(cno);
		r.setReplyPNo(0);
		r.setMemberNo(member.getMemberNo());
		r.setReplyContent(replyContent.replaceAll("\r\n|\r|\n", "<br>"));
		r.setReplyGroup(0);
		r.setReplyOrder(0);
		r.setChildCount(0);
		
		int result = communityService.replyWrite(r);
		
		
		
		return "redirect:/community/detail?cno=" + cno + "&certiNo=" + certiNo;
	}
	
	
	@ResponseBody
	@RequestMapping(value="detail/deleteReply", produces="application/json; charset-UTF-8")
	public String deleteReply(@RequestParam(value="replyNo", defaultValue="0") int replyNo, Model m, HttpSession session) {
		int result = communityService.deleteReply(replyNo);
		return new Gson().toJson(result);
	}
	
	@ResponseBody
	@RequestMapping(value="detail/getLoginInfo", produces="application/json; charset-UTF-8")
	public String getLoginInfo(HttpSession session) {
		return new Gson().toJson((Member)session.getAttribute("loginMember"));
	}
	
	@ResponseBody
	@RequestMapping(value="detail/editReply", produces="application/json; charset-UTF-8")
	public String editReply(int replyNo, String replyContent) {
		Reply temp = new Reply();
		temp.setReplyNo(replyNo);
		temp.setReplyContent(replyContent.replaceAll("\r\n|\r|\n", "<br>"));
		int result = communityService.editReply(temp);
		return new Gson().toJson(result);
	}
	
	
	@ResponseBody
	@RequestMapping(value="detail/poppularAll", produces="application/json; charset-UTF-8")
	public String poppularAll() {
		Board temp = new Board();
		temp.setOrderBy(2);
		
		PageInfo pi = Template.getPageInfo(5, 1, 1, 5);
		return new Gson().toJson(communityService.selectList(pi, temp));
	}
	
	@ResponseBody
	@RequestMapping(value="detail/poppularThis", produces="application/json; charset-UTF-8")
	public String poppularThis(int licenseNo) {
		Board temp = new Board();
		temp.setOrderBy(2);
		temp.setLicenseNo(licenseNo);
		PageInfo pi = Template.getPageInfo(5, 1, 1, 5);
		return new Gson().toJson(communityService.selectList(pi, temp));
	}
	
	
	
	
	
	
	

	@RequestMapping("edit")
	public String CommunityEdit(int certiNo, Model c, HttpSession session) {
		ArrayList<String> certiList = communityService.selectCertiList();
		
		
		
		session.setAttribute("licenseNo", certiNo);
		
		int cno = (int) session.getAttribute("cno");
		Board temp = communityService.selectBoardOne(cno);

		c.addAttribute("Bo", temp);
		
		c.addAttribute("pageName","commuEInit");
		c.addAttribute("certiList", certiList);
		c.addAttribute("certiNo", certiNo);
		return "community/communityEdit";
	}


	@PostMapping("edit/board")
	public String editBoard(Board b, Model m, HttpSession session) {
		b.setLicenseNo((int)session.getAttribute("licenseNo"));
		b.setMemberNo(((Member)session.getAttribute("loginMember")).getMemberNo());
		b.setBoardNo((int)session.getAttribute("cno"));
		System.out.println(b);
		System.out.println(session.getAttribute("Bo"));
		int result = communityService.updateBoard(b);
		m.addAttribute("cno", result);
		if(result == 0){
			return "redirect:/community/main";
		} else {
			return "redirect:/community/detail?cno=" + result + "&certiNo=" + b.getLicenseNo();
		}

	}
	
	
	
	
	
	
}
