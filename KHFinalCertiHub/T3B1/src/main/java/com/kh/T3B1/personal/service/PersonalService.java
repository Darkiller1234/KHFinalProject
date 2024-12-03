package com.kh.T3B1.personal.service;

import java.util.ArrayList;

import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.Calendar2;
import com.kh.T3B1.personal.model.vo.FullCalendarVo;
import com.kh.T3B1.personal.model.vo.License2;

public interface PersonalService {

	Member ajaxGetMemberInfo(int pno);

	int ajaxGetMentorSubInfo(int pno, int mNo);

	int ajaxInsertMentorSub(int pno, int mNo);

	int getLikeCount(int pno);

	int getLikeStatus(int pno, int memberNo);

	int likebtnClick(int pno, int memberNo);

	ArrayList<License2> haveLicense(int pno);

	ArrayList<License2> lookLicense(int pno);

	int saveProfile(Member m);

	void insertLookLicense(int memberNo, String string);

	ArrayList<String> getNotOwnCertiList(int pno);

	int getLicenseNo(String licenseName);

	int saveLicenseEnroll(License2 dump);

	int ajaxSetMentorEnroll(Member temp);

	int setSymbolLicense(String licenseName, int pno);

	int ajaxSetMentor(Member temp);

	int updateMember(Member temp);

	int ajaxSubmitChange(Member temp);

	int ajaxSubmitDelete(int memberNo);

	ArrayList<FullCalendarVo> ScLoad(int memberNo);

	ArrayList<FullCalendarVo> getCurrentDateInfo(int memberNo, String date);

	int deleteSc(int memberNo, int calendarNo);

	int insertSc(FullCalendarVo cal);

}
