package com.kh.T3B1.manager.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.StudyBoard;


@Repository
public class ManagerDao {

	public int managerListCount(SqlSessionTemplate sqlSession) {
		
		return sqlSession.selectOne("boardMapper.managerListCount");
	}

	public ArrayList<Board> managerList(SqlSessionTemplate sqlSession, PageInfo pi) {
		int offset = (pi.getCurrentPage() -1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		return (ArrayList)sqlSession.selectList("boardMapper.managerList", pi, rowBounds);
	}

	public int CountUser(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("memberMapper.CountUser",keyword);
	}

	public ArrayList<Member> selectUserList(SqlSessionTemplate sqlSession, PageInfo pi, String keyword) {
		int offset = (pi.getCurrentPage() -1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		// SQL 실행(selectList는 Mapper 에서 쿼리를 실행)
		return (ArrayList)sqlSession.selectList("memberMapper.selectUserList", keyword, rowBounds);
	}

	public int Countstudylist(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("studyMapper.Countstudylist",keyword);
	}

	public ArrayList<StudyBoard> StudyList(SqlSessionTemplate sqlSession, PageInfo pi, String keyword) {
		int offset = (pi.getCurrentPage() -1)* pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		//SQL 실행(selectList는 Mapper에서 쿼리를 실행)
		return (ArrayList)sqlSession.selectList("studyMapper.StudyList", keyword,rowBounds);
	}

	public int Countcommulist(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("boardMapper.Countcommulist", keyword);
	}

	public ArrayList<Board> CommuList(SqlSessionTemplate sqlSession, PageInfo pi, String keyword) {
		int offset = (pi.getCurrentPage() -1)* pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset,pi.getBoardLimit());
		return (ArrayList)sqlSession.selectList("boardMapper.CommuList", keyword, rowBounds);
	}



}
