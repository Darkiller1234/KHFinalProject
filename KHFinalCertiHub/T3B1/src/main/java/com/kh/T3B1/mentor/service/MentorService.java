package com.kh.T3B1.mentor.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.member.model.vo.Member;

public interface MentorService {

	// 전체 멘토수 조회
	int countMentor();
	
	// 멘토인 멤버 페이징 조회
	ArrayList<Member> selectMentorList(PageInfo pi);

	// 멘토 상세정보 조회
	Member selectMentorDetail(int memberNo);

	// 멘토 좋아요 개수 조회
	int countMentorLike(int memberNo);
	
}
