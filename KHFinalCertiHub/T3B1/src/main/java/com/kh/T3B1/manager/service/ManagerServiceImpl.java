package com.kh.T3B1.manager.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.manager.model.dao.ManagerDao;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.study.model.vo.StudyBoard;

@Service
public class ManagerServiceImpl implements ManagerService {
	
	// MyBtis의 SqlSessionTemplate 의존성 주입
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	// 데이터 접근 객체(DAO) 의존성 주입
	@Autowired
	private ManagerDao managerDao;


	@Override
	public int managerListCount() {
		
		return managerDao.managerListCount(sqlSession);
	}

	@Override
	public ArrayList<Board> managerList(PageInfo pi) {
		
		return managerDao.managerList(sqlSession, pi);
	}

	@Override
	public int CountUser(String keyword) {
		return managerDao.CountUser(sqlSession, keyword);
	}

	@Override
	public ArrayList<Member> selectUserList(PageInfo pi, String keyword) {
		return managerDao.selectUserList(sqlSession, pi, keyword);
	}

	@Override
	public int Countstudylist(String keyword) {
		return managerDao.Countstudylist(sqlSession, keyword);
	}

	@Override
	public ArrayList<StudyBoard> StudyList(PageInfo pi, String keyword) {
		return managerDao.StudyList(sqlSession,pi,keyword);
	}

	@Override
	public int Countcommulist(String keyword) {
		return managerDao.Countcommulist(sqlSession, keyword);
	}

	@Override
	public ArrayList<Board> CommuList(PageInfo pi, String keyword) {
		return managerDao.CommuList(sqlSession, pi, keyword);
	}

	@Override
	public int countLicenseList(String keyword) {
		return managerDao.countLicenseList(sqlSession, keyword);
	}

	@Override
	public ArrayList<License2> selectLicenseList(PageInfo pi, SearchOption so) {
		return managerDao.selectLicenseList(sqlSession, pi, so);
	}

}
