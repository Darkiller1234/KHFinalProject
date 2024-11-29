package com.kh.T3B1.message.model.vo;

import lombok.Data;

@Data
public class Message {
	private int messageNo;
	private int talkroomNo;
	private int memberNo;
	private String messageContent;
}
