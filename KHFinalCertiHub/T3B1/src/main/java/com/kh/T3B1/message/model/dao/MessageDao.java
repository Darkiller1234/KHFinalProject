package com.kh.T3B1.message.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.message.model.vo.Talkroom;

@Repository
public class MessageDao {

	public ArrayList<Talkroom> selectMentorList(SqlSessionTemplate sqlSession, int memberNo) {
		return (ArrayList)sqlSession.selectList("messageMapper.selectMentorList",memberNo);
	}

	public ArrayList<Talkroom> selectStudyList(SqlSessionTemplate sqlSession, int memberNo) {
		return (ArrayList)sqlSession.selectList("messageMapper.selectStudyList",memberNo);
	}

}
