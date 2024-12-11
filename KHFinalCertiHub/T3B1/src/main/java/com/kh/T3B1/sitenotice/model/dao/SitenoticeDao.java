package com.kh.T3B1.sitenotice.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.sitenotice.model.vo.NoticeBoard;

@Repository
public class SitenoticeDao {

	public Integer countBoard(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("managerMapper.countBoard", keyword);
	}

	public ArrayList<NoticeBoard> selectBoardList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("managerMapper.selectBoardList", so, rowBounds);
	}

	public int increaseView(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.update("managerMapper.increaseView", no);
	}

	public NoticeBoard selectBoard(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.selectOne("managerMapper.selectBoard", no);
	}

	public int insertBoard(SqlSessionTemplate sqlSession, NoticeBoard board) {
		return sqlSession.insert("managerMapper.insertBoard", board);
	}

	public int deleteBoard(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.update("managerMapper.deleteBoard", no);
	}

	public int updateBoard(SqlSessionTemplate sqlSession, NoticeBoard board) {
		return sqlSession.update("managerMapper.updateBoard", board);
	}

}
