package com.kh.T3B1.info.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.DataBoard;
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

    @Override
    public List<DataBoard> selectDataBoardList(int no) {
        
    	return dataBoardDao.selectDataBoardList(sqlSession, no);
        
    }


}
