package com.kh.T3B1.info.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.DataBoard;

@Repository
public class DataBoardDao {

	public List<DataBoard> selectDataBoardList(SqlSessionTemplate sqlSession, int no) {
	    return sqlSession.selectList("dataMapper.selectDataBoardList", no);
	}


}
