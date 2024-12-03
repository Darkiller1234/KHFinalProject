package com.kh.T3B1.message.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.message.model.vo.ApplyLog;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;

public interface MessageService {

	/**
	 * @param int memberNo(조회할 멤버 번호)
	 * @return Integer 멘토 톡방 수
	 */
	Integer countMentor(int memberNo);

	/**
	 * @param PageInfo pi( pageLimit, currentPage ), int memberNo(조회할 멤버 번호)
	 * @return ArrayList Talkroom 멘토 톡방 정보
	 */
	ArrayList<Talkroom> selectMentorList(PageInfo pi, int memberNo);
	
	/**
	 * @param int memberNo(조회할 멤버 번호)
	 * @return Integer 스터디 톡방 수
	 */
	Integer countStudy(int memberNo);

	/**
	 * @param PageInfo pi( pageLimit, currentPage ), int memberNo(조회할 멤버 번호)
	 * @return ArrayList Talkroom 스터디 톡방 정보
	 */
	ArrayList<Talkroom> selectStudyList(PageInfo pi, int memberNo);

	/**
	 * @param Integer talkroomNo(톡방 번호)
	 * @return Integer 메시지 개수
	 */
	Integer countMessage(int talkroomNo);

	/**
	 * @param PageInfo pi( pageLimit, currentPage ), int talkroomNo( 톡방번호 )
	 * @return ArrayList Message
	 */
	ArrayList<Message> selectMessageList(PageInfo pi, int talkroomNo);

	/**
	 * @param int memberNo(조회할 멤버 번호)
	 * @return Integer 해당 멤버가 받은 신청 개수
	 */
	Integer countApply(int memberNo);
	
	/**
	 * @param PageInfo pi( pageLimit, currentPage ), int memberNo(조회할 멤버 번호)
	 * @return ArrayList ApplyLog 신청목록
	 */
	ArrayList<ApplyLog> selectApplyList(PageInfo pi, int memberNo);

}
