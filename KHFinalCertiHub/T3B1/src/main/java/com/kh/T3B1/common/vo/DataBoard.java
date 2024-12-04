package com.kh.T3B1.common.vo;

import lombok.Data;

@Data
public class DataBoard {
	private int dataBoardNo;
	private int memberNo;
	private String dataBoardTitle;
	private String dataBoardContent;
	private String boardDate;
	private int viewCount;
}
