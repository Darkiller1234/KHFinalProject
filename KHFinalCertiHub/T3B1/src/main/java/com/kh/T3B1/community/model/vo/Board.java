package com.kh.T3B1.community.model.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Board {
	private int boardNo;
	private int tabNo;
	private int licenseNo;
	private int memberNo;
	private String boardTitle;
	private String boardContent;
	private String boardDate;
	private int likeCount;
	private int hateCount;
	private String status;
	private int viewCount;
	private String memberNickname;
	private String tabName;
	private String licenseName;
	private int replyCount;
}
