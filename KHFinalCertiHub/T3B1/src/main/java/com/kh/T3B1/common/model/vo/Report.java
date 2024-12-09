package com.kh.T3B1.common.model.vo;

import lombok.Data;

@Data
public class Report {
	private int studyBoardNo;
	private int reportTypeNo;
	private int reportNo;
	private int replyNo;
	private int messageNo;
	private int boardNo;
	private int accuserNo;
	private int accusedNo;
	private String reportDetail;
}
