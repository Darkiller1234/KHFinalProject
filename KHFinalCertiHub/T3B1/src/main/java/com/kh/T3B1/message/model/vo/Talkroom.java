package com.kh.T3B1.message.model.vo;

import lombok.Data;

@Data
public class Talkroom {
	public int talkroomNo;
	public int managerNo;
	public int studyNo;
	public int talkroomType;
	
	public String managerName;
	public String memberImg;
	public String studyName;
	public String studyImg;
}
