package com.kh.T3B1.main.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.T3B1.community.model.vo.Board;
import com.kh.T3B1.main.model.dao.MainDao;

@Service
public class MainService {
	@Autowired
	public final MainDao mainDao = new MainDao();
	
	public List<Board> getTopPostsByViews(int limit) {
		return mainDao.getTopPostsByViews(limit);
	}

	public List<Board> getLatestNotices(int limit) {
		return mainDao.getLatestNotice(limit);
	}

}
