package com.kh.T3B1.common.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.model.vo.Report;

@Repository
public class ReportDao {

	public Integer checkReported(SqlSessionTemplate sqlSession, Report report) {
		return sqlSession.selectOne("commonMapper.checkReported", report);
	}

	public int insertReport(SqlSessionTemplate sqlSession, Report report) {
		return sqlSession.insert("commonMapper.insertReport",report);
	}

}
