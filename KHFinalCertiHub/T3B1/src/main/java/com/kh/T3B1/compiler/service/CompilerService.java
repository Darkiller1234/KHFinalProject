package com.kh.T3B1.compiler.service;

import java.util.HashMap;

public interface CompilerService {

	/**
	 * 컴파일 서버로 컴파일 요청 후 성공시 DB에 결과기록
	 * @param HashMap key=memberNo(실행한 멤버번호), code(실행코드)
	 * @return 성공=Y, 실패=N
	 */
	String runCode(HashMap<String, Object> compileInfo);

}
