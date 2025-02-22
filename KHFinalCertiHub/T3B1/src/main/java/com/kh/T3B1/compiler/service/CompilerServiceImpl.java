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
import org.springframework.beans.factory.annotation.Value;
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
	
	@Value("${dockerPath}")
	private String DOCKER_PATH;

	@Override
	public String runCode(HashMap<String, Object> compileInfo) {
		String result = "";
		String containerName = UUID.randomUUID().toString().replace("-", ""); // 랜덤 컨테이너명 부여
		
		String extension = ""; // 생성할 코드파일 확장자
		String imageTag = ""; // 생성할 이미지 이름뒤에 붙일 구분자
		String folder = "/image_"; // 생성할 코드를 실행할 이미지가 담긴 도커 파일 경로

		// 사용자가 선택한 언어에 따라 다른 확장자로 파일 생성
		switch((int)compileInfo.get("selectedLang")) {
			case 1:
				extension = ".java";
				imageTag = "java";
				folder += "java";
				break;
			case 2:
				extension = ".py";
				imageTag = "python";
				folder += "python";
				break;
		}
		
		// 코드를 저장
		File inputCode = new File( DOCKER_PATH + "/code/" + containerName + extension);
		
		try (BufferedWriter writer = new BufferedWriter(new FileWriter(inputCode, false));){
			inputCode.createNewFile();
			writer.write((String)compileInfo.get("code"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		File filePath = new File(DOCKER_PATH + folder);
		
		try {
			// 도커 이미지 찾기, 태그명 설정하지 않을시 기본 latest(최신버전) -q : 이미지 ID값만 가져오기
			String imageCheck = "docker images -q certihub_compiler_" + imageTag;
			
			Process imageCheckProcess = Runtime.getRuntime().exec(imageCheck);
			BufferedReader stdOut = new BufferedReader(new InputStreamReader(imageCheckProcess.getInputStream()));
			BufferedReader stdErr = new BufferedReader(new InputStreamReader(imageCheckProcess.getErrorStream()));
			
			// 이미지 파일이 존재하지 않으면 빌드한다
			if(stdOut.readLine() == null) {
				// 도커 이미지 빌드 -t 빌드명
				String build = "docker build -t certihub_compiler_"+ imageTag +" .";
				
				// 이미지 빌드 및 끝날때 까지 동기처리(waitFor)
				Runtime.getRuntime().exec(build, null, filePath).waitFor();
			}
			
			// --rm : 컨테이너 수행 후 삭제
			// -v 서버 경로:컨테이너 경로 => 도커 공유 볼륨, 로컬(서버) 경로와 도커 컨테이너의 파일을 동기화한다.
			// --memory => 메모리 용량 제한, --cpus => cpu 사용률 제한, 최대 1
			// --network=none => 외부 네트워크 접근 차단
			// -e key=value => 도커 컨테이너에 환경변수를 추가해준다.
			String run = "docker run --rm --name="+ containerName 
					+ " --memory=128m --cpus=0.2 --network=none -v " 
					+ DOCKER_PATH + "/code:/app/code "
					+ "-e uuid=" + containerName +" certihub_compiler_" + imageTag;

			Process execResult = Runtime.getRuntime().exec(run, null, filePath); // 클래스 파일 실행
			
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
				result = "시간 초과!!";
				// 도커 컨테이너 종료
				String stop = "docker stop " + containerName;
				Runtime.getRuntime().exec(stop);
				execResult.destroy();
			}
			
			stdOut.close();
			stdErr.close();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		inputCode.delete();

		// 로그인한 멤버면 로그를 남겨준다.
		if(compileInfo.get("member") != null) {
		    compileInfo.put("execResult", result);
		    compilerDao.insertLog(sqlSession, compileInfo);
		}
		
		return result;
	}
	
}
