package com.kh.T3B1.compiler.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.kh.T3B1.compiler.model.dao.CompilerDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CompilerServiceImpl implements CompilerService{
	
	public final CompilerDao compilerDao;

	@Override
	public String runCode(HashMap<String, Object> compileInfo) {
		// 코드 실행 결과를 받아오는데 성공하면 결과를 DB에 저장
		
		return null;
	}
	
}
