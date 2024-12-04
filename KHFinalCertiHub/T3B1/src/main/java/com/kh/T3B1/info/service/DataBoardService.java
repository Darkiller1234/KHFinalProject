package com.kh.T3B1.info.service;

import java.util.ArrayList;

import com.kh.T3B1.common.vo.DataBoard;
import com.kh.T3B1.common.vo.PageInfo;

public interface DataBoardService {

    // 페이징 처리된 게시글 목록 조회
    ArrayList<DataBoard> selectDataBoardList(PageInfo pi);

    // 전체 게시글 수 조회
    int selectDataBoardCount();
}
