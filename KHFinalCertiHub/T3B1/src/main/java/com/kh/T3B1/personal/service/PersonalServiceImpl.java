package com.kh.T3B1.personal.service;

import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.dao.PersonalDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class PersonalServiceImpl implements PersonalService{
	
	@Autowired
	private final SqlSessionTemplate sqlSession;

	@Autowired
	private final PersonalDao personalDao;
	
	@Override
	public Member ajaxGetMemberInfo(int pno) {
		return personalDao.ajaxGetMemberInfo(sqlSession, pno);
	}
	
	@Override
	public int ajaxGetMentorSubInfo(int pno, int mNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("pno", pno);
		params.put("mNo", mNo);
		return personalDao.ajaxGetMentorSubInfo(sqlSession, params);
	}

	@Override
	public int ajaxInsertMentorSub(int pno, int mNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("pno", pno);
		params.put("mNo", mNo);
		return personalDao.ajaxInsertMentorSub(sqlSession, params);
	}

}
