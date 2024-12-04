package com.kh.T3B1.manager.service;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.manager.model.dao.ManagerDao;

@Service
public class ManagerServiceImpl implements ManagerService {
	
	// MyBtis의 SqlSessionTemplate 의존성 주입
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	// 데이터 접근 객체(DAO) 의존성 주입
	@Autowired
	private ManagerDao managerDao;


	@Override
	public int managerListCount() {
		
		return managerDao.managerListCount(sqlSession);
	}

	@Override
	public ArrayList<Board> managerList(PageInfo pi) {
		
		return managerDao.managerList(sqlSession, pi);
	}

}
