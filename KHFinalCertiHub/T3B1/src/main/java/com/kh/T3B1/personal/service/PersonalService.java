package com.kh.T3B1.personal.service;

import java.util.ArrayList;

import com.kh.T3B1.member.model.vo.Member;
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

}
