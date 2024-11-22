package com.kh.T3B1.compiler.controller;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.compiler.service.CompilerService;
import com.kh.T3B1.member.model.vo.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("compiler/")
public class CompilerController {
	
	public final CompilerService compilerService;
	
	@ResponseBody
	@PostMapping(value="run", produces="application/json; charset=UTF-8")
	public String runCode(HttpSession session, String code) {
		Member member = (Member)session.getAttribute("loginMember");
		
		HashMap<String, Object> compileInfo = new HashMap<>();
		compileInfo.put("code", code);

		String result = compilerService.runCode(compileInfo);
		
		HashMap<String, String> resultJSON = new HashMap<>();
		resultJSON.put("result",result);
		return new Gson().toJson(resultJSON);
	}
}
