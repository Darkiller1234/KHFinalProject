package com.kh.T3B1.info.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.info.model.dao.SearchDao;
import com.kh.T3B1.info.model.vo.License;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private SearchDao searchDao;

    @Override
    public List<License> searchLicenseList(String keyword, int pageSize, int pageNumber) {
        int offset = (pageNumber - 1) * pageSize;  // OFFSET 계산
        return searchDao.searchLicenseList(keyword, pageSize, offset);
    }

    @Override
    public int searchLicenseCount(String keyword) {
        return searchDao.searchLicenseCount(keyword);
    }
}
