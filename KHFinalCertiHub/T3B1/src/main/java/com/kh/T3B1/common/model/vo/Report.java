package com.kh.T3B1.common.model.vo;

import lombok.Data;

@Data
public class Report {
	private int reportNo;
	private int studyBoardNo;
	private int reportTypeNo;
	private int replyNo;
	private int messageNo;
	private int boardNo;
	private int accuserNo;
	private int accusedNo;
	private String reportDetail;
	
	//프론트 전달용 파라미터
	private String accuserNickName;
	private String accusedNickName;
	private String reportTypeDetail;
}
