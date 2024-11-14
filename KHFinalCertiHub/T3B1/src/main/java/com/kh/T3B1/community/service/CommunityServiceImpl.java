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
public class CommunityServiceImpl implements CommunityService{
	
	
	@Autowired
	private final SqlSessionTemplate sqlSession;
	
	@Autowired
	private final CommunityDao communityDao;

	public int selectListCount(Board dump) {
		return communityDao.selectListCount(dump, sqlSession);
	}
	
	public ArrayList<Board> selectList(PageInfo pi, Board dump) {
		return communityDao.selectList(sqlSession, pi, dump);
	}

	@Override
	public ArrayList<String> selectCertiList() {
		return communityDao.selectCertiList(sqlSession);
	}

	@Override
	public ArrayList<Board> selectNotiList(Board dump) {
		return communityDao.selectNotiList(sqlSession, dump);
	}

	@Override
	public Board selectBoardOne(int cno) {
		return communityDao.selectBoardOne(sqlSession, cno);
	}

	@Override
	public boolean increaseViewCount(int cno) {
		return communityDao.increaseViewCount(sqlSession, cno);
	}

	@Override
	public String ajaxCommunityWriterProfileImg(int cno) {
		return communityDao.ajaxCommunityWriterProfileImg(sqlSession, cno);
	}

	
	
	

}
