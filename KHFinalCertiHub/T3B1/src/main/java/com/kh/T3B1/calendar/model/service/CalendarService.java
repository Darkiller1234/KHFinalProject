package com.kh.T3B1.calendar.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.calendar.model.dao.CalendarDao;
import com.kh.T3B1.calendar.model.vo.Calendar;

@Service
public class CalendarService {
	@Autowired(required = false)
	private CalendarDao dao;
	
	public ArrayList<Calendar> calendarList(){
		return dao.calendarList();
	}
}
