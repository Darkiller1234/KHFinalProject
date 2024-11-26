# 이미지 설정 (OpenJDK 17)
FROM openjdk:17-alpine

# 컨테이너 내 작업 경로 설정
WORKDIR /app

# 실행 명령 설정 (기본적으로 실행될 명령어 설정)
CMD ["sh", "-c", "javac -d . /app/code/${uuid}.java&& java Main"]