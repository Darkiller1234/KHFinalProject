package com.kh.T3B1.study.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;

@Repository
public class StudyDao {

	public int countStudy(SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("studyMapper.countStudy");
	}

	public ArrayList<Study> selectStudyList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectStudyList", so, rowBounds);
	}

	public Study selectStudy(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.selectOne("studyMapper.selectStudy",no);
	}

	public int countStudyMember(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.selectOne("studyMapper.countStudyMember",no);
	}

	public ArrayList<Member> selectStudyMemberList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectStudyMemberList", so, rowBounds);
	}

	public int countBoard(SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("studyMapper.countBoard");
	}

	public ArrayList<StudyBoard> selectBoardList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectBoardList", so, rowBounds);
	}
	
}
