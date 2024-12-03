package com.kh.T3B1.personal.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.Calendar2;
import com.kh.T3B1.personal.model.vo.FullCalendarVo;
import com.kh.T3B1.personal.model.vo.License2;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Repository
public class PersonalDao {

	public Member ajaxGetMemberInfo(SqlSessionTemplate sqlSession, int pno) {
		return sqlSession.selectOne("personalMapper.getMemberInfo", pno);
	}

	public int ajaxGetMentorSubInfo(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		Integer i = sqlSession.selectOne("personalMapper.getMentorSubInfo", params);
		if(i == null) {
			return 0;
		}
		else {
			return i.intValue();
		}
	}

	public int ajaxInsertMentorSub(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.insert("personalMapper.insertMentorSub", params);
	}

	public int getLikeCount(SqlSessionTemplate sqlSession, int pno) {
		return sqlSession.selectOne("personalMapper.getLikeCount", pno);
	}

	public int getLikeStatus(SqlSessionTemplate sqlSession, int pno, int memberNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("pno", pno);
		params.put("memberNo", memberNo);
		return sqlSession.selectOne("personalMapper.getLikeStatus", params);
	}

	public int insertMentorLike(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.insert("personalMapper.insertMentorLike", params);
	}

	public int deleteMentorLike(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.insert("personalMapper.deleteMentorLike", params);
	}

	public ArrayList<License2> haveLicense(SqlSessionTemplate sqlSession, int pno) {
		return (ArrayList)sqlSession.selectList("personalMapper.haveLicense", pno);
	}

	public ArrayList<License2> lookLicense(SqlSessionTemplate sqlSession, int pno) {
		return (ArrayList)sqlSession.selectList("personalMapper.lookLicense", pno);
	}

	public int saveProfile(SqlSessionTemplate sqlSession, Member m) {
		return sqlSession.update("personalMapper.saveProfile", m);
	}

	public int selectLookLicense(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.selectOne("personalMapper.selectLookLicense", params);
	}

	public void insertLookLicense(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		sqlSession.insert("personalMapper.insertLookLicense", params);
		
	}

	public ArrayList<String> getNotOwnCertiList(SqlSessionTemplate sqlSession, int pno) {
		return (ArrayList)sqlSession.selectList("personalMapper.getNotOwnCertiList", pno);
	}

	public int getLicenseNo(SqlSessionTemplate sqlSession, String licenseName) {
		return sqlSession.selectOne("personalMapper.getLicenseNo", licenseName);
	}

	public int saveLicenseEnroll(SqlSessionTemplate sqlSession, License2 dump) {
		return sqlSession.insert("personalMapper.saveLicenseEnroll", dump);
	}

	public int ajaxSetMentorEnroll(SqlSessionTemplate sqlSession, Member temp) {
		return sqlSession.update("personalMapper.ajaxSetMentorEnroll", temp);
	}

	public int setSymbolLicense(SqlSessionTemplate sqlSession, Map params) {
		sqlSession.update("personalMapper.resetSymbolLicense", params);
		return sqlSession.update("personalMapper.setSymbolLicense", params);
	}

	public int ajaxSetMentor(SqlSessionTemplate sqlSession, Member temp) {
		return sqlSession.update("personalMapper.ajaxSetMentor", temp);
	}

	public int updateMember(SqlSessionTemplate sqlSession, Member temp) {
		return sqlSession.update("personalMapper.updateMember", temp);
	}

	public int ajaxSubmitChange(SqlSessionTemplate sqlSession, Member temp) {
		return sqlSession.update("personalMapper.ajaxSubmitChange", temp);
	}

	public int ajaxSubmitDelete(SqlSessionTemplate sqlSession, int memberNo) {
		return sqlSession.update("personalMapper.ajaxSubmitDelete", memberNo);
	}

	public ArrayList<FullCalendarVo> scLoad(SqlSessionTemplate sqlSession, int memberNo) {
		ArrayList<FullCalendarVo> list = (ArrayList)sqlSession.selectList("personalMapper.scLoad", memberNo);
		log.info(list.toString());
		return list;
	}

	public ArrayList<FullCalendarVo> getCurrentDateInfo(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return (ArrayList)sqlSession.selectList("personalMapper.getCurrentDateInfo", params);
	}

	public int deleteSc(SqlSessionTemplate sqlSession, Map<String, Object> params) {
		return sqlSession.delete("personalMapper.deleteSc", params);
	}

	public int insertSc(SqlSessionTemplate sqlSession, FullCalendarVo cal) {
		return sqlSession.insert("personalMapper.insertSc", cal);
	}
	
}
