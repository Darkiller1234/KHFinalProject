package com.kh.T3B1.community.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;

public interface CommunityService {
	//게시글 총 갯수 가져오기
	int selectListCount(Board dump);
	
	//게시글 목록 가져오기
	ArrayList<Board> selectList(PageInfo pi, Board dump);

	//자격증 목록 가져오기
	ArrayList<String> selectCertiList();

	//1페이지용 공지목록(최대 최근 5개) 가져오기
	ArrayList<Board> selectNotiList(Board dump);

	//글 내용 가져오기
	Board selectBoardOne(int cno);

	//글 조회수 올리기
	boolean increaseViewCount(int cno);

	//글쓴사람 프로필사진 가져오기
	String ajaxCommunityWriterProfileImg(int cno);

	//좋아요 눌렀었는지 확인하기
	int ajaxCommunityLikeStatusJson(int cno, int memberNo);

	//좋아요 누르기
	int ajaxCommunityLikeBtnClickJson(int cno, int memberNo);

	//싫어요 누르기
	int ajaxCommunityHateBtnClickJson(int cno, int memberNo);

	int insertBoard(Board b);

	int ajaxClickDeleteBtn(int cno, int memberNo);

	int ajaxClickEditBtn(int cno, int memberNo);

	int updateBoard(Board b);

	int replySelectListCount(int cno);

	ArrayList<Reply> selectReplyList(PageInfo pi, int cno);

	int replyWrite(Reply r);
}
