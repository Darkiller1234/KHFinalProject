package com.kh.T3B1.calendar.model.dao;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.kh.T3B1.calendar.model.vo.Calendar;

@Repository
public interface CalendarDao {
	public ArrayList<Calendar> calendarList(); //일정 목록 조회하기
}
