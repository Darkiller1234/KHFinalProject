package com.kh.T3B1.member.dao;

import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.member.model.vo.Member;

@Repository
public class MemberDao {

	public int membershipPage(SqlSessionTemplate sqlSession, Member m) {
		return sqlSession.insert("memberMapper.membershipPage", m);
	}
	
	public int idCheck(SqlSessionTemplate sqlSession, String checkId) {
		return sqlSession.selectOne("memberMapper.idCheck", checkId);
		
	}

	public Member loginMember(SqlSessionTemplate sqlSession, Member m) {
		return sqlSession.selectOne("memberMapper.loginMember", m);
	}

	public int nicknameCheck(SqlSessionTemplate sqlSession, String checknickName) {
		return sqlSession.selectOne("memberMapper.nicknameCheck", checknickName);
	}

	public String findId(SqlSessionTemplate sqlSession, String memberName, String email) {
		Map<String, String> findData = new HashMap<>();
		findData.put("memberName", memberName);
		findData.put("email", email);
		return sqlSession.selectOne("memberMapper.findId",findData);
	}

	public String findPwd(SqlSessionTemplate sqlSession, String memberId, String email) {
		Map<String, String> findData = new HashMap<>();
		findData.put("memberId", memberId);
		findData.put("email", email);
		return sqlSession.selectOne("memberMapper.findPwd",findData);
	}

	public void updatePassword(SqlSessionTemplate sqlSession,String memberId, String encodePassword) {
		Map<String, String>updateData = new HashMap<>();
		updateData.put("memberId", memberId);
		updateData.put("encodePassword",encodePassword);
		sqlSession.update("memberMapper.updatePassword",updateData);		
	}

	
	
	
	
	
	

}
