package com.kh.T3B1.personal.service;

import com.kh.T3B1.member.model.vo.Member;

public interface PersonalService {

	Member ajaxGetMemberInfo(int pno);

	int ajaxGetMentorSubInfo(int pno, int mNo);

	int ajaxInsertMentorSub(int pno, int mNo);

}
