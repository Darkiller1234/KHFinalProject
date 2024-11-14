package com.kh.T3B1.mentor.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.mentor.model.dao.MentorDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor // 의존성 주입, 초기화 되지 않은 final 필드에 생성자 생성
@Service
public class MentorServiceImpl implements MentorService {
	
	@Autowired
	public final SqlSessionTemplate sqlSession;
	
	@Autowired
	public final MentorDao mentorDao;

	@Override
	public int countMentor() {
		return mentorDao.countMentor(sqlSession);
	}
	
	@Override
	public ArrayList<Member> selectMentorList(PageInfo pi, SearchOption so) {
		return mentorDao.selectMentorList(sqlSession, pi, so);
	}

	@Override
	public Member selectMentorDetail(int memberNo) {
		return mentorDao.selectMentorDetail(sqlSession, memberNo);
	}

	@Override
	public int countMentorLike(int memberNo) {
		return mentorDao.countMentorLike(sqlSession, memberNo);
	}

	@Override
	public ArrayList<License> selectLicenseList() {
		return mentorDao.selectLicenseList(sqlSession);
	}

	@Override
	public int likeMentor(HashMap<String, Integer> likeInfo) {
		int likeCount = 0;
		int result = mentorDao.likeMentor(sqlSession, likeInfo);
		
		if(result > 0) { // 좋아요에 성공했다면
			likeCount = mentorDao.countMentorLike(sqlSession, likeInfo.get("mentorNo")); // 좋아요 수 조회
		}
		
		return likeCount;
	}

}
