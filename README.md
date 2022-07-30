# Docker를 활용한 Mysql과 연동된 Node.js의 API서버 제작

## 실행 및 테스트
프로그램 설명에 앞서 실행 및 테스트 방법을 설명하겠습니다.
  1. Docker 및 Docker-Compose 설치(자세한 설치방법은 아래에 있습니다.)
  2. docker pull을 사용하여 atataka/node_api와 atataka/mysql_db 이미지를 DockerHub로부터 받습니다.
  3. 위의 docker-compose.yml 파일을 받아 위치한 파일에서 docker-compose up -d 명령어를 입력합니다.
  4. docker ps로 현재 실행중인 atataka/node_api의 ID를 찾고 docker inspect로 아이피를 찾습니다.
  5. postman등 테스트 프로그램에 http://[아이피]/3000/[찾고자 하는 정보]로 조회 및 삭제가 가능합니다.   
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
  - VsCode
  - Node.js
  - Express.js
  - MySQL
* Docker 활용
  - Oracle VM VirtualBox
  - Ubuntu
  - Docker
  - Docker-Compose
  - Python
  - pip
  - MySQL(Docker의 이미지)
  - Node.js(Docker의 이미지)
 
## 개발환경 구축 방법
