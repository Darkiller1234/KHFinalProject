package com.kh.T3B1.manager.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.manager.model.dao.ManagerDao;
import com.kh.T3B1.member.model.vo.Member;

@Service
public class ManagerServiceImpl implements ManagerService {
	
	// MyBtis의 SqlSessionTemplate 의존성 주입
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	// 데이터 접근 객체(DAO) 의존성 주입
	@Autowired
	private ManagerDao managerDao;
}
