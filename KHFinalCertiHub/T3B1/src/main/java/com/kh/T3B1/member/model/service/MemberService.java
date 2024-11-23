package com.kh.T3B1.member.model.service;

import com.kh.T3B1.member.model.vo.Member;

public interface MemberService {
	
	
	
	int membershipPage(Member m);

	int idCheck(String checkId);

	Member loginMember(Member m);

	int nicknameCheck(String checknickName);
	
	String findId(String memberName, String email);

	String findPwd(String memberId, String email);

	


	
}
