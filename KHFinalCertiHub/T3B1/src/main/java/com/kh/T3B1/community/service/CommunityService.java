package com.kh.T3B1.community.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;

public interface CommunityService {

	int selectListCount();
	
	ArrayList<Board> selectList(PageInfo pi);


}
