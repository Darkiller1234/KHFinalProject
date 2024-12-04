package com.kh.T3B1.manager.service;

import java.util.ArrayList;
import java.util.List;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
public interface ManagerService {

	int managerListCount();

	ArrayList<Board> managerList(PageInfo pi);



}
