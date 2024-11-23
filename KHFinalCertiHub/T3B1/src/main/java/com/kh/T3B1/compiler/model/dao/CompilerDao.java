package com.kh.T3B1.compiler.model.dao;

import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CompilerDao {

	public int insertLog(SqlSessionTemplate sqlSession, HashMap<String, Object> compileInfo) {
		return sqlSession.insert("compilerMapper.insertLog", compileInfo);
	}
	
}
