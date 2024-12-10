package com.kh.T3B1.sitenotice.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.study.model.vo.StudyBoard;

@Repository
public class SitenoticeDao {

	public Integer countBoard(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("managerMapper.countBoard", keyword);
	}

	public ArrayList<StudyBoard> selectBoardList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("managerMapper.selectBoardList", so, rowBounds);
	}

}
