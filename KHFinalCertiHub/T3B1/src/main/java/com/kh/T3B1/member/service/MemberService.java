package com.kh.T3B1.member.service;

import com.kh.T3B1.member.model.vo.Member;

public interface MemberService {
	
	
	// 회원가입 처리
    // 매개변수: Member 객체 (회원 정보)
    // 반환값: 처리 결과 (성공: 1, 실패: 0)
	int membershipPage(Member m);
	
	// 아이디 중복 체크
    // 매개변수: 확인할 아이디 (String)
    // 반환값: 중복 여부 (중복 존재: 1, 중복 없음: 0)
	int idCheck(String checkId);
	
	// 로그인 처리
    // 매개변수: Member 객체 (아이디와 비밀번호)
    // 반환값: 로그인된 사용자 정보 (Member 객체), 없으면 null
	Member loginMember(Member m);
	
	// 닉네임 중복 체크
    // 매개변수: 확인할 닉네임 (String)
    // 반환값: 중복 여부 (중복 존재: 1, 중복 없음: 0)
	int nicknameCheck(String checknickName);
	
	// 아이디 찾기
    // 매개변수: 회원 이름 (String), 이메일 (String)
    // 반환값: 아이디 (String), 없으면 null
	String findId(String memberName, String email);
	
	// 비밀번호 찾기
    // 매개변수: 회원 아이디 (String), 이메일 (String)
    // 반환값: 임시 비밀번호 (String), 없으면 null
	String findPwd(String memberId, String email);
	
}
