package com.kh.T3B1.study.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.dao.StudyDao;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class StudyServiceImpl implements StudyService{
	
	public final SqlSessionTemplate sqlSession;
	
	public final StudyDao studyDao;

	@Override
	public int countStudy() {
		return studyDao.countStudy(sqlSession);
	}

	@Override
	public ArrayList<Study> selectStudyList(PageInfo pi, SearchOption so) {
		return studyDao.selectStudyList(sqlSession, pi, so);
	}

	@Override
	public Study selectStudy(int no) {
		return studyDao.selectStudy(sqlSession, no);
	}

	@Override
	public int countStudyMember(int no) {
		return studyDao.countStudyMember(sqlSession, no);
	}

	@Override
	public ArrayList<Member> selectStudyMemberList(PageInfo pi, SearchOption so) {
		return studyDao.selectStudyMemberList(sqlSession, pi, so);
	}

	@Override
	public int countBoard(String keyword) {
		return studyDao.countBoard(sqlSession, keyword);
	}

	@Override
	public ArrayList<StudyBoard> selectBoardList(PageInfo pi, SearchOption so) {
		return studyDao.selectBoardList(sqlSession, pi, so);
	}

	@Override
	public StudyBoard selectBoard(int no) {
		int result = studyDao.increaseView(sqlSession, no);
		
		if(result < 0) {
			return null;
		}
		
		return studyDao.selectBoard(sqlSession, no);
	}

	@Override
	public int checkStudyManager(int memberNo) {
		Integer result = studyDao.checkStudyManager(sqlSession, memberNo);
		
		if(result == null) {
			return 0;
		}
		
		return result;
	}

	@Override
	public ArrayList<Study> selectManagerStudy(int memberNo) {
		return studyDao.selectManagerStudy(sqlSession, memberNo);
	}

	@Override
	public boolean isStudyMananger(HashMap<String, Integer> searchInfo) {
		boolean isManager = false;
		
		// EXISTS 결과가 조회된다면 매니저가 맞음
		Integer result = studyDao.isStudyManager(sqlSession, searchInfo);
		if(result != null) {
			isManager = true;
		}
		
		return isManager;
	}

	@Override
	public int insertBoard(StudyBoard board) {
		return studyDao.insertBoard(sqlSession, board);
	}

	@Override
	public int deleteBoard(HashMap<String, Integer> searchInfo) {
		int result = 0;
		Integer isWriter = studyDao.isWriter(sqlSession,searchInfo);

		if(isWriter != null) {
			result = studyDao.deleteBoard(sqlSession, searchInfo);
		}
		
		return result;
	}
	
}
