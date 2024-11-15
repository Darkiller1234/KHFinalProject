package com.kh.T3B1.study.model.vo;

import lombok.Data;

@Data
public class StudyBoard {
	private int boardNo;
	private int studyNo;
	private String boardTitle;
	private String boardContent;
	private int viewCount;
	private String boardDate;
	
	// 스터디그룹 매니저 닉네임
	private int managerNo;
	private String managerName;
}
