package com.kh.T3B1.member.service;

import java.util.Random;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.T3B1.member.model.dao.MemberDao;
import com.kh.T3B1.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService{
	
	// MyBatis의 SqlSessionTemplate 의존성 주입
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	// 데이터 접근 객체(DAO) 의존성 주입
	@Autowired
	private MemberDao memberDao;
	
	// 비밀번호 암호화를 위한 BCryptPasswordEncoder 의존성 주입
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;	
	
	// 이메일 전송을 위한 JavaMailSender 의존성 주입
	@Autowired
	private JavaMailSender mailSender;
	
	// 회원가입 처리
	public int membershipPage(Member m) {
		return memberDao.membershipPage(sqlSession, m);
	}

	// 아이디 중복 체크
	@Override
	public int idCheck(String checkId) {
		return memberDao.idCheck(sqlSession, checkId);
	}

	// 로그인 처리
	@Override
	public Member loginMember(Member m) {
		return memberDao.loginMember(sqlSession, m);
	}

	// 닉네임 중복 체크
	@Override
	public int nicknameCheck(String checknickName) {
		return memberDao.nicknameCheck(sqlSession, checknickName);
	}

	// 아이디 찾기
	@Override
	public String findId(String memberName, String email) {
		// DB에서 이름과 이메일로 아이디 검색
		String memberid = memberDao.findId(sqlSession, memberName, email);
		return memberid; // 결과 반환
	}

	// 비밀번호 찾기
	@Override
	public String findPwd(String memberId, String email) {
		// 1. 기존 회원 정보 확인
		String memberPwd = memberDao.findPwd(sqlSession, memberId, email);
		if(memberPwd == null) {
			return null;
		}
		
		// 2. 임시 비밀번호 생성
		String tempPassword = generateTempPassword();
		
		// 3. 암호화된 비밀번호로 DB 업데이트
		String encodePassword = passwordEncoder.encode(tempPassword);
		memberDao.updatePassword(sqlSession,memberId,encodePassword);
		
		//4. 이메일로 임시 비밀번호 전송
		sendTemporaryPasswordEmail(email,tempPassword);
		
		// 생성된 임시 비밀번호 반환
		return tempPassword;
		
	}
	
	 // 이메일로 임시 비밀번호 전송
	private void sendTemporaryPasswordEmail(String email, String tempPassword) {
		// SimpleMailMessage를 사용하여 이메일 메시지 생성
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email); // 수신자 설정
		message.setSubject("임시 비밀번호 발급 안내"); // 이메일 제목 설정
		message.setText("요청하신 임시 비밀번호는" + 
						tempPassword + 
						"로그인 후 비밀번호를 변경해 주세요."); // 이메일 본문 설정
		
		// 이메일 전송
		mailSender.send(message);
	}
	
	// 임시 비밀번호 생성 메서드
	private String generateTempPassword() {
		
		int length = 8; //임시 비밀번호 길이
		String charSet = "abcdefghijklmnopqrstuvwxyz1234567890"; // 사용할 문자 집합
		StringBuilder tempPassword = new StringBuilder();
		Random random = new Random();
		
		// 길이만큼 랜덤하게 문자 선택
		for(int i = 0; i < length; i++) {
			int index = random.nextInt(charSet.length()); // 문자 집합에서 랜덤 인덱스 선택
			tempPassword.append(charSet.charAt(index)); // 선택된 문자 추가
		}
		// 생성된 임시 비밀번호 반환
		return tempPassword.toString();
	}

	@Override
	public int naverMemberCheck(String id) {
		return memberDao.naverMemberCheck(sqlSession,id);
	}

	@Override
	public int naverJoin(Member m) {
		return memberDao.naverJoin(sqlSession,m);
	}

	@Override
	public Member getNaverMember(String id) {
		return memberDao.getNaverMember(sqlSession,id);
	}


}
