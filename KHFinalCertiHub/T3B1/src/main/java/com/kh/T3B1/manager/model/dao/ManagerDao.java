package com.kh.T3B1.manager.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.manager.model.vo.ManagerBoard;

@Repository
public class ManagerDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;



}
