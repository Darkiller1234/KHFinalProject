package com.kh.T3B1.manager.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.kh.T3B1.common.model.vo.Report;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.study.model.vo.StudyBoard;
public interface ManagerService {

	int managerListCount();

	ArrayList<Board> managerList(PageInfo pi);

	// 인증되지 않은 자격증 신청 개수 불러오기
	int countLicenseList(String keyword);

	// 인증되지 않은 자격증 목록 불러오기
	ArrayList<License2> selectLicenseList(PageInfo pi, SearchOption so);
	
	// 회원가입 한 유저 개수 불러오기
	int countUserList(String keyword);
	
	// 회원가입 한 유저 목록 불러오기
	ArrayList<Member> selectUserList(PageInfo pi, SearchOption so);
	
	// 커뮤니티 게시글 개수 불러오기
	int countCommuList(String keyword);
	
	// 커뮤니티 게시글 목록 불러오기
	ArrayList<Board> selectCommuList(PageInfo pi, SearchOption so);
	
	// 홍보게시글 개수 불러오기
	int countListList(String keyword);
	
	// 홍보게시글 목록 불러오기
	ArrayList<StudyBoard> selectListList(PageInfo pi, SearchOption so);

	int countReportList(String keyword);

	ArrayList<Report> selectReportList(PageInfo pi, SearchOption so);

	StudyBoard getStudy(int boardNo);

	Board getBoard(int boardNo);

	Reply getReply(int replyNo);

	Message getMessage(int messageNo);

	int deleteReport(String name, int reportNo);
	// 자격증 인증 승인 결과 반환 성공 Y 실패 N
	String confirmLicense(HashMap<String, Integer> updateInfo);

	// 자격증 인증 요청 삭제 결과 반환 성공 Y 실패 N
	String rejectLicense(HashMap<String, Integer> updateInfo);

	int ignoreReport(int reportNo);

}
