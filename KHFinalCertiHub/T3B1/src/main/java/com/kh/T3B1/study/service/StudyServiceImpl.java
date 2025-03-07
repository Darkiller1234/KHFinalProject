package com.kh.T3B1.study.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.dao.MessageDao;
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
	public final MessageDao messageDao;

	@Override
	public int countStudy() {
		return studyDao.countStudy(sqlSession);
	}

	@Override
	public ArrayList<Study> selectStudyList(PageInfo pi, SearchOption so) {
		return studyDao.selectStudyList(sqlSession, pi, so);
	}

	@Override
	public Study selectStudy(int studyNo) {
		return studyDao.selectStudy(sqlSession, studyNo);
	}

	@Override
	public int countStudyMember(int studyNo) {
		return studyDao.countStudyMember(sqlSession, studyNo);
	}

	@Override
	public ArrayList<Member> selectStudyMemberList(PageInfo pi, HashMap<String, Object> searchInfo) {
		return studyDao.selectStudyMemberList(sqlSession, pi, searchInfo);
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
	public StudyBoard selectBoard(int boardNo) {
		int result = studyDao.increaseView(sqlSession, boardNo);
		
		if(result < 0) {
			return null;
		}
		
		return studyDao.selectBoard(sqlSession, boardNo);
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
	public boolean isStudyManager(HashMap<String, Integer> searchInfo) {
		boolean isManager = false;
		
		// EXISTS 결과가 조회된다면 매니저가 맞음
		Integer result = studyDao.isStudyManager(sqlSession, searchInfo);
		if(result != null) {
			isManager = true;
		}
		
		return isManager;
	}
	
	@Override
	public boolean isWriter(HashMap<String, Integer> searchInfo) {
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

	@Transactional(rollbackFor = {Exception.class})
	@Override
	public int insertStudy(Study study) {
		int studyResult = studyDao.insertStudy(sqlSession, study);
		
		if(studyResult == 0) {
			throw new RuntimeException("스터디 그룹 생성 실패");
		}
		
		int memberResult = studyDao.insertStudyManager(sqlSession, study.getManagerNo());
		
		if(memberResult == 0) {
			throw new RuntimeException("스터디 그룹 멤버 추가 실패");
		}
		
		int talkResult = messageDao.insertStudyTalkroom(sqlSession, study.getManagerNo());
		
		if(talkResult == 0) {
			throw new RuntimeException("스터디 그룹 톡방 생성 실패");
		}
		
		int talkMemberResult = messageDao.initTalkroomMember(sqlSession, study.getManagerNo());
		
		if(talkMemberResult == 0) {
			throw new RuntimeException("스터디 그룹 톡방 멤버 추가 실패");
		}
		
		return memberResult * studyResult * talkResult * talkMemberResult;
	}
	
	@Override
	public int updateStudy(Study study) {
		return studyDao.updateStudy(sqlSession, study);
	}

	@Transactional(rollbackFor = {Exception.class})
	@Override
	public String deleteStudyMember(HashMap<String, Integer> searchInfo) {
		int studyResult = studyDao.deleteStudyMember(sqlSession, searchInfo);
		
		if(studyResult == 0) {
			throw new RuntimeException("멤버 스터디그룹에서 삭제 실패");
		}
		
		int talkroomResult = studyDao.deleteTalkroomMember(sqlSession, searchInfo);
		
		if(talkroomResult == 0) {
			throw new RuntimeException("멤버 톡방에서 삭제 실패");
		}
		
		return "Y";
	}

	@Override
	public int deleteStudy(int studyNo) {
		return studyDao.deleteStudy(sqlSession, studyNo);
	}

	@Override
	public String updateRecruit(HashMap<String, Object> updateInfo) {
		int result = studyDao.updateRecruit(sqlSession, updateInfo);
		
		if(result > 0) {
			return "Y";
		}
		
		return "N";
	}

	@Override
	public String joinStudy(HashMap<String, Integer> searchInfo) {
		String result = "Y";
		
		int memberResult = studyDao.insertStudyMember(sqlSession, searchInfo);
		if(memberResult == 0) {
			throw new RuntimeException("스터디 그룹 멤버 추가 실패");
		}
		
		int talkroomNo = messageDao.selectStudyTalkroomNo(sqlSession, searchInfo.get("studyNo"));
		if(talkroomNo == 0) {
			throw new RuntimeException("스터디 그룹 톡방 조회 실패");
		}
		searchInfo.put("talkroomNo", talkroomNo);
		
		int talkResult = messageDao.insertTalkroomMember(sqlSession, searchInfo);
		if(talkResult == 0) {
			throw new RuntimeException("스터디그룹 톡방 회원 추가 실패");
		}
		
		int applyResult = messageDao.updateApply(sqlSession, searchInfo.get("applyNo"));
		if(applyResult == 0) {
			throw new RuntimeException("요청 승인 날짜 처리 실패");
		}
		
		return result;
	}

	@Override
	public boolean isStudyMember(HashMap<String, Integer> insertInfo) {
		boolean isStudyMember = false;
		
		Integer result = studyDao.isStudyMember(sqlSession, insertInfo);
		if(result != null) {
			isStudyMember = true;
		}
		
		return isStudyMember;
	}

}
