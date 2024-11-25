package com.kh.T3B1.compiler.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.T3B1.compiler.model.dao.CompilerDao;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class CompilerServiceImpl implements CompilerService{
	
	public final CompilerDao compilerDao;
	
	public final SqlSessionTemplate sqlSession;

	@Override
	public String runCode(HashMap<String, Object> compileInfo) {
		String result = "";
		String containerName = UUID.randomUUID().toString().replace("-", ""); // 랜덤 컨테이너명 부여
		String dockerPath = "C:/KHFinalProject/KHFinalCertiHub/T3B1/src/main/resources/docker";
		
		// 자바 코드를 저장
		File javaCode = new File( dockerPath + "/code/" + containerName +".java");
		
		try (BufferedWriter writer = new BufferedWriter(new FileWriter(javaCode, false));){
			javaCode.createNewFile();
			writer.write((String)compileInfo.get("code"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		File filePath = new File(dockerPath);
		
		try {
			// 도커 이미지 찾기, 태그명 설정하지 않을시 기본 latest(최신버전) -q : 이미지 ID값만 가져오기
			String imageCheck = "docker images -q certihub_compile";
			
			Process imageCheckProcess = Runtime.getRuntime().exec(imageCheck);
			BufferedReader stdOut = new BufferedReader(new InputStreamReader(imageCheckProcess.getInputStream()));
			BufferedReader stdErr = new BufferedReader(new InputStreamReader(imageCheckProcess.getInputStream()));
			
			// 이미지 파일이 존재하지 않으면 빌드한다
			if(stdOut.readLine() == null) {
				// 도커 이미지 빌드 -t 빌드명
				String build = "docker build -t certihub_compiler .";
				
				// 이미지 빌드 및 끝날때 까지 동기처리(waitFor)
				Runtime.getRuntime().exec(build, null, filePath).waitFor();
			}
			
			// -v : 도커 공유 볼륨, 로컬(서버) 경로와 도커 컨테이너의 파일을 동기화한다.
			// memory = 메모리 용량 제한
			// exec : 외부에서 도커 컨테이너 접속
			String run = "docker run -t --name="+ containerName +" --memory=64m -v "+ dockerPath +":/app certihub_compiler";
			String compile = "docker exec " + containerName + " javac "+ containerName +".java ";
			String exec = "docker exec " + containerName + " java "+ containerName;
			
			Runtime.getRuntime().exec(run, null, filePath).waitFor(); // 컨테이너 생성
			Runtime.getRuntime().exec(compile, null, filePath).waitFor(); // 자바 클래스 파일 컴파일
			Process execResult = Runtime.getRuntime().exec(exec, null, filePath); // 클래스 파일 실행
			
		    // 표준 출력 읽기
			stdOut = new BufferedReader(new InputStreamReader(execResult.getInputStream()));
		    // 표준 에러 읽기
		    stdErr = new BufferedReader(new InputStreamReader(execResult.getErrorStream()));
			
			String line = null;
			boolean isSuccess = true; // 시간 초과 확인 변수 ( 정상 종료 :true, 시간 초과 : false )
			
			// 최대 30초간 실행결과 대기
			isSuccess = execResult.waitFor(30, TimeUnit.SECONDS);

			if(isSuccess) {
			    // 정상 출력 결과
			    while ((line = stdOut.readLine()) != null) {
			    	result += line + "\n";
			    }

			    // 에러 결과
			    while ((line = stdErr.readLine()) != null) {
			    	result += line + "\n";
			    }
			}
			
			else {
				result = "30초 시간 초과!!";
			}
			
			// 도커 컨테이너 종료
			String stop = "docker stop " + containerName;
			Runtime.getRuntime().exec(stop);
			execResult.destroy();
			
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	    compileInfo.put("execResult", result);
	    compilerDao.insertLog(sqlSession, compileInfo);
		
		return result;
	}
	
}
