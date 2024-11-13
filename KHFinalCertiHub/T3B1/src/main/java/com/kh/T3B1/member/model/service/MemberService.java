package com.kh.T3B1.member.model.service;

import com.kh.T3B1.member.model.vo.Member;

public interface MemberService {
	
	
	
	int membershipPage(Member m);

	int idCheck(String checkId);

}
