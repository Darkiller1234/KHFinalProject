package com.kh.T3B1.mentor.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.mentor.model.dao.MentorDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor // 의존성 주입, 초기화 되지 않은 final 필드에 생성자 생성
@Service
public class MentorServiceImpl implements MentorService {
	public final SqlSessionTemplate sqlSession;
	
	public final MentorDao mentorDao;
}
