package com.kh.T3B1.common.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;

import com.kh.T3B1.member.model.vo.Member;

public class ManagerInterceptor implements HandlerInterceptor{

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		HttpSession session = request.getSession();
		Member member = (Member)session.getAttribute("loginMember");
		
		if(member != null && member.getManagerStatus().equals("Y")) {
			return true;
		} else {
			session.setAttribute("errorMsg", "해당 페이지 접근 권한이 없습니다.");
			response.sendRedirect(request.getContextPath() + "/error");
			return false;
		}
	}
}