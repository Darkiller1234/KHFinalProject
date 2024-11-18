package com.kh.T3B1.community.model.vo;

import lombok.Data;

@Data
public class Reply {
	private int replyNo;
	private int boardNo;
	private int replyPNo;
	private int memberNo;
	private String replyContent;
	private String status;
	private int replyGroup;
	private int replyDepth;
	private int replyOrder;
	private int childCount;
	private String memberNickname;
	private String memberImg;
}
