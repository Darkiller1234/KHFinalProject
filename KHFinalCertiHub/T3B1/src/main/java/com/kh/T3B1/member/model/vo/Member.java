package com.kh.T3B1.member.model.vo;

import lombok.Data;

@Data
public class Member {
	private int memberNo;
	private String memberId;
	private String memberPwd;
	private String memberName;
	private String memberIntro;
	private String memberNickname;
	private String email;
	private String phone;
	private String memberImg;
	private String enrollDate;
	private String status;
	private String managerStatus;
	private String mentorStatus;
	private String mentorValid;
	private String mentorIntro;
	private String career;
}
