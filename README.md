# .env-local을 사용하여 도커 빌드
docker compose --env-file .env-local up --build 

# node-image:latest 으로 생성된 이미지를 node-image.tar 으로 저장
docker save -o node-image.tar node-image:latest 

# node-image.tar 으로 저장된 파일을 불러온다.(다른 서버에서 실행)
docker load -i ./node-image.tar

# node-image:latest 이미지를 .env-local 환경변수 파일을 사용해서 my_app_container 으로 컨테이너를 띄운다.
# 이때 4000포트와 80포트를 컨테이너의 4000포트와 맵핑시킨다.
docker run -it -p 4000:4000 -p 80:4000 --env-file .env-local -d --name my_app_container node-image:latest