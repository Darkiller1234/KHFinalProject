package com.kh.T3B1.study.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.study.model.dao.StudyDao;
import com.kh.T3B1.study.model.vo.Study;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class StudyServiceImpl implements StudyService{
	
	@Autowired
	public final SqlSessionTemplate sqlSession;
	
	@Autowired
	public final StudyDao studyDao;

	@Override
	public int countStudy() {
		return studyDao.countStudy(sqlSession);
	}

	@Override
	public ArrayList<Study> selectStudyList(PageInfo pi, SearchOption so) {
		return studyDao.selectStudyList(sqlSession, pi, so);
	}

	@Override
	public Study selectStudy(int no) {
		return studyDao.selectStudy(sqlSession, no);
	}

	@Override
	public int countStudyMember(int no) {
		return studyDao.countStudyMember(sqlSession, no);
	}

	@Override
	public ArrayList<Member> selectStudyMemberList(PageInfo pi, SearchOption so) {
		return studyDao.selectStudyMemberList(sqlSession, pi, so);
	}
	
}
