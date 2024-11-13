package com.kh.T3B1.member.dao;

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
	
	

}
