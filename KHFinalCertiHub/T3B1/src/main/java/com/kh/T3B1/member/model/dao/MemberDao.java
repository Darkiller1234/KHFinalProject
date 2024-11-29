package com.kh.T3B1.member.model.dao;

import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.member.model.vo.Member;

@Repository // DAO를 Spring에서 관리하는 빈으로 등록
public class MemberDao {
	
	// 회원가입 처리
    // 매개변수: SqlSessionTemplate (MyBatis 세션 관리), Member 객체 (회원 정보)
    // 반환값: 처리 결과 (성공: 1, 실패: 0)
	public int membershipPage(SqlSessionTemplate sqlSession, Member m) {
		return sqlSession.insert("memberMapper.membershipPage", m);
	}
	
	// 아이디 중복 체크
    // 매개변수: SqlSessionTemplate, 확인할 아이디 (String)
    // 반환값: 중복 여부 (존재: 1, 없음: 0)
	public int idCheck(SqlSessionTemplate sqlSession, String checkId) {
		return sqlSession.selectOne("memberMapper.idCheck", checkId);
		
	}
	
	// 로그인 처리
    // 매개변수: SqlSessionTemplate, Member 객체 (아이디와 비밀번호)
    // 반환값: 로그인된 사용자 정보 (Member 객체), 없으면 null
	public Member loginMember(SqlSessionTemplate sqlSession, Member m) {
		return sqlSession.selectOne("memberMapper.loginMember", m);
	}
	
	// 닉네임 중복 체크
    // 매개변수: SqlSessionTemplate, 확인할 닉네임 (String)
    // 반환값: 중복 여부 (존재: 1, 없음: 0)
	public int nicknameCheck(SqlSessionTemplate sqlSession, String checknickName) {
		return sqlSession.selectOne("memberMapper.nicknameCheck", checknickName);
	}
	
	// 아이디 찾기
    // 매개변수: SqlSessionTemplate, 회원 이름 (String), 이메일 (String)
    // 반환값: 아이디 (String), 없으면 null
	public String findId(SqlSessionTemplate sqlSession, String memberName, String email) {
		// 이름과 이메일 정보를 Map에 저장하여 전달
		Map<String, String> findData = new HashMap<>();
		findData.put("memberName", memberName);
		findData.put("email", email);
		return sqlSession.selectOne("memberMapper.findId",findData);
	}
	
	// 비밀번호 찾기
    // 매개변수: SqlSessionTemplate, 회원 아이디 (String), 이메일 (String)
    // 반환값: 비밀번호 (String), 없으면 null
	public String findPwd(SqlSessionTemplate sqlSession, String memberId, String email) {
		// 아이디와 이메일 정보를 Map에 저장하여 전달
		Map<String, String> findData = new HashMap<>();
		findData.put("memberId", memberId);
		findData.put("email", email);
		return sqlSession.selectOne("memberMapper.findPwd",findData);
	}
	
	// 비밀번호 업데이트
    // 매개변수: SqlSessionTemplate, 회원 아이디 (String), 암호화된 비밀번호 (String)
    // 반환값: 없음
	public void updatePassword(SqlSessionTemplate sqlSession,String memberId, String encodePassword) {
		// 아이디와 암호화된 비밀번호를 Map에 저장하여 전달
		Map<String, String>updateData = new HashMap<>();
		updateData.put("memberId", memberId);
		updateData.put("encodePassword",encodePassword);
		sqlSession.update("memberMapper.updatePassword",updateData);		
	}

}
