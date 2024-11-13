package com.kh.T3B1.info.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;

@Repository
public class SearchDao {

	public int selectResultCount(SqlSessionTemplate sqlSession, String keyword) {
	    return sqlSession.selectOne("searchMapper.selectResultCount", keyword);
	}

	public ArrayList<License> selectListResult(SqlSessionTemplate sqlSession, PageInfo pi, String keyword) {
	    int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
	    RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
	    return (ArrayList) sqlSession.selectList("searchMapper.selectListResult", keyword, rowBounds);
	}


}
