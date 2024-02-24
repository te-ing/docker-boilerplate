# Nest.js | React(vite) | Docker | Nginx -- Boilerplate

### 📌 nginx-proxy
8080포트로 오는 요청을 proxy하여 nginx-client 와 nginx-server 로 나눕니다.

### 📌 nginx-server
nginx-mysql에 랜덤한 title을 가진 값을 저장하고 조회하는  API입니다.

### 📌 nginx-client
빌드한 파일을 nginx로 배포하고 있으며, nginx-server로 호출한 값을 보여주는 react client 입니다.

> ⚒️ Vite 환경변수 사용  \
docker-compose.yml의 `args: - VITE_API_URL=$VITE_API_URL` 으로 .env의 값을 받아 Dockerfile-clinet에서 VITE_API_URL를 도커파일 내의 변수로 저장한 뒤(ARG) ENV VITE_API_URL=$VITE_API_URL 으로 환경변수를 저장합니다.

