# 이미지 설정 (OpenJDK 24)
FROM python:3.9-alpine
RUN apk add openjdk17
RUN apk add g++

# 컨테이너 내에 작업할 경로
WORKDIR /app

# 실행할 자바 파일 복사
COPY . /app

# 자바 코드를 클래스 파일로 컴파일
RUN javac Main.java

# 실행 명령 설정 (기본적으로 실행될 명령어 설정)
CMD ["sh", "-c", "javac Main.java && java Main"]