package com.kh.T3B1.study.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.PageInfo;
import com.kh.T3B1.common.vo.SearchOption;
import com.kh.T3B1.study.model.vo.Study;

public interface StudyService {

	// 스터디 그룹 총 개수
	int countStudy();

	// 스터디 그룹 페이징 조회
	ArrayList<Study> selectStudyList(PageInfo pi, SearchOption so);

}
