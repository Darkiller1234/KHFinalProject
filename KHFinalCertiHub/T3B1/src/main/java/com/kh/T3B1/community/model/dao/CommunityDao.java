package com.kh.T3B1.community.model.dao;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;

@Repository
public class CommunityDao {

	public int selectListCount(Board dump, SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("boardMapper.selectListCount", dump);
	}

	public ArrayList<Board> selectList(SqlSessionTemplate sqlSession, PageInfo pi, Board dump) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		return (ArrayList)sqlSession.selectList("boardMapper.selectList", dump, rowBounds);
	}

	public ArrayList<String> selectCertiList(SqlSessionTemplate sqlSession) {
		return (ArrayList)sqlSession.selectList("boardMapper.selectCertiList");
	}

	public ArrayList<Board> selectNotiList(SqlSessionTemplate sqlSession, Board dump) {
		
		RowBounds rowBounds = new RowBounds(0, 5);
		return (ArrayList)sqlSession.selectList("boardMapper.selectNotiList", dump, rowBounds);
	}

	public Board selectBoardOne(SqlSessionTemplate sqlSession, int cno) {
		return (Board)sqlSession.selectOne("boardMapper.selectBoardOne", cno);
	}

	public boolean increaseViewCount(SqlSessionTemplate sqlSession, int cno) {
		return (sqlSession.update("boardMapper.increaseViewCount", cno) > 0)? true : false;
	}

	public String ajaxCommunityWriterProfileImg(SqlSessionTemplate sqlSession, int cno) {
		return sqlSession.selectOne("boardMapper.ajaxCommunityWriterProfileImg", cno);
	}

	public int ajaxCommunityLikeStatusJson(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		if(sqlSession.selectOne("boardMapper.ajaxCommunityLikeStatusJson1", params) != null) {
			return 1;
		} else if(sqlSession.selectOne("boardMapper.ajaxCommunityLikeStatusJson2", params) != null) {
			return 2;
		}
		return 0;
	}

	public int ajaxCommunityLikeBtnClickJson(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.insert("boardMapper.ajaxCommunityLikeBtnClickJson", params);
	}

	public int ajaxCommunityHateBtnClickJson(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.insert("boardMapper.ajaxCommunityHateBtnClickJson", params);
	}

	public void addLikeCount(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		sqlSession.update("boardMapper.addLikeCount", params);
		
	}

	public void addHateCount(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		sqlSession.update("boardMapper.addHateCount", params);
		
	}

	public int insertBoard(SqlSessionTemplate sqlSession, Board b) {
		return sqlSession.insert("boardMapper.insertBoard", b);
	}

	public int selectSequence(SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("boardMapper.selectSequence");
	}

	public int deleteBoardOne(SqlSessionTemplate sqlSession, int cno) {
		return sqlSession.update("boardMapper.deleteBoard", cno);
	}

	public int updateBoard(SqlSessionTemplate sqlSession, Board b) {
		return sqlSession.update("boardMapper.updateBoard", b);
	}

	public int replySelectListCount(SqlSessionTemplate sqlSession, int cno) {
		return sqlSession.selectOne("replyMapper.selectListCount", cno);
	}

	public ArrayList<Reply> selectReplyList(SqlSessionTemplate sqlSession, PageInfo pi, int cno) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		return (ArrayList)sqlSession.selectList("replyMapper.selectList", cno, rowBounds);
	}

	public int replyWrite(SqlSessionTemplate sqlSession, Reply r) {
		
		return sqlSession.insert("replyMapper.insertReply", r);
	}

	public int deleteReply(SqlSessionTemplate sqlSession, int replyNo) {

		return sqlSession.update("replyMapper.deleteReply", replyNo);
	}

	public int editReply(SqlSessionTemplate sqlSession, Reply temp) {
		return sqlSession.update("replyMapper.editReply", temp);
	}

	public ArrayList<Reply> selectChildReplyList(SqlSessionTemplate sqlSession, int replyNo) {
		return (ArrayList)sqlSession.selectList("replyMapper.selectChildReplyList", replyNo);
	}
}
