package com.kh.T3B1.info.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.info.model.dao.SearchDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SearchServiceImpl implements SearchService {
    
    @Autowired
    private final SqlSessionTemplate sqlSession;
    
    @Autowired
    private final SearchDao searchDao;
    
    @Override
    public int selectResultCount(String keyword) {
        return searchDao.selectResultCount(sqlSession, keyword);
    }

    @Override
    public ArrayList<License> selectListResult(PageInfo pi, String keyword) {
        return searchDao.selectListResult(sqlSession, pi, keyword);
    }
}


	

