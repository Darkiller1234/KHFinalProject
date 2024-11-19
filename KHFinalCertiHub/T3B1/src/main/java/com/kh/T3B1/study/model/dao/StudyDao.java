package com.kh.T3B1.study.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

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

	public int countBoard(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("studyMapper.countBoard", keyword);
	}

	public ArrayList<StudyBoard> selectBoardList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectBoardList", so, rowBounds);
	}
	

	public Integer increaseView(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.update("studyMapper.increaseView",no);
	}

	public StudyBoard selectBoard(SqlSessionTemplate sqlSession, int no) {
		return sqlSession.selectOne("studyMapper.selectBoard", no);
	}

	public Integer checkStudyManager(SqlSessionTemplate sqlSession,int memberNo) {
		return sqlSession.selectOne("studyMapper.checkStudyManager", memberNo);
	}

	public ArrayList<Study> selectManagerStudy(SqlSessionTemplate sqlSession, int memberNo) {
		return (ArrayList)sqlSession.selectList("studyMapper.selectManagerStudy", memberNo);
	}

	public Integer isStudyManager(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.selectOne("studyMapper.isStudyManager", searchInfo);
	}

	public int insertBoard(SqlSessionTemplate sqlSession, StudyBoard board) {
		return sqlSession.insert("studyMapper.insertBoard", board);
	}

	public Integer isWriter(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.selectOne("studyMapper.isWriter", searchInfo);
	}

	public int deleteBoard(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.update("studyMapper.deleteBoard", searchInfo);
	}

	public int updateBoard(SqlSessionTemplate sqlSession, StudyBoard board) {
		return sqlSession.update("studyMapper.updateBoard", board);
	}

	public String checkStudyRecruit(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.selectOne("studyMapper.checkStudyRecruit", studyNo);
	}

	public Integer isApplyExist(SqlSessionTemplate sqlSession, HashMap<String, Integer> insertInfo) {
		return sqlSession.selectOne("studyMapper.isApplyExist", insertInfo);
	}

	public int insertApply(SqlSessionTemplate sqlSession, HashMap<String, Integer> insertInfo) {
		return sqlSession.insert("studyMapper.insertApply", insertInfo);
	}

	public int insertStudy(SqlSessionTemplate sqlSession, Study study) {
		return sqlSession.insert("studyMapper.insertStudy", study);
	}
	
}
