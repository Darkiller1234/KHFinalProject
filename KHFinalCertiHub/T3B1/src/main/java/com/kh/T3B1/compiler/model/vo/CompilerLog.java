package com.kh.T3B1.compiler.model.vo;

import lombok.Data;

@Data
public class CompilerLog {
	private int compileNo;
	private int memberNo;
	private String code;
	private String execResult;
	private String execTime;
	private String compileDate;
}
