package com.kh.T3B1.mentor.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;

@Repository
public class MentorDao {
	
	public int countMentor(SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("memberMapper.countMentor");
	}

	public ArrayList<Member> selectMentorList(SqlSessionTemplate sqlSession, PageInfo pi, SearchOption so) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("memberMapper.selectMentorList", so, rowBounds);
	}

	public Member selectMentorDetail(SqlSessionTemplate sqlSession, int mentorNo) {
		return sqlSession.selectOne("memberMapper.selectMentorDetail", mentorNo);
	}

	public int countMentorLike(SqlSessionTemplate sqlSession, int mentorNo) {
		return sqlSession.selectOne("memberMapper.countMentorLike", mentorNo);
	}

	public ArrayList<License> selectLicenseList(SqlSessionTemplate sqlSession) {
		return (ArrayList)sqlSession.selectList("commonMapper.selectLicenseList");
	}

	public Integer checkLike(SqlSessionTemplate sqlSession, HashMap<String, Integer> likeInfo) {
		return sqlSession.selectOne("memberMapper.checkLike", likeInfo);
	}

	public int likeMentor(SqlSessionTemplate sqlSession, HashMap<String, Integer> likeInfo) {
		return sqlSession.insert("memberMapper.likeMentor", likeInfo);
	}
	
	public int deleteLikeMentor(SqlSessionTemplate sqlSession, HashMap<String, Integer> likeInfo) {
		return sqlSession.delete("memberMapper.deleteLikeMentor",likeInfo);
	}

}
