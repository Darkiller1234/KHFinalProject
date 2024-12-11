package com.kh.T3B1.sitenotice.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.sitenotice.model.vo.NoticeBoard;
import com.kh.T3B1.study.model.vo.StudyBoard;

public interface SitenoticeService {

	// 공지사항 개수 세기
	Integer countBoard(String keyword);

	// 공지사항 게시글 가져오기
	ArrayList<NoticeBoard> selectBoardList(PageInfo pi, SearchOption so);

	// 공지사항 조회
	NoticeBoard selectBoard(int no);

	// 공지사항 작성
	int insertBoard(NoticeBoard board);

	// 공지사항 삭제
	int deleteBoard(int no);

	// 공지사항 수정
	int updateBoard(NoticeBoard board);


}
