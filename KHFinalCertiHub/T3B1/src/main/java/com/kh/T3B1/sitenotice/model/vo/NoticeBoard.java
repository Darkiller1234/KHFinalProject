package com.kh.T3B1.sitenotice.model.vo;

import lombok.Data;

@Data
public class NoticeBoard {
	private int boardNo;
	private int memberNo;
	private String boardTitle;
	private String boardContent;
	private int viewCount;
	private String boardDate;
	private String status;
	
	private String memberName;
}
