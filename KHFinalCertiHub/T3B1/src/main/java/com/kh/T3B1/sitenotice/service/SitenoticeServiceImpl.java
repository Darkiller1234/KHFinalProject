package com.kh.T3B1.sitenotice.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.sitenotice.model.dao.SitenoticeDao;
import com.kh.T3B1.sitenotice.model.vo.NoticeBoard;
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
	public ArrayList<NoticeBoard> selectBoardList(PageInfo pi, SearchOption so) {
		return noticeDao.selectBoardList(sqlSession, pi, so);
	}
	
	@Transactional(rollbackFor = {Exception.class})
	@Override
	public NoticeBoard selectBoard(int no) {
		int result = noticeDao.increaseView(sqlSession, no);
		
		if(result == 0)
			throw new RuntimeException("공지사항 조회수 증가 실패");
		
		NoticeBoard board = noticeDao.selectBoard(sqlSession, no);
		
		return board;
	}

}
