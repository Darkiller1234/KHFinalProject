package com.kh.T3B1.info.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.info.model.vo.License;

@Repository
public class SearchDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<License> searchLicense(String keyword){
		return sqlSession.selectList("SearchMapper.searchLicenseList", keyword);
	}
	
}
