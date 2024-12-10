package com.kh.T3B1.manager.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.License2;
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

	public int countLicenseList(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("managerMapper.countLicenseList", keyword);
	}

	public ArrayList<License2> selectLicenseList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() -1)* pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());

		return (ArrayList)sqlSession.selectList("managerMapper.selectLicenseList", so, rowBounds);
	}

	public int countUserList(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("memberMapper.countUserList", keyword);
	}

	public ArrayList<Member> selectUserList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() -1)* pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.selectUserList", so, rowBounds);
	}

	public int countCommuList(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("boardMapper.countCommuList", keyword);
	}

	public ArrayList<Board> selectCommuList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() -1)* pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("boardMapper.selectCommuList", so, rowBounds);
	}

	public int countListList(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("studyMapper.countListList", keyword);
	}

	public ArrayList<StudyBoard> selectListList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() -1)* pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("studyMapper.selectListList", so, rowBounds);
	}

	public int countReportList(SqlSessionTemplate sqlSession, String keyword) {
		return sqlSession.selectOne("commonMapper.countReportList", keyword);
	}

	public Integer confirmLicense(SqlSessionTemplate sqlSession, HashMap<String, Integer> updateInfo) {
		return sqlSession.update("managerMapper.confirmLicense", updateInfo);
	}

	public Integer rejectLicense(SqlSessionTemplate sqlSession, HashMap<String, Integer> updateInfo) {
		return sqlSession.delete("managerMapper.rejectLicense", updateInfo);
	}



}
