package com.kh.T3B1.message.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.message.model.vo.Talkroom;

public interface MessageService {

	/**
	 * @param int memberNo(조회할 멤버 번호)
	 * @return ArrayList<Talkroom> 멘토 톡방 정보
	 */
	ArrayList<Talkroom> selectMentorList(int memberNo);

	/**
	 * @param int memberNo(조회할 멤버 번호)
	 * @return ArrayList<Talkroom> 스터디 톡방 정보
	 */
	ArrayList<Talkroom> selectStudyList(int memberNo);

	/**
	 * @Param Integer talkroomNo(톡방 번호)
	 * @return Integer 메시지 개수
	 */
	Integer countMessage(int talkroomNo);

	/**
	 * @Param PageInfo pi( pageLimit, currentPage ), talkroomNo( 톡방번호 )
	 * @return ArrayList Message
	 */
	ArrayList<Message> selectMessageList(PageInfo pi, int talkroomNo);

}
