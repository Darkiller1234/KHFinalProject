package com.kh.T3B1.chatbot.model.dao;

import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class ChatbotDao {
	
	public Integer getDailyRequestCount(SqlSessionTemplate sqlSession, String ip) {
		return sqlSession.selectOne("chatbotMapper.getDailyRequestCount", ip);
	}

	public int insertLog(SqlSessionTemplate sqlSession, HashMap<String, String> sendInfo) {
		return sqlSession.insert("chatbotMapper.insertLog",sendInfo);
	}

}
