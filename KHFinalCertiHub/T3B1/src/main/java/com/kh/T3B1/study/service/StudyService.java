package com.kh.T3B1.study.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.vo.Study;
import com.kh.T3B1.study.model.vo.StudyBoard;

public interface StudyService {

	/**
	 * @return 스터디 그룹 총 개수
	 */
	int countStudy();

	/**
	 * 스터디 그룹 페이징 조회
	 * @param SearchOption의 keyword(검색어), recruit(모집여부:2=Y/3=N), sortNo(2=인기순[회원수])
	 * @return S.STUDY_NO ,
            M.MEMBER_NICKNAME AS MANAGER_NAME,
		    S.STUDY_NAME ,
		    S.STUDY_IMG ,
		    S.STUDY_RECRUIT,
            COUNT(*) AS MEMBER_COUNT
	 */
	ArrayList<Study> selectStudyList(PageInfo pi, SearchOption so);

	/**
	 * @param 스터디 그룹 번호 no
	 * @return 스터디 그룹 정보
	 */
	Study selectStudy(int studyNo);

	/**
	 * @param 스터디 그룹 번호 no
	 * @return 스터디 그룹 가입 회원 수
	 */
	int countStudyMember(int studyNo);
	
	/**
	 * 스터디 그룹 회원 정보 조회
	 * @param SearchOption의 no(스터디 그룹 번호), keyword(검색어)
	 * @return ArrayList<Member> = M.MEMBER_NO, 
		   MEMBER_NICKNAME,
		   MEMBER_IMG
	 */
	ArrayList<Member> selectStudyMemberList(PageInfo pi, HashMap<String, Object> searchInfo);

	/**
	 * @param keyword(검색), null이면 모든 게시글 개수
	 * @return 홍보 게시글의 총 개수
	 */
	int countBoard(String keyword);

	/**
	 * 홍보 게시글 페이징 조회
	 * @param SearchOption의 keyword(검색어)
	 * @return Study STUDY_BOARD_NO ,
		MEMBER_NICKNAME AS MANAGER_NICKNAME ,
		STUDY_BOARD_TITLE ,
		VIEW_COUNT ,
		TO_CHAR(STUDY_BOARD_DATE,'YYYY-MM-DD') AS STUDY_BOARD_DATE

	 */
	ArrayList<StudyBoard> selectBoardList(PageInfo pi, SearchOption so);

	/**
	 * @param 게시글 번호 no
	 * @return 게시글 내용 조회
	 */
	StudyBoard selectBoard(int boardNo);

	/**
	 * @param 멤버번호 memberNo
	 * @return 스터디 그룹 가입여부, 1=Y,2=N
	 */
	int checkStudyManager(int memberNo);

	/**
	 * 멤버가 관리하고 있는 스터디 그룹 목록 조회
	 * @param 멤버번호 memberNo
	 * @return ArrayList<Study> study = studyNo(스터디 그룹 번호), studyName(스터디 그룹명)
	 */
	ArrayList<Study> selectManagerStudy(int memberNo);

	/**
	 * 요청 멤버가 스터디그룹 매니저인지 검사
	 * @param HashMap key=memberNo(요청 멤버 번호),studyNo(스터디 그룹 번호) + 톡방 권한 확인 필요시 talkroomNo(톡방 번호)
	 * @return true=본인, false=타인
	 */
	boolean isStudyManager(HashMap<String, Integer> searchInfo);
	
	/**
	 * 홍보 게시판 게시글 작성자 본인인지 확인
	 * @param HashMap key=managerNo(요청 멤버 번호),boardNo(게시글 번호)
	 * @return true=본인, false=타인
	 */
	boolean isWriter(HashMap<String, Integer> searchInfo);

	/**
	 * 스터디 그룹 홍보 게시글 삽입
	 * @param StudyBoard studyNo(스터디 그룹 번호), boardTitle(게시글 제목), boardContent(게시글 내용)
	 * @return 성공= 1, 실패=0
	 */
	int insertBoard(StudyBoard board);

	/**
	 * 게시글 삭제(소프트 삭제)
	 * @param HashMap key=managerNo(요청 멤버 번호),boardNo(게시글 번호)
	 * @return 성공= 1, 실패=0
	 * 
	 */
	int deleteBoard(HashMap<String, Integer> searchInfo);

	/**
	 * 게시글 수정
	 * @param StudyBoard studyNo(스터디 그룹 번호), boardTitle(게시글 제목), boardContent(게시글 내용)
	 * @return 성공= 1, 실패=0
	 */
	int updateBoard(StudyBoard board);

	/**
	 * 스터디 그룹이 모집중인지 조회
	 * @param studyNo(스터디 그룹 번호)
	 * @return Y=모집중,N=모집마감(or 스터디 그룹 존재X)
	 */
	String checkStudyRecruit(int studyNo);

	/**
	 * 스터디 그룹에 이미 신청했는지 확인 
	 * @param HashMap key=memberNo(요청 멤버 번호), studyNo(스터디 그룹 번호)
	 * @return E=이미신청,N=신청한적없음
	 */
	String isApplyExist(HashMap<String, Integer> searchInfo);
	
	/**
	 * 관리자에게 스터디 그룹 참가 신청
	 * @param HashMap key=memberNo(요청 멤버 번호), studyNo(스터디 그룹 번호)
	 * @return E=이미 신청기록 존재, Y= 신청 성공, N= 신청 실패
	 */
	String insertApply(HashMap<String, Integer> insertInfo);

	/**
	 * 스터디 그룹 생성
	 * @param Study managerNo(요청 멤버 번호), studyName(스터디 그룹명), studyInfo(스터디 그룹설명), studyImg(프로필 이미지 경로)
	 * @return 성공= 1, 실패=0
	 */
	int insertStudy(Study study);

	/**
	 * 스터디 그룹 정보 수정
	 * @param Study managerNo(요청 멤버 번호), studyName(스터디 그룹명), studyInfo(스터디 그룹설명), studyImg(프로필 이미지 경로, nullable)
	 * @return 성공= 1, 실패=0
	 */
	int updateStudy(Study study);

	/**
	 * 스터디 그룹에서 멤버 추방
	 * @param HashMap key=memberNo(추방될 멤버 번호), studyNo(스터디 그룹 번호)
	 * @return Y= 삭제 성공, N= 삭제 실패
	 */
	String deleteStudyMember(HashMap<String, Integer> searchInfo);

	/**
	 * 스터디 그룹 삭제
	 * @param int no(스터디 그룹 번호)
	 * @return 성공= 1, 실패=0
	 */
	int deleteStudy(int studyNo);

	/**
	 * 스터디 그룹 모집 여부 변경
	 * @param HashMap key=studyNo(바꿀 스터디 그룹 번호), recruit(모집여부 Y/N)
	 * @return 성공=Y, 실패=N
	 */
	String updateRecruit(HashMap<String, Object> updateInfo);

	/**
	 * @param HashMap key=studyNo(가입할 스터디 그룹 번호), memberNo(가입시킬 회원 번호)
	 * @return 성공=Y, 실패= RuntimeException
	 */
	String joinStudy(HashMap<String, Integer> searchInfo);

	/**
	 * 스터디 그룹에 속해있는 멤버인지 확인
	 * @param int memberNo, int studyNo
	 * @return true=속함, false=없음
	 */
	boolean isStudyMember(HashMap<String, Integer> insertInfo);

}
