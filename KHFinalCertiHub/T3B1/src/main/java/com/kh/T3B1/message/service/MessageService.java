package com.kh.T3B1.message.service;

import java.util.ArrayList;

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

}