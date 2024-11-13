package com.kh.T3B1.common.vo;

import lombok.Data;

@Data
public class SearchOption {
	private String keyword;
	private Integer licenseNo;
	private Integer sortNo;
	private String recruit; // 모집여부 Y/N
	private Integer no; // 특정 데이터의 기본키 조회 필요시 사용
}
