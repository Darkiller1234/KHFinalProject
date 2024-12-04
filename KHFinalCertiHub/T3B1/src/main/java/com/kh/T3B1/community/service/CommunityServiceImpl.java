package com.kh.T3B1.community.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.dao.CommunityDao;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;
import com.kh.T3B1.community.model.vo.Report;
import com.kh.T3B1.personal.model.vo.License2;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CommunityServiceImpl implements CommunityService{
	
	
	@Autowired
	private final SqlSessionTemplate sqlSession;
	
	@Autowired
	private final CommunityDao communityDao;

	public int selectListCount(Board dump) {
		return communityDao.selectListCount(dump, sqlSession);
	}
	
	public ArrayList<Board> selectList(PageInfo pi, Board dump) {
		return communityDao.selectList(sqlSession, pi, dump);
	}

	@Override
	public ArrayList<String> selectCertiList() {
		return communityDao.selectCertiList(sqlSession);
	}

	@Override
	public ArrayList<Board> selectNotiList(Board dump) {
		return communityDao.selectNotiList(sqlSession, dump);
	}

	@Override
	public Board selectBoardOne(int cno) {
		return communityDao.selectBoardOne(sqlSession, cno);
	}

	@Override
	public boolean increaseViewCount(int cno) {
		return communityDao.increaseViewCount(sqlSession, cno);
	}

	@Override
	public String ajaxCommunityWriterProfileImg(int cno) {
		return communityDao.ajaxCommunityWriterProfileImg(sqlSession, cno);
	}

	@Override
	public int ajaxCommunityLikeStatusJson(int cno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("cno", cno);
		params.put("memberNo", memberNo);
		return communityDao.ajaxCommunityLikeStatusJson(sqlSession, params);
	}

	@Override
	public int ajaxCommunityLikeBtnClickJson(int cno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("cno", cno);
		params.put("memberNo", memberNo);
		if(communityDao.ajaxCommunityLikeStatusJson(sqlSession, params) > 0) {
			return 0;
		}
		int result = communityDao.ajaxCommunityLikeBtnClickJson(sqlSession, params);
		if(result > 0) {
			communityDao.addLikeCount(sqlSession, params);
		}
		return result;
	}

	@Override
	public int ajaxCommunityHateBtnClickJson(int cno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("cno", cno);
		params.put("memberNo", memberNo);
		if(communityDao.ajaxCommunityLikeStatusJson(sqlSession, params) > 0) {
			return 0;
		}
		int result = communityDao.ajaxCommunityHateBtnClickJson(sqlSession, params);
		if(result > 0) {
			communityDao.addHateCount(sqlSession, params);
		}
		return result;
	}

	@Override
	public int insertBoard(Board b) {
		int result = communityDao.insertBoard(sqlSession, b);
		if(result > 0) {
			int bNum = communityDao.selectSequence(sqlSession);
			return bNum;
		} else {
			return 0;
		}
	}

	
	@Override
	public int ajaxClickDeleteBtn(int cno, int memberNo) {
		if(communityDao.selectBoardOne(sqlSession, cno).getMemberNo() == memberNo){
			return communityDao.deleteBoardOne(sqlSession, cno);
			
		} else {
			return 0;
		}
	}
	
	@Override
	public int ajaxClickEditBtn(int cno, int memberNo) {
		if(communityDao.selectBoardOne(sqlSession, cno).getMemberNo() == memberNo){
			return 1;
			
		} else {
			return 0;
		}
	}

	@Override
	public int updateBoard(Board b){
		int result = communityDao.updateBoard(sqlSession, b);
		if(result > 0) {
			int bNum = b.getBoardNo();
			return bNum;
		} else {
			return 0;
		}
	}

	@Override
	public int replySelectListCount(int cno) {
		return communityDao.replySelectListCount(sqlSession, cno);
	}

	@Override
	public ArrayList<Reply> selectReplyList(PageInfo pi, int cno) {
		return communityDao.selectReplyList(sqlSession, pi, cno);
	}

	@Override
	public int replyWrite(Reply r) {
		return communityDao.replyWrite(sqlSession, r);
	}

	@Override
	public int deleteReply(int replyNo) {
		return communityDao.deleteReply(sqlSession, replyNo);
	}

	@Override
	public int editReply(Reply temp) {
		return communityDao.editReply(sqlSession, temp);
	}

	@Override
	public ArrayList<Reply> selectChildReplyList(ArrayList<Reply> list) {
		ArrayList<Reply> result = new ArrayList<Reply>();
		for(Reply r : list) {
			ArrayList<Reply> temp = communityDao.selectChildReplyList(sqlSession, r.getReplyNo());
			if(temp != null) {
				result.addAll(temp);
			}
		}
		return result;
	}

	@Override
	public int checkReportBoard(int cno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("cno", cno);
		params.put("memberNo", memberNo);
		return communityDao.checkReportBoard(sqlSession, params);
	}

	@Override
	public int getBoardWriter(int boardNo) {
		return communityDao.getBoardWriter(sqlSession, boardNo);
	}

	@Override
	public int insertReportBoard(Report r) {
		return communityDao.insertReportBoard(sqlSession, r);
	}

	@Override
	public int checkReportReply(int cno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("cno", cno);
		params.put("memberNo", memberNo);
		return communityDao.checkReportReply(sqlSession, params);
	}

	@Override
	public int getReplyWriter(int replyNo) {
		return communityDao.getReplyWriter(sqlSession, replyNo);
	}

	@Override
	public int insertReportReply(Report r) {
		return communityDao.insertReportReply(sqlSession, r);
	}

	@Override
	public ArrayList<License2> getCertiList(String search) {
		return communityDao.getCertiList(sqlSession, search);
	}
}
