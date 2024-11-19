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
	public boolean isBoardWriter(HashMap<String, Integer> searchInfo) {
		boolean result = false;
		Integer isWriter = studyDao.isWriter(sqlSession,searchInfo);

		if(isWriter != null) {
			result = true;
		}
		
		return result;
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

	@Override
	public int updateBoard(StudyBoard board) {
		int result = 0;
		HashMap<String, Integer> searchInfo = new HashMap<>();
		searchInfo.put("managerNo", board.getManagerNo());
		searchInfo.put("boardNo", board.getBoardNo());
		
		Integer isWriter = studyDao.isWriter(sqlSession,searchInfo);

		if(isWriter != null) {
			result = studyDao.updateBoard(sqlSession, board);
		}
		
		return result;
	}

	@Override
	public String checkStudyRecruit(int studyNo) {
		String result = studyDao.checkStudyRecruit(sqlSession, studyNo);
		
		if(result == null) result = "N";
		
		return result;
	}
	
	@Override
	public String isApplyExist(HashMap<String, Integer> searchInfo) {
		Integer isExist = studyDao.isApplyExist(sqlSession, searchInfo);
		// 이미 신청했다면 isExist 값이 존재, 중복 E 리턴
		if(isExist != null) {
			return "E";
		}
		
		return "N";
	}

	@Override
	public String insertApply(HashMap<String, Integer> insertInfo) {
		Integer isExist = studyDao.isApplyExist(sqlSession, insertInfo);
		// 이미 신청했다면 isExist 값이 존재, 중복 E 리턴
		if(isExist != null) {
			return "E";
		}
		
		int insertResult = studyDao.insertApply(sqlSession, insertInfo);
		if(insertResult > 0) {
			return "Y";
		} else {
			return "N";
		}
	}

	@Override
	public int insertStudy(Study study) {
		int memberResult = 0;
		int studyResult = studyDao.insertStudy(sqlSession, study);
		
		// 스터디 그룹 생성에 성공했다면
		if(studyResult > 0) {
			memberResult = studyDao.insertStudyMember(sqlSession, study);
		}
		
		if(memberResult * studyResult == 0) {
			sqlSession.rollback();
		}
		
		return memberResult * studyResult;
	}
	
}
