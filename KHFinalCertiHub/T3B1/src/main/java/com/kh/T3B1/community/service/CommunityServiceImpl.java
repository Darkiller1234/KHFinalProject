package com.kh.T3B1.community.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.dao.CommunityDao;
import com.kh.T3B1.community.model.vo.Board;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CommunityServiceImpl implements CommunityService {
	
	@Autowired
	private final SqlSessionTemplate sqlSession;
	
	@Autowired
	private final CommunityDao communityDao;
	

	@Override
	public int selectListCount() {
		return communityDao.selectListCount(sqlSession);
	}

	
	@Override
	public ArrayList<Board> selectList(PageInfo pi) {
		return communityDao.selectList(sqlSession, pi);
	}

	
}
