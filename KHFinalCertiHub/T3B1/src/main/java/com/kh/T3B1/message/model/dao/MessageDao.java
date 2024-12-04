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
import com.kh.T3B1.study.model.vo.Study;

@Repository
public class MessageDao {
	
	public Integer countMentor(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.selectOne("messageMapper.countMentor", memberNo);
	}

	public ArrayList<Talkroom> selectMentorList(SqlSessionTemplate sqlSession, PageInfo pi, int memberNo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("messageMapper.selectMentorList", memberNo, rowBounds);
	}
	
	public Integer countStudy(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.selectOne("messageMapper.countStudy", memberNo);
	}

	public ArrayList<Talkroom> selectStudyList(SqlSessionTemplate sqlSession, PageInfo pi, int memberNo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("messageMapper.selectStudyList",memberNo, rowBounds);
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

	public ArrayList<ApplyLog> selectApplyList(SqlSessionTemplate sqlSession, PageInfo pi, int memberNo) {
		int offset = (pi.getCurrentPage() - 1) * pi.getPageLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getPageLimit());
		
		return (ArrayList)sqlSession.selectList("messageMapper.selectApplyList", memberNo, rowBounds);
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

	public int insertMentorTalkroomMember(SqlSessionTemplate sqlSession, int memberNo) {
		return  sqlSession.insert("messageMapper.insertMentorTalkroomMember", memberNo);
	}
	
	public int insertTalkroomMember(SqlSessionTemplate sqlSession, HashMap<String, Integer> searchInfo) {
		return sqlSession.insert("messageMapper.insertTalkroomMember", searchInfo);
	}

	public int selectStudyTalkroomNo(SqlSessionTemplate sqlSession, Integer studyNo) {
		return sqlSession.selectOne("messageMapper.selectStudyTalkroomNo", studyNo);
	}

	public Integer deleteApplyLog(SqlSessionTemplate sqlSession, int applyNo) {
		return sqlSession.delete("messageMapper.deleteApplyLog");
	}

}
