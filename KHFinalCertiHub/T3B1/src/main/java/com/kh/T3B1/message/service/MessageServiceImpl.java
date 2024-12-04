package com.kh.T3B1.message.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

	@Transactional(rollbackFor = {Exception.class})
	@Override
	public String createTalkroom(HashMap<String, Integer> searchInfo) {
		String result = "Y";
		
		int talkResult = messageDao.insertMentorTalkroom(sqlSession, searchInfo);
		if(talkResult == 0) {
			throw new RuntimeException("멘토 톡방 생성 실패");
		}
		
		int mentorResult = messageDao.insertMentorTalkroomMember(sqlSession, searchInfo.get("memberNo"));
		if(mentorResult == 0) {
			throw new RuntimeException("멘토 톡방 가입 실패");
		}
		
		int menteeResult = messageDao.insertMentorTalkroomMember(sqlSession, searchInfo.get("applicantNo"));
		if(menteeResult == 0) {
			throw new RuntimeException("멘티 톡방 가입 실패");
		}
		
		return result;
	}

	@Override
	public String deleteApplyLog(int applyNo) {
		String result = "N";
		
		Integer deleteResult = messageDao.deleteApplyLog(sqlSession,applyNo);
		if(deleteResult != null && deleteResult != 0) {
			result = "Y";
		}
		
		return result;
	}
	
}
