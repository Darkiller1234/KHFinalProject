package com.kh.T3B1.manager.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;


@Repository
public class ManagerDao {

	public int managerListCount(SqlSessionTemplate sqlSession) {
		
		return sqlSession.selectOne("boardMapper.managerListCount");
	}

	public ArrayList<Board> managerList(SqlSessionTemplate sqlSession, PageInfo pi) {
		int offset = (pi.getCurrentPage() -1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		return (ArrayList)sqlSession.selectList("boardMapper.managerList", pi, rowBounds);
	}



}
