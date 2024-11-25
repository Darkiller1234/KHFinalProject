package com.kh.T3B1.personal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.dao.PersonalDao;
import com.kh.T3B1.personal.model.vo.License2;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class PersonalServiceImpl implements PersonalService{
	
	@Autowired
	private final SqlSessionTemplate sqlSession;
	
	@Autowired
	private final PersonalDao personalDao;
	
	@Override
	public Member ajaxGetMemberInfo(int pno) {
		return personalDao.ajaxGetMemberInfo(sqlSession, pno);
	}
	
	@Override
	public int ajaxGetMentorSubInfo(int pno, int mNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("pno", pno);
		params.put("mNo", mNo);
		return personalDao.ajaxGetMentorSubInfo(sqlSession, params);
	}
	
	@Override
	public int ajaxInsertMentorSub(int pno, int mNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("pno", pno);
		params.put("mNo", mNo);
		return personalDao.ajaxInsertMentorSub(sqlSession, params);
	}
	
	@Override
	public int getLikeCount(int pno) {
		return personalDao.getLikeCount(sqlSession, pno);
	}
	
	@Override
	public int getLikeStatus(int pno, int memberNo) {
		return personalDao.getLikeStatus(sqlSession, pno, memberNo);
	}
	
	@Override
	public int likebtnClick(int pno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("pno", pno);
		params.put("memberNo", memberNo);
		if(personalDao.getLikeStatus(sqlSession, pno, memberNo) > 0) {
			return personalDao.deleteMentorLike(sqlSession, params);
		} else {
			return personalDao.insertMentorLike(sqlSession, params);
		}
	}
	
	@Override
	public ArrayList<License2> haveLicense(int pno) {
		return personalDao.haveLicense(sqlSession, pno);
	}
	
	@Override
	public ArrayList<License2> lookLicense(int pno) {
		return personalDao.lookLicense(sqlSession, pno);
	}
	
	@Override
	public int saveProfile(Member m) {
		return personalDao.saveProfile(sqlSession, m);
	}
	
	@Override
	public void insertLookLicense(int memberNo, String string) {
		Map<String, Object> params = new HashMap<>();
		params.put("string", string);
		params.put("memberNo", memberNo);
		if(personalDao.selectLookLicense(sqlSession, params) == 0) {
			personalDao.insertLookLicense(sqlSession, params);
		}
		
	}

	@Override
	public ArrayList<String> getNotOwnCertiList(int pno) {
		return personalDao.getNotOwnCertiList(sqlSession, pno);
	}
	
}
