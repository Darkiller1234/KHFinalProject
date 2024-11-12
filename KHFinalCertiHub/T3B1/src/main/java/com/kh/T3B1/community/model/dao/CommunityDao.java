package com.kh.T3B1.community.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.community.model.vo.Board;

@Repository
public class CommunityDao {

	public int selectListCount(Board dump, SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("boardMapper.selectListCount", dump);
	}

	public ArrayList<Board> selectList(SqlSessionTemplate sqlSession, PageInfo pi, Board dump) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		return (ArrayList)sqlSession.selectList("boardMapper.selectList", dump, rowBounds);
	}

	public ArrayList<String> selectCertiList(SqlSessionTemplate sqlSession) {
		return (ArrayList)sqlSession.selectList("boardMapper.selectCertiList");
	}

	public ArrayList<Board> selectNotiList(SqlSessionTemplate sqlSession, Board dump) {
		
		RowBounds rowBounds = new RowBounds(0, 5);
		return (ArrayList)sqlSession.selectList("boardMapper.selectNotiList", dump, rowBounds);
	}

}
