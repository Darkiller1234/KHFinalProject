package com.kh.T3B1.mentor.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
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
	public ArrayList<Member> selectMentorList(PageInfo pi) {
		return mentorDao.selectMentorList(sqlSession, pi);
	}

	@Override
	public Member selectMentorDetail(int memberNo) {
		return mentorDao.selectMentorDetail(sqlSession, memberNo);
	}

	@Override
	public int countMentorLike(int memberNo) {
		return mentorDao.countMentorLike(sqlSession, memberNo);
	}

}
