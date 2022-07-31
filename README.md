# Docker를 활용한 Mysql과 연동된 Node.js의 API서버 제작

## 실행 및 테스트
프로그램 설명에 앞서 실행 및 테스트 방법을 설명하겠습니다.
(ERD파일은 mysql_DB폴더 안에 shopdb_ERD.PNG명으로 있습니다.)

### 실행 방법
  1. Docker 및 Docker-Compose 설치를 해주십시요.
  2. docker pull을 사용하여 atataka/node_api와 atataka/mysql_db 이미지를 DockerHub로부터 받습니다.
      (Docker Hub - https://hub.docker.com/u/atataka)
  3. 위의 docker-compose.yml 파일을 받아 위치한 파일에서 docker-compose up -d 명령어를 입력합니다.
  4. docker-compose.yml 파일로 api서버의 ip를 172.10.0.5로 고정하였습니다.
  - 특정 컨테이너의 ip 찾는법 : docker ps로 컨테이너의 CONTAINER_ID를 찾고 docker inspect [CONTAINER_ID] 로 아이피를 찾습니다.
  
### 테스트 방법 및 테스트 코드
  1. postman등 테스트 프로그램에 http://172.18.0.5:3000/[찾고자 하는 정보]로 조회 및 삭제가 가능합니다.
  ex) GET | http://172.20.0.3:3000/product/비비드 크림 3종 세트
  
  * GET (전체 조회 또는 부분 조회)
      - product 또는 produc/[제품이름]
      - company 또는 company/[회사이름]
      - buyer 또는 buyer/[구매자이름]
      - buyinfo 또는 buyinfo/[구매자이름]   
  * DELETE (전체 삭제 또는 부분 삭제)
      - product 또는 produc/[제품이름]
      - company 또는 company/[회사이름]
      - buyer 또는 buyer/[구매자이름]
      - buyinfo 또는 buyinfo/[구매자이름]
      
## 개발환경
* API서버 개발 및 DB구축
  - VsCode : 1.69.2
  - Node.js : 16.13.2
  - MySQL : 8.0.30
* Docker 활용
  - Oracle VM VirtualBox : 6.1.36
  - Ubuntu : 18.04.6 LTS
  - Docker : 20.10.7
  - MySQL(Docker의 이미지) : 8.0.30
  - Node.js(Docker의 이미지) : latest(22.07.30)
  - Docker-Compose : 1.29.2
  - Python : 3.6.9
  - pip : 21.3.1
