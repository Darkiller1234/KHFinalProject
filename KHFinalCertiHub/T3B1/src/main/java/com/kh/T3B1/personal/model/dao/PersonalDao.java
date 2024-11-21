package com.kh.T3B1.personal.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.member.model.vo.Member;

@Repository
public class PersonalDao {

	public Member ajaxGetMemberInfo(SqlSessionTemplate sqlSession, int pno) {
		return sqlSession.selectOne("personalMapper.getMemberInfo", pno);
	}

	public int ajaxGetMentorSubInfo(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		Integer i = sqlSession.selectOne("personalMapper.getMentorSubInfo", params);
		if(i == null) {
			return 0;
		}
		else {
			return i.intValue();
		}
	}

	public int ajaxInsertMentorSub(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.insert("personalMapper.insertMentorSub", params);
	}

}
