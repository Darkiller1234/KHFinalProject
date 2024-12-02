package com.kh.T3B1.message.model.vo;

import lombok.Data;

@Data
public class Talkroom {
	private int talkroomNo;
	private int managerNo;
	private int studyNo;
	private int talkroomType;
	
	private String managerName;
	private String memberImg;
	private String studyName;
	private String studyImg;
	
	private String lastMessage;
}
