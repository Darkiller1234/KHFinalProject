package com.kh.T3B1.manager.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kh.T3B1.common.model.vo.Report;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.community.model.vo.Reply;
import com.kh.T3B1.manager.controller.ManagerController;
import com.kh.T3B1.manager.model.dao.ManagerDao;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.message.model.vo.Message;
import com.kh.T3B1.personal.model.vo.License2;
import com.kh.T3B1.study.model.vo.StudyBoard;

import lombok.extern.slf4j.Slf4j;

@Slf4j
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
	public int countLicenseList(String keyword) {
		return managerDao.countLicenseList(sqlSession, keyword);
	}

	@Override
	public ArrayList<License2> selectLicenseList(PageInfo pi, SearchOption so) {
		return managerDao.selectLicenseList(sqlSession, pi, so);
	}

	@Override
	public int countUserList(String keyword) {
		return managerDao.countUserList(sqlSession, keyword);
	}

	@Override
	public ArrayList<Member> selectUserList(PageInfo pi, SearchOption so) {
		return managerDao.selectUserList(sqlSession, pi, so);
	}

	@Override
	public int countCommuList(String keyword) {
		return managerDao.countCommuList(sqlSession, keyword);
	}

	@Override
	public ArrayList<Board> selectCommuList(PageInfo pi, SearchOption so) {
		return managerDao.selectCommuList(sqlSession, pi, so);
	}

	@Override
	public int countListList(String keyword) {
		return managerDao.countListList(sqlSession, keyword);
	}

	@Override
	public ArrayList<StudyBoard> selectListList(PageInfo pi, SearchOption so) {
		return managerDao.selectListList(sqlSession, pi, so);
	}
	
	public int countReportList(String keyword) {
		return managerDao.countReportList(sqlSession, keyword);
	}

	@Override
	public ArrayList<Report> selectReportList(PageInfo pi, SearchOption so) {
		return managerDao.selectReportList(sqlSession, pi, so);
	}

	@Override
	public StudyBoard getStudy(int boardNo) {
		return managerDao.getStudy(sqlSession, boardNo);
	}

	@Override
	public Board getBoard(int boardNo) {
		return managerDao.getBoard(sqlSession, boardNo);
	}

	@Override
	public Reply getReply(int replyNo) {
		return managerDao.getReply(sqlSession, replyNo);
	}

	@Override
	public Message getMessage(int messageNo) {
		return managerDao.getMessage(sqlSession, messageNo);
	}

	@Override
	@Transactional
	public int deleteReport(String name, int reportNo) {
		try {
			Map<String, Object> params = new HashMap<>();
			params.put("name", name);
			params.put("reportNo", reportNo);
			int id = managerDao.getReportedId(sqlSession, params);
			params.clear();
			params.put("name", name);
			params.put("id", id);
			if(name.equals("메세지")) {
				managerDao.deleteMessage(sqlSession, params);
			} else {
				managerDao.deleteReported(sqlSession, params);
			}
			managerDao.deleteReport(sqlSession, reportNo);
			return 1;
		} catch (Exception e) {
			log.error("삭제 작업 실패: " + e.getMessage());
            return 0; // 실패
		}
	}

}
