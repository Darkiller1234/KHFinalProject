package com.kh.T3B1.study.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.extern.slf4j.Slf4j;

@Slf4j
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

	public Study selectStudy(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.selectOne("studyMapper.selectStudy",studyNo);
	}

	public int countStudyMember(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.selectOne("studyMapper.countStudyMember",studyNo);
	}

	public ArrayList<Member> selectStudyMemberList(SqlSessionTemplate sqlSession, PageInfo pi, HashMap<String, Object> searchInfo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectStudyMemberList", searchInfo, rowBounds);
	}

	public int countBoard(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("studyMapper.countBoard", keyword);
	}

	public ArrayList<StudyBoard> selectBoardList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectBoardList", so, rowBounds);
	}
	

	public Integer increaseView(SqlSessionTemplate sqlSession, int boardNo) {
		return sqlSession.update("studyMapper.increaseView", boardNo);
	}

	public StudyBoard selectBoard(SqlSessionTemplate sqlSession, int boardNo) {
		return sqlSession.selectOne("studyMapper.selectBoard", boardNo);
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
	
	public int insertStudyManager(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.insert("studyMapper.insertStudyManager", memberNo);
	}

	public int insertStudyMember(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.insert("studyMapper.insertStudyMember", searchInfo);
	}

	public int updateStudy(SqlSessionTemplate sqlSession, Study study) {
		return sqlSession.update("studyMapper.updateStudy", study);
	}

	public int deleteStudyMember(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.delete("studyMapper.deleteStudyMember", searchInfo);
	}

	public int deleteStudy(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.delete("studyMapper.deleteStudy", studyNo);
	}

	public int updateRecruit(SqlSessionTemplate sqlSession, HashMap<String, Object> updateInfo) {
		return sqlSession.update("studyMapper.updateRecruit", updateInfo);
	}

	public int deleteTalkroomMember(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.delete("studyMapper.deleteTalkroomMember", searchInfo);
	}
	
}
