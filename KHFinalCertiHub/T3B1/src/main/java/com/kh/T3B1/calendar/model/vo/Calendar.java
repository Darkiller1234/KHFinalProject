package com.kh.T3B1.calendar.model.vo;

import lombok.Data;

@Data
public class Calendar {
	private int id;
	private String title;
	private String content;
	private String startDay;
	private String endDay;
	private boolean allDay;
	private int licenseNo;
	private String textColor;
	private String backgroundColor;
	private String borderColor;
}
