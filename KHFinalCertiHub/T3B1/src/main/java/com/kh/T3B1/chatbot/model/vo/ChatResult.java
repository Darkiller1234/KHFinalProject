package com.kh.T3B1.chatbot.model.vo;

import java.util.List;

import lombok.Data;

@Data
public class ChatResult {
	private String id;
	private String object;
	private String created;
	private String model;
	private List<Object> choices;
	private Object usage;
	private String system_fingerprint;
}
