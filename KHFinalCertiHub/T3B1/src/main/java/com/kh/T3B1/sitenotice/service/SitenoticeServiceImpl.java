package com.kh.T3B1.sitenotice.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.sitenotice.model.dao.SitenoticeDao;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SitenoticeServiceImpl implements SitenoticeService{
	
	public final SqlSessionTemplate sqlSession;
	
	public final SitenoticeDao noticeDao;

	@Override
	public Integer countBoard(String keyword) {
		return noticeDao.countBoard(sqlSession, keyword);
	}

	@Override
	public ArrayList<StudyBoard> selectBoardList(PageInfo pi, SearchOption so) {
		return noticeDao.selectBoardList(sqlSession, pi, so);
	}

}
