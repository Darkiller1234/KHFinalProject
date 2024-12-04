package com.kh.T3B1.message.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.message.model.dao.MessageDao;
import com.kh.T3B1.message.model.vo.ApplyLog;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MessageServiceImpl implements MessageService {

	public final SqlSessionTemplate sqlSession;
	
	public final MessageDao messageDao;
	
	@Override
	public Integer countMentor(int memberNo) {
		return messageDao.countMentor(sqlSession, memberNo);
	}

	@Override
	public ArrayList<Talkroom> selectMentorList(PageInfo pi, int memberNo) {
		return messageDao.selectMentorList(sqlSession, pi, memberNo);
	}
	
	@Override
	public Integer countStudy(int memberNo) {
		return messageDao.countStudy(sqlSession, memberNo);
	}

	@Override
	public ArrayList<Talkroom> selectStudyList(PageInfo pi, int memberNo) {
		return messageDao.selectStudyList(sqlSession, pi, memberNo);
	}

	@Override
	public Integer countMessage(int talkroomNo) {
		return messageDao.countMessage(sqlSession, talkroomNo);
	}

	@Override
	public ArrayList<Message> selectMessageList(PageInfo pi, int talkroomNo) {
		return messageDao.selectMessageList(sqlSession, pi, talkroomNo);
	}
	
	@Override
	public Integer countApply(int memberNo) {
		return messageDao.countApply(sqlSession, memberNo);
	}

	@Override
	public ArrayList<ApplyLog> selectApplyList(PageInfo pi, int memberNo) {
		return messageDao.selectApplyList(sqlSession, pi, memberNo);
	}

	@Override
	public Integer insertMessage(Message sendMessage) {
		return messageDao.insertMessage(sqlSession, sendMessage);
	}
	
}
