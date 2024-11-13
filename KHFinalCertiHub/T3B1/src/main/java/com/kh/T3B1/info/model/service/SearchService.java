package com.kh.T3B1.info.model.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.License;
import com.kh.T3B1.common.vo.PageInfo;

public interface SearchService {
	
	//검색 총 갯수
	int selectResultCount(String keyword);
	
	//검색목록
	ArrayList<License> selectListResult(PageInfo pi, String keyword);


}
