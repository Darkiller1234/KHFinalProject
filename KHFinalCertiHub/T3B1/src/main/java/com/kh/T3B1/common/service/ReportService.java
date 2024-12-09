package com.kh.T3B1.common.service;

import com.kh.T3B1.common.model.vo.Report;

public interface ReportService {

	/**
	 * @param Report 신고대상 번호, int accusedNo 신고자 번호 
	 * @return 이미 신고했는지 여부 ( 이미 했으면 true, 없으면 false )
	 */
	boolean checkReported(Report report);

	/**
	 * @param report
	 * @return 추가된 신고 컬럼 수
	 */
	int insertReport(Report report);

}
