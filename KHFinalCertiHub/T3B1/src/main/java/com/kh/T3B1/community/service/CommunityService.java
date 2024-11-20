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

	//글쓰기
	int insertBoard(Board b);

	//글삭제하기
	int ajaxClickDeleteBtn(int cno, int memberNo);

	//글수정하기
	int ajaxClickEditBtn(int cno, int memberNo);

	//글수정완료하기
	int updateBoard(Board b);

	//댓글갯수 가져오기
	int replySelectListCount(int cno);

	//댓글리스트 가져오기
	ArrayList<Reply> selectReplyList(PageInfo pi, int cno);

	//댓글 쓰기
	int replyWrite(Reply r);

	//댓글 삭제하기
	int deleteReply(int replyNo);
	
	//댓글 수정하기
	int editReply(Reply temp);

	ArrayList<Reply> selectChildReplyList(ArrayList<Reply> list);
}
