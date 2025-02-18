package com.kh.T3B1.message.service;

import java.util.ArrayList;
import java.util.HashMap;

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
	 * @param PageInfo pi( pageLimit, currentPage ), HashMap key=int memberNo(조회할 멤버 번호), String keyword(검색어)
	 * @return ArrayList Talkroom 멘토 톡방 정보
	 */
	ArrayList<Talkroom> selectMentorList(PageInfo pi, HashMap<String, Object> searchInfo);
	
	/**
	 * @param int memberNo(조회할 멤버 번호)
	 * @return Integer 스터디 톡방 수
	 */
	Integer countStudy(int memberNo);

	/**
	 * @param PageInfo pi( pageLimit, currentPage ), HashMap key=int memberNo(조회할 멤버 번호), String keyword(검색어)
	 * @return ArrayList Talkroom 스터디 톡방 정보
	 */
	ArrayList<Talkroom> selectStudyList(PageInfo pi, HashMap<String, Object> searchInfo);

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
	 * @param PageInfo pi( pageLimit, currentPage ), HashMap key=int memberNo(조회할 멤버 번호), String keyword(검색어)
	 * @return ArrayList ApplyLog 신청목록
	 */
	ArrayList<ApplyLog> selectApplyList(PageInfo pi, HashMap<String, Object> searchInfo);

	/**
	 * @param Message (memberNo, memberName, memberImg, talkroomNo, messageContent, messageDate)
	 * @return insert 결과 행 수
	 */
	Integer insertMessage(Message sendMessage);

	/**
	 * @param HashMap key=memberNo(멘토 번호), applicantNo(신청 유저 번호)
	 * @return 성공=Y, 실패= RuntimeException
	 */
	String createTalkroom(HashMap<String, Integer> searchInfo);

	/**
	 * @param int applyNo(요청 번호)
	 * @return 성공=Y, 실패=N
	 */
	String deleteApplyLog(int applyNo);

	/**
	 * @param int memberNo
	 * @return ArrayList 멤버가 속한 톡방 번호목록
	 */
	ArrayList<Integer> selectTalkroomList(int memberNo);

	/**
	 * 요청한 톡방에 멤버가 속해있는지 확인
	 * @param HashMap key=talkroomNo(톡방번호), memberNo(멤버번호)
	 * @return true=포함, false=비포함
	 */
	boolean isTalkroomMember(HashMap<String, Integer> searchInfo);

	/**
	 * 요청을 받은 당사자인지 확인
	 * @param HashMap key=applyNo(신청번호), applicantNo(신청인), memberNo(수취인)
	 * @return true=본인, false=본인X
	 */
	boolean isRecipient(HashMap<String, Integer> searchInfo);

}
