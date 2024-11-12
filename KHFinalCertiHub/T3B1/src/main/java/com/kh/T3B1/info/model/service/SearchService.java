package com.kh.T3B1.info.model.service;

import com.kh.T3B1.info.model.vo.License;

import java.util.List;

public interface SearchService {
    // 자격증 목록 검색 (페이징)
    List<License> searchLicenseList(String keyword, int pageSize, int pageNumber);
    
    // 전체 검색 결과 개수
    int searchLicenseCount(String keyword);
}
