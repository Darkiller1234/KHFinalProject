package com.kh.T3B1.manager.service;

import java.util.ArrayList;
import java.util.List;

import com.kh.T3B1.common.model.vo.Report;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.study.model.vo.StudyBoard;
public interface ManagerService {

	int managerListCount();

	ArrayList<Board> managerList(PageInfo pi);
	
	// 유저 게시판 검색 총 갯수
	int CountUser(String keyword);
	
	// 유저 게시판검색목록
	ArrayList<Member> selectUserList(PageInfo pi, String keyword);
	
	// 홍보 게시판 검색 총 갯수
	int Countstudylist(String keyword);
	
	// 홍보 게시판 검색목록
	ArrayList<StudyBoard> StudyList(PageInfo pi, String keyword);
	
	// 커뮤 게시판 검색 총 갯수
	int Countcommulist(String keyword);
	
	// 커뮤 게시판 검색목록
	ArrayList<Board> CommuList(PageInfo pi, String keyword);

	// 인증되지 않은 자격증 신청 개수 불러오기
	int countLicenseList(String keyword);

	// 인증되지 않은 자격증 목록 불러오기
	ArrayList<License2> selectLicenseList(PageInfo pi, SearchOption so);

	int countReportList(String keyword);

	ArrayList<Report> selectReportList(PageInfo pi, SearchOption so);

}
