package com.kh.T3B1.message.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.message.model.vo.ApplyLog;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class MessageDao {
	
	public Integer countMentor(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.selectOne("messageMapper.countMentor", memberNo);
	}

	public ArrayList<Talkroom> selectMentorList(SqlSessionTemplate sqlSession, PageInfo pi, HashMap<String, Object> searchInfo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("messageMapper.selectMentorList", searchInfo, rowBounds);
	}
	
	public Integer countStudy(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.selectOne("messageMapper.countStudy", memberNo);
	}

	public ArrayList<Talkroom> selectStudyList(SqlSessionTemplate sqlSession, PageInfo pi, HashMap<String, Object> searchInfo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("messageMapper.selectStudyList", searchInfo, rowBounds);
	}

	public Integer countMessage(SqlSessionTemplate sqlSession, int talkroomNo) {
		return sqlSession.selectOne("messageMapper.countMessage", talkroomNo);
	}

	public ArrayList<Message> selectMessageList(SqlSessionTemplate sqlSession, PageInfo pi, int talkroomNo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("messageMapper.selectMessageList", talkroomNo, rowBounds);
	}

	public Integer countApply(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.selectOne("messageMapper.countApply", memberNo);
	}

	public ArrayList<ApplyLog> selectApplyList(SqlSessionTemplate sqlSession, PageInfo pi, HashMap<String, Object> searchInfo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());

		return (ArrayList)sqlSession.selectList("messageMapper.selectApplyList", searchInfo, rowBounds);
	}

	public Integer insertMessage(SqlSessionTemplate sqlSession, Message sendMessage) {
		return sqlSession.insert("messageMapper.insertMessage", sendMessage);
	}

	public int insertMentorTalkroom(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.insert("messageMapper.insertMentorTalkroom", searchInfo);
	}
	
	public int insertStudyTalkroom(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.insert("messageMapper.insertStudyTalkroom", memberNo);
	}

	public int initTalkroomMember(SqlSessionTemplate sqlSession, int memberNo) {
		return  sqlSession.insert("messageMapper.initTalkroomMember", memberNo);
	}
	
	public int insertTalkroomMember(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.insert("messageMapper.insertTalkroomMember", searchInfo);
	}

	public int selectStudyTalkroomNo(SqlSessionTemplate sqlSession, Integer studyNo) {
		return sqlSession.selectOne("messageMapper.selectStudyTalkroomNo", studyNo);
	}

	public Integer deleteApplyLog(SqlSessionTemplate sqlSession, int applyNo) {
		return sqlSession.delete("messageMapper.deleteApplyLog", applyNo);
	}

	public int updateApply(SqlSessionTemplate sqlSession, Integer applyNo) {
		return sqlSession.update("messageMapper.updateApply", applyNo);
	}

	public String selectLastMessage(SqlSessionTemplate sqlSession, int talkroomNo) {
		return sqlSession.selectOne("messageMapper.selectLastMessage", talkroomNo);
	}

	public ArrayList<Integer> selectTalkroomList(SqlSessionTemplate sqlSession, int memberNo) {
		return (ArrayList)sqlSession.selectList("messageMapper.selectTalkroomList", memberNo);
	}

	public Integer isTalkroomMember(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.selectOne("messageMapper.isTalkroomMember", searchInfo);
	}

	public Integer isRecipient(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.selectOne("messageMapper.isRecipient", searchInfo);
	}

}
