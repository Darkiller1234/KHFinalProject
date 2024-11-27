package com.kh.T3B1.member.model.service;

import java.util.Random;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.T3B1.member.dao.MemberDao;
import com.kh.T3B1.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired
	private MemberDao memberDao;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;	
	
	@Autowired
	private JavaMailSender mailSender;
	
	
	public int membershipPage(Member m) {
		return memberDao.membershipPage(sqlSession, m);
	}


	@Override
	public int idCheck(String checkId) {
		return memberDao.idCheck(sqlSession, checkId);
	}


	@Override
	public Member loginMember(Member m) {
		return memberDao.loginMember(sqlSession, m);
	}


	@Override
	public int nicknameCheck(String checknickName) {
		return memberDao.nicknameCheck(sqlSession, checknickName);
	}


	@Override
	public String findId(String memberName, String email) {
		String memberid = memberDao.findId(sqlSession, memberName, email);
		return memberid;
	}


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
		
		
		return tempPassword;
		
	}
	
	private void sendTemporaryPasswordEmail(String email, String tempPassword) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject("임시 비밀번호 발급 안내");
		message.setText("요청하신 임시 비밀번호는" + 
						tempPassword + 
						"로그인 후 비밀번호를 변경해 주세요.");
		
		mailSender.send(message);
	}

	private String generateTempPassword() {
		int length = 8; //임시 비밀번호 길이
		String charSet = "abcdefghijklmnopqrstuvwxyz1234567890";
		StringBuilder tempPassword = new StringBuilder();
		Random random = new Random();
		
		for(int i = 0; i < length; i++) {
			int index = random.nextInt(charSet.length());
			tempPassword.append(charSet.charAt(index));
		}
		return tempPassword.toString();
	}


}
