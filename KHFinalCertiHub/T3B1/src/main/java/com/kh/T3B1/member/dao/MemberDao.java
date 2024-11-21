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
	
	// memberMapper.를 줘야하는것으로 알고있는데 
	// memberMapper.를 주면 오류가 뜬다 
	// 이유를 모르겠습니다.


	
	
	

}
