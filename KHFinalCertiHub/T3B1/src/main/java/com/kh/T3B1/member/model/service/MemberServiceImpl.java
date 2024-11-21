package com.kh.T3B1.member.model.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.member.dao.MemberDao;
import com.kh.T3B1.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired
	private MemberDao memberDao;
	
	
	public int membershipPage(Member m) {
		return memberDao.membershipPage(sqlSession, m);
	}


	@Override
	public int idCheck(String checkId) {
		return memberDao.idCheck(sqlSession, checkId);
	}


	@Override
	public Member loginMember(Member m) {
		return memberDao.loginMember(sqlSession, m);
	}


	@Override
	public int nicknameCheck(String checknickName) {
		return memberDao.nicknameCheck(sqlSession, checknickName);
	}


	@Override
	public String findId(String memberName, String email) {
		String memberid = memberDao.findId(sqlSession, memberName, email);
		return memberid;
	}


}
