package com.kh.T3B1.study.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;

public interface StudyService {

	// 스터디 그룹 총 개수
	int countStudy();

	// 스터디 그룹 페이징 조회
	ArrayList<Study> selectStudyList(PageInfo pi, SearchOption so);

	// 스터디 그룹 정보 조회
	Study selectStudy(int no);

	// 스터디 그룹에 가입해있는 회원 수
	int countStudyMember(int no);
	
	// 스터디 그룹에 가입해있는 회원 정보 조회
	ArrayList<Member> selectStudyMemberList(PageInfo pi, SearchOption so);

	// 게시글의 총 개수 조회
	int countBoard(String keyword);

	// 게시글 페이징 조회
	ArrayList<StudyBoard> selectBoardList(PageInfo pi, SearchOption so);

	// 게시글 내용 조회
	StudyBoard selectBoard(int no);

	// 스터디 그룹 가입여부 조회
	int checkStudyManager(int memberNo);

	// 멤버가 가입한 스터디 그룹 목록 조회
	ArrayList<Study> selectManagerStudy(int memberNo);

	// 멤버가 스터디그룹 매니저인지 검사
	boolean isStudyMananger(HashMap<String, Integer> searchInfo);

	// 스터디 그룹 홍보 게시글 삽입
	int insertBoard(StudyBoard board);

	// 게시글 삭제(소프트 삭제)
	int deleteBoard(HashMap<String, Integer> searchInfo);

}
