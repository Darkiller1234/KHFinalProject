package com.kh.T3B1.common.controller;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kh.T3B1.common.model.vo.Report;
import com.kh.T3B1.common.service.ReportService;
import com.kh.T3B1.member.model.vo.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/report")
public class ReportController {
	
	public final ReportService reportService;
	
	@ResponseBody
	@GetMapping(value="insert", produces="application/json; charset=UTF-8")
	public String insertReport(HttpSession session, Report report) {
		String result = "N"; // 실패 N 성공 Y
		Member member = (Member)session.getAttribute("loginMember");
		report.setAccuserNo(member.getMemberNo());
		
		log.info("\n신고 정보 : {}\n", report);
		
		boolean isReported = reportService.checkReported(report);
		if(isReported) {
			result = "E";
		} else {
			int insertResult = reportService.insertReport(report);
			if(insertResult > 0) {
				result = "Y";
			}
		}
		
		HashMap<String, String> resultObj = new HashMap<>();
		resultObj.put("success",result);

		return new Gson().toJson(resultObj);
	}
}
