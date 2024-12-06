package com.kh.T3B1.info.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.T3B1.common.vo.DataBoard;
import com.kh.T3B1.common.vo.PageInfo;

@Repository
public class DataBoardDao {

    // 게시글 총 개수 조회
    public int selectDataBoardCount(SqlSessionTemplate sqlSession) {
        return sqlSession.selectOne("dataMapper.selectDataBoardCount");
    }

    // 게시글 목록 조회 (페이징 처리)
    public ArrayList<DataBoard> selectDataBoardList(SqlSessionTemplate sqlSession, PageInfo pi) {
        int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
        RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());

        return (ArrayList) sqlSession.selectList("dataMapper.selectDataBoardList",rowBounds);
    }
}
