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
	public ArrayList<Talkroom> selectMentorList(PageInfo pi, HashMap<String, Object> searchInfo) {
		ArrayList<Talkroom> talkList = messageDao.selectMentorList(sqlSession, pi, searchInfo);
		
		for(Talkroom talk : talkList) {
			String lastMessage = messageDao.selectLastMessage(sqlSession, talk.getTalkroomNo());
			talk.setLastMessage(lastMessage);
		}
		
		return talkList;
	}
	
	@Override
	public Integer countStudy(int memberNo) {
		return messageDao.countStudy(sqlSession, memberNo);
	}

	@Override
	public ArrayList<Talkroom> selectStudyList(PageInfo pi, HashMap<String, Object> searchInfo) {
		return messageDao.selectStudyList(sqlSession, pi, searchInfo);
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
	public ArrayList<ApplyLog> selectApplyList(PageInfo pi, HashMap<String, Object> searchInfo) {
		return messageDao.selectApplyList(sqlSession, pi, searchInfo);
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
		
		int mentorResult = messageDao.initTalkroomMember(sqlSession, searchInfo.get("memberNo"));
		if(mentorResult == 0) {
			throw new RuntimeException("멘토 톡방 가입 실패");
		}
		
		int menteeResult = messageDao.initTalkroomMember(sqlSession, searchInfo.get("applicantNo"));
		if(menteeResult == 0) {
			throw new RuntimeException("멘티 톡방 가입 실패");
		}
		
		int applyResult = messageDao.updateApply(sqlSession, searchInfo.get("applyNo"));
		if(applyResult == 0) {
			throw new RuntimeException("요청 승인 날짜 처리 실패");
		}
		
		return result;
	}

	@Override
	public String deleteApplyLog(int applyNo) {
		String result = "N";
		
		Integer deleteResult = messageDao.deleteApplyLog(sqlSession, applyNo);
		if(deleteResult != null && deleteResult != 0) {
			result = "Y";
		}
		
		return result;
	}

	@Override
	public ArrayList<Integer> selectTalkroomList(int memberNo) {
		return messageDao.selectTalkroomList(sqlSession, memberNo);
	}

	@Override
	public boolean isTalkroomMember(HashMap<String, Integer> searchInfo) {
		Integer result = messageDao.isTalkroomMember(sqlSession, searchInfo);
		
		if(result != null) {
			return true;
		}
		
		return false;
	}
	
}
