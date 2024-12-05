package com.kh.T3B1.member.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.kh.T3B1.member.model.vo.Member;
import com.kh.T3B1.member.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/member")
public class MembershipController {
	
	private final MemberService memberService;
	private final BCryptPasswordEncoder bcryptPasswordEncoder;
	
	@Autowired
	public MembershipController(MemberService memberService, BCryptPasswordEncoder bcryptPasswordEncoder) {
		this.memberService = memberService; //MemberService 의존성 주입
		this.bcryptPasswordEncoder = bcryptPasswordEncoder; // 비밀번호 암호화를 위한 인코더
	}
	
	// 회원가입 페이지로 이동
	@RequestMapping("membership")
	public String membershipPage() {
		return "member/membership";
	}
	
	// 아이디 중복 확인 Ajax 요청 처리
	@ResponseBody
	@RequestMapping("idCheck.me")
	public String idCheck(String checkId) {
		int result = memberService.idCheck(checkId);
		
		// 결과값에 따라 반환 값 설정
		if(result > 0) { // id 존재
			return "NNNNN";
		}else {
			return "NNNNY"; // 아이디 사용 가능
		}
	}
	
	// 닉네임 중복 확인 Ajax 요청 처리
	@ResponseBody
	@RequestMapping("nicknameCheck.me")
	public String nicknameCheck(String checknickName) {
		int result = memberService.nicknameCheck(checknickName);
		
		if(result > 0) { // 닉네임 존재
			return "NN";
		}else {
			return "NY"; // 닉네임 사용 가능
		}
	}
	
	
	// 회원가입 처리 로직
	@RequestMapping("join")
	public String membershipPage(Member m, HttpSession session, Model model) {
		// 비밀번호 암호화
		String encodePwd = bcryptPasswordEncoder.encode(m.getMemberPwd());
		m.setMemberPwd(encodePwd);
		
		// 회원가입 처리
		int result = memberService.membershipPage(m);
		
		// 결과에 따라 알림 메시지 설정 및 페이지 이동
		if(result > 0) {
			session.setAttribute("alertMsg", "회원가입 성공");
			return "redirect:/member/login";
		}else {
			model.addAttribute("errorMsg", "회원가입 실패");
			return "redirect:/membership";
		}
	}
	
	// 로그인 페이지로 이동
	@RequestMapping("login")
	public String loginPage() {
		return "member/login";
	}
	
	// 로그인 처리 로직
	@RequestMapping("login.me")
	public ModelAndView loginMember(Member m, HttpSession session, ModelAndView mv, String saveId, HttpServletResponse response) {
		 // 로그인 시도
		Member loginMember = memberService.loginMember(m);
		
		if(loginMember == null) {
			 // 아이디 오류 처리
			mv.addObject("errorMsg","아이디가 틀렸습니다.");
			mv.setViewName("member/login");
		}else if(!bcryptPasswordEncoder.matches(m.getMemberPwd(),loginMember.getMemberPwd())) {
			// 비밀번호 오류 처리
			mv.addObject("errorMsg","비밀번호가 틀렸습니다.");
			mv.setViewName("member/login");
		}else {
			// 로그인 성공 처리
			Cookie ck = new Cookie("saveId", loginMember.getMemberId());
			if(saveId == null) {
				ck.setMaxAge(0); // 아이디 저장 쿠키 삭제
			}
			response.addCookie(ck);
			
			session.setAttribute("loginMember", loginMember);
			
			mv.setViewName("redirect:/main"); // 메인 페이지로 리다이렉트
			
		}
		
		return mv;
	}
	
	// 로그아웃 처리
	@RequestMapping("logout.me")
	public String logoutMember(HttpSession session) {
		session.removeAttribute("loginMember");
		
		return "redirect:/main";
	}
	
	// 아이디 찾기 페이지로 이동
	@RequestMapping("idfind")
	public String idfind() {
		return "member/idfind";
	}
	
	
	@RequestMapping("findemail")
	public String findemail() {
		return "member/findemail";
	}
	
	// 이메일로 아이디 찾기
	@RequestMapping(value = "/idfindpages", method = RequestMethod.POST)
	public String findId(@RequestParam String memberName, @RequestParam String email, Model model) {
		// 아이디 찾기 서비스 호출
		String memberid = memberService.findId(memberName, email); 
		System.out.println(memberid);
		
		if(memberid != null) {
			// 아이디가 존재하면 결과 반환
			model.addAttribute("memberId",memberid);
		}else {
			// 아이디가 없으면 에러 메시지 반환
			model.addAttribute("error", "입력한 정보에 대한 아이디가 없습니다.");
		}
		return "member/idfindpages";
	}
	
	@RequestMapping("findphone")
	public String findphone() {
		return "member/findphone";
	}
	
	// 비밀번호 찾기 페이지로 이동
	@RequestMapping("pwdfind")
	public String pwdfindPage() {
		return "member/pwdfind";
	}
	
	@RequestMapping("pwdfindemail")
	public String pwdfindemail() {
		return "member/pwdfindemail";
	}
	
	@RequestMapping("pwdfindphone")
	public String pwdfindphone() {
		return "member/pwdfindphone";
	}
	
	// 이메일로 비밀번호 찾기
	@RequestMapping(value = "/pwdfindpages", method = RequestMethod.POST)
	public String findPwd(@RequestParam String memberId, @RequestParam String email, Model model) {
		// 비밀번호 찾기 서비스 호출
		String tempPassword = memberService.findPwd(memberId,email);
		
		if(tempPassword != null) {
			// 임시 비밀번호 반환
			model.addAttribute("tempPassword", tempPassword);
			model.addAttribute("message", "임시 비밀번호가 이메일로 전송되었습니다.");
		}else {
			// 에러 메시지 반환
			model.addAttribute("error","입력한 정보가 없습니다.");
		}
		
		return "member/pwdfindpages";
	}
	
	
	
	
	
	@Value("${sns.naver.clientId}")
	private String clientId;
	
	@Value("${sns.naver.clientSecret}")
	private String clientSecret;
	

	@RequestMapping("login/naver")
	public String naverLoginCallback(String code, String state) throws Exception {
		
		String redirectURL = URLEncoder.encode("http://192.168.30.12:5600/T3B1/member/login/naver", "UTF-8");
		String apiURL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code";
		apiURL += "&client_id=" + clientId;
		apiURL += "&client_secret=" + clientSecret;
		apiURL += "&redirect_uri=" + redirectURL;
		apiURL += "&code=" + code;
		apiURL += "&state=" + state;
		
		URL url = new URL(apiURL);
		HttpURLConnection con = (HttpURLConnection)url.openConnection();
		
		int responseCode = con.getResponseCode();
		
		String inputLine = "";
		if(responseCode == 200) {
			//응답데이터를 읽어오기
			BufferedReader br;
			br = new BufferedReader(new InputStreamReader(con.getInputStream()));
			StringBuffer res = new StringBuffer();
			while((inputLine = br.readLine()) != null) {
				res.append(inputLine);
			}
			br.close();
			
			//정상적으로 정보를 받아왔다면 출력해보자.
			String result = res.toString();
			JsonObject totalObj = JsonParser.parseString(result).getAsJsonObject();
			
			String accessToken = totalObj.get("access_token").getAsString(); // 정보접근을 위한 토큰
			String header = "Bearer " + accessToken;
			
			apiURL = "https://openapi.naver.com/v1/nid/me";
			Map<String, String> requestHeaders = new HashMap<>();
			requestHeaders.put("Authorization", header);
			
			String responseBody = get(apiURL, requestHeaders);
			
			JsonObject memberInfo = JsonParser.parseString(responseBody).getAsJsonObject();
			memberInfo = memberInfo.getAsJsonObject("response");
			
			log.info("result : {}", memberInfo);
			
			
			// "id" 값 가져오기 (널 체크)
	        String id = memberInfo.has("id") && !memberInfo.get("id").isJsonNull()
	            ? memberInfo.get("id").getAsString()
	            : null;
			
			
		}
		
		return "redirect:/";
	}
	
	//API에 GET요청 보내고 응답을 받아오는 메서드
	private static String get(String apiUrl, Map<String, String> requestHeaders) {
		HttpURLConnection conn = connect(apiUrl);
		
		try {
			conn.setRequestMethod("GET");
			
			for(Map.Entry<String, String> header : requestHeaders.entrySet()) {
				conn.setRequestProperty(header.getKey(), header.getValue());
			}
			
			int responseCode = conn.getResponseCode();
			
			if(responseCode == 200) {
				return readBody(conn.getInputStream());
			} 
			
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("API요청을 통한 응답 실패 : " + apiUrl, e);
		}
	}
	
	//API에 연결하기위한 HttpURILConnection객체를 생성해서 반환하는 메서드
	private static HttpURLConnection connect(String apiUrl) {
		try {
			URL  url = new URL(apiUrl);
			return (HttpURLConnection)url.openConnection();
		} catch (MalformedURLException e) {
			e.printStackTrace();
			throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("연결에 실패하였습니다. : " + apiUrl, e);
		}
	}
	
	private static String readBody(InputStream bodyInput) {
		
		try(BufferedReader br = new BufferedReader(new InputStreamReader(bodyInput))){
			StringBuffer res = new StringBuffer();
			
			String inputLine;
			while((inputLine = br.readLine()) != null) {
				res.append(inputLine);
			}
			
			//정상적으로 정보를 받아왔다면 출력해보자.
			return res.toString();
		} catch(IOException e) {
			e.printStackTrace();
			throw new RuntimeException("바디정보를 읽는데 실패하였습니다. ", e);
		}
	}
	
	
}
