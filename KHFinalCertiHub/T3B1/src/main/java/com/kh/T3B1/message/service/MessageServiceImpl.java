package com.kh.T3B1.message.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.message.model.dao.MessageDao;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MessageServiceImpl implements MessageService {

	public final SqlSessionTemplate sqlSession;
	
	public final MessageDao messageDao;

	@Override
	public ArrayList<Talkroom> selectMentorList(int memberNo) {
		return messageDao.selectMentorList(sqlSession, memberNo);
	}

	@Override
	public ArrayList<Talkroom> selectStudyList(int memberNo) {
		return messageDao.selectStudyList(sqlSession, memberNo);
	}

	@Override
	public Integer countMessage(int talkroomNo) {
		return messageDao.countMessage(sqlSession, talkroomNo);
	}

	@Override
	public ArrayList<Message> selectMessageList(PageInfo pi, int talkroomNo) {
		return messageDao.selectMessageList(sqlSession, pi, talkroomNo);
	}
	
}
