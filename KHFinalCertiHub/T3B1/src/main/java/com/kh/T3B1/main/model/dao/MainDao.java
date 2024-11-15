package com.kh.T3B1.main.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.community.model.vo.Board;

@Repository
public class MainDao {
	@Autowired
	private SqlSession sqlSession;
	
	public List<Board> getTopPostsByViews(int limit){
		return sqlSession.selectList("boardMapper.selectTopPostsByViews",limit);
	}
	
	public List<Board> getLatestNotice(int limit){
		return sqlSession.selectList("boardMapper.selectLatestNotices", limit);
	}
}
