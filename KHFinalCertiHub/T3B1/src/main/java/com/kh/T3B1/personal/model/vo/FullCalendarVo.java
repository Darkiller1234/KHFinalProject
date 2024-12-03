package com.kh.T3B1.personal.model.vo;

import lombok.Data;

@Data
public class FullCalendarVo {
	private int memberNo;
	private int id;
	private String title;
	private String start;
	private String end;
	private String backgroundColor;
	private String textColor;
	private boolean allDay = true;
}
