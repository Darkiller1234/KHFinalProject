package com.kh.T3B1.message.model.vo;

import lombok.Data;

@Data
public class ApplyLog {
	private int applyNo;
	private int applicantNo;
	private int recipientNo;
	private int studyNo;
	private int applyKind;
	private String applyDate;
	
	private String applicantName;
	private String applicantImg;
	private String studyName;
}
