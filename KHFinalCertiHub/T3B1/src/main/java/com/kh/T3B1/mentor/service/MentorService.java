package com.kh.T3B1.mentor.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;

public interface MentorService {

	// 전체 멘토수 조회
	int countMentor();
	
	// 멘토인 멤버 페이징 조회
	ArrayList<Member> selectMentorList(PageInfo pi, SearchOption so);

	// 멘토 상세정보 조회
	Member selectMentorDetail(int mentorNo);

	// 멘토 좋아요 개수 조회
	int countMentorLike(int mentorNo);

	// 자격증 목록 조회
	ArrayList<License> selectLicenseList();
	
	// 로그인한 유저가 해당 멘토 좋아요를 눌렀는지 확인
	String checkLike(HashMap<String, Integer> likeInfo);

	// 멘토 좋아요
	int likeMentor(HashMap<String, Integer> likeInfo);
	
	// 멘토 좋아요 취소
	int deleteLikeMentor(HashMap<String, Integer> likeInfo);

	// 멘토의 멘티 신청 활성화 여부 확인
	String checkMentorValid(int mentorNo);

	// 멘토에게 멘티 신청
	String insertApply(HashMap<String, Integer> insertInfo);

	
}
