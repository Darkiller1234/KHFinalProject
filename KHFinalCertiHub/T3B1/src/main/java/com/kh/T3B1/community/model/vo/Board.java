package com.kh.T3B1.community.model.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import oracle.sql.DATE;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Board {
	private int boardNo;
	private String boardTab;
	private String boardTitle;
	private int writerNo;
	private DATE boardCreateDate;
	private String writerName;
	private String boardContent;
	private int boardReplyCount;
	private int boardLike;
	private int boardHate;
	

}
