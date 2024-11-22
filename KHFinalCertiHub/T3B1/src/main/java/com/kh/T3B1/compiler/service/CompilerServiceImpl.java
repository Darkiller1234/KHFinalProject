package com.kh.T3B1.compiler.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.kh.T3B1.compiler.model.dao.CompilerDao;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class CompilerServiceImpl implements CompilerService{
	
	public final CompilerDao compilerDao;

	@Override
	public String runCode(HashMap<String, Object> compileInfo) {
		String result = "";
		
		// 자바 코드를 저장
		File javaCode = new File("C:/KHFinalProject/KHFinalCertiHub/T3B1/src/main/resources/docker/Main.java");
		
		if(javaCode.exists()) { // 존재한다면 덮어쓰기
			try (FileWriter fileWriter = new FileWriter(javaCode, false);) {
				fileWriter.write((String)compileInfo.get("code"));
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else { // 없으면 파일 생성
			try (BufferedWriter writer = new BufferedWriter(new FileWriter(javaCode, false));){
				javaCode.createNewFile();
				writer.write((String)compileInfo.get("code"));
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		// 코드 실행 결과를 받아오는데 성공하면 결과를 DB에 저장
		File filePath = new File("C:/KHFinalProject/KHFinalCertiHub/T3B1/src/main/resources/docker");
		String build = "docker build -t certihub_compiler .";
		// -v : 도커 공유 볼륨, 로컬(서버) 경로와 도커 컨테이너의 파일을 동기화한다.
		String run = "docker run --rm -v "+ filePath +":/app certihub_compiler";
		
		try {
			// 이미지 빌드 및 끝날때 까지 동기처리(waitFor)
			try {
				Runtime.getRuntime().exec(build, null, filePath).waitFor();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			Process runProcess = Runtime.getRuntime().exec(run, null, filePath);
			
		    // 표준 출력 읽기
			BufferedReader stdOut = new BufferedReader(new InputStreamReader(runProcess.getInputStream()));
		    // 표준 에러 읽기
		    BufferedReader stdErr = new BufferedReader(new InputStreamReader(runProcess.getErrorStream()));
			
			String line = null;
			
		    System.out.println("=== Standard Output ===");
		    while ((line = stdOut.readLine()) != null) {
		    	result += line;
		    }

		    System.out.println("=== Error Output ===");
		    while ((line = stdErr.readLine()) != null) {
		    	result += line;
		    }
		    
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
}
