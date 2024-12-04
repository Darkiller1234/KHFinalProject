package com.kh.T3B1.info.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.DataBoard;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.info.model.dao.DataBoardDao;

@Service
public class DataBoardServiceImpl implements DataBoardService {
    
    private final SqlSessionTemplate sqlSession;
    private final DataBoardDao dataBoardDao;

    // 생성자 주입 방식
    @Autowired
    public DataBoardServiceImpl(SqlSessionTemplate sqlSession, DataBoardDao dataBoardDao) {
        this.sqlSession = sqlSession;
        this.dataBoardDao = dataBoardDao;
    }

    // 페이징 처리된 게시글 목록 조회
    @Override
    public ArrayList<DataBoard> selectDataBoardList(PageInfo pi) {
        return dataBoardDao.selectDataBoardList(sqlSession, pi);
    }

    // 전체 게시글 수 조회
    @Override
    public int selectDataBoardCount() {
        return dataBoardDao.selectDataBoardCount(sqlSession);
    }
}
