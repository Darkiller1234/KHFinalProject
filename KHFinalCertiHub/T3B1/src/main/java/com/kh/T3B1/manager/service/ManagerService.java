package com.kh.T3B1.manager.service;

import java.util.ArrayList;
import java.util.List;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.member.model.vo.Member;
public interface ManagerService {

	int managerListCount();

	ArrayList<Board> managerList(PageInfo pi);
	
	// 검색 총 갯수
	int CountUser(String keyword);
	
	// 검색목록
	ArrayList<Member> selectUserList(PageInfo pi, String keyword);



}
