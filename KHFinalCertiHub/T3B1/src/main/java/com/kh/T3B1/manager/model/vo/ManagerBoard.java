package com.kh.T3B1.manager.model.vo;

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

public class ManagerBoard {
	private int BoardNo; // 넘버
	private String Boardtitle; // 제목
	private String BoardDate; // 등록일
	private int Boardviews; // 조회수
	private String BoardHandle; // 처리여부
	private String BoardEmail; // 이메일
	private String BoardMentor; // 멘토여부
}

