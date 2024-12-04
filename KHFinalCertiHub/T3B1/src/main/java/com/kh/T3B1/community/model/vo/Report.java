package com.kh.T3B1.community.model.vo;

import lombok.Data;

@Data
public class Report {
	private int reportNo;
	private int accuserNo;
	private int accusedNo;
	private int boardNo;
	private int replyNo;
	private int messageNo;
	private int studyBoardNo;
	private int reportTypeNo;
	private String reportDetail;
}
