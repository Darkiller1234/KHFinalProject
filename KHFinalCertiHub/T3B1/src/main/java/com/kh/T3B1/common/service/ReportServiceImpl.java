package com.kh.T3B1.common.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.model.dao.ReportDao;
import com.kh.T3B1.common.model.vo.Report;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

	public final SqlSessionTemplate sqlSession;
	
	public final ReportDao reportDao;
	
	@Override
	public boolean checkReported(Report report) {
		Integer isReported = reportDao.checkReported(sqlSession, report);
		
		if(isReported != null) 
			return true;
		else
			return false;
	}

	@Override
	public int insertReport(Report report) {
		return reportDao.insertReport(sqlSession, report);
	}
	
}
