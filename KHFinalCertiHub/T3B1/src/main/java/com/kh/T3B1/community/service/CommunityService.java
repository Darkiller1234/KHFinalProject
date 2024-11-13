package com.kh.T3B1.community.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;

public interface CommunityService {
	//게시글 총 갯수 가져오기
	int selectListCount(Board dump);
	
	//게시글 목록 가져오기
	ArrayList<Board> selectList(PageInfo pi, Board dump);

	//자격증 목록 가져오기
	ArrayList<String> selectCertiList();

	ArrayList<Board> selectNotiList(Board dump);

	Board selectBoardOne(int cno);
}
