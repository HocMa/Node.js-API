# Docker를 활용한 Mysql과 연동된 Node.js의 API서버 제작

## 실행 및 테스트
프로그램 설명에 앞서 실행 및 테스트 방법을 설명하겠습니다.
(ERD파일은 에 있습니다.)

### 실행 방법
  1. Docker 및 Docker-Compose 설치(자세한 설치방법은 아래에 있습니다.)
  2. docker pull을 사용하여 atataka/node_api와 atataka/mysql_db 이미지를 DockerHub로부터 받습니다.
      (Docker Hub - https://hub.docker.com/u/atataka)
  3. 위의 docker-compose.yml 파일을 받아 위치한 파일에서 docker-compose up -d 명령어를 입력합니다.
  4. docker ps로 현재 실행중인 atataka/node_api의 ID를 찾고 docker inspect로 아이피를 찾습니다.
  
### 테스트 방법 및 테스트 코드
  1. postman등 테스트 프로그램에 http://[아이피]:3000/[찾고자 하는 정보]로 조회 및 삭제가 가능합니다.
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

## MySQL설치 및 DB구축
MySQL은 https://dev.mysql.com/downloads/mysql/ 이 곳에서 운영체제에 맞는 것을 다운로드 하시면 됩니다.
저는 Window 64bit 버전에 따라 다운로드하여 Developer Default로 설치하였습니다.   
(update문과 delete문의 원활한 사용을 위해 edit >> preferences >> sql editor의 safe updates의 체크를 해줍시다.)

설치된 MySQL에 shopdb 이름으로 스키마를 생성하고 product, company, buyer, buyinfo 테이블을 만들어 데이터를 기입해 DB를 구축하였습니다.

## Node.js 설치 및 API서버 개발
API서버 제작을 위해 VsCode와 Node.js, Express.js 프레임워크를 사용하였습니다.

### 개발환경 구축
https://nodejs.org/en/ 이 곳을 통해 Node.js를 설치하고 제대로 설치되었는지 확인을 위해 cmd창에 node를 입력해 버전을 확인합니다.(종료는 Ctrl + c)

https://mingyu0403.tistory.com/285 이 곳을 통해 VsCode를 다운로드 할 수 있으며 설치 후 실행한다.
.js 파일을 만든 후 VsCode의 터미널을 열어 node [파일이름].js를 입력하면 .js파일이 실해됨을 알 수 있다.
(Node.js 설치히 알아서 시스템 변수에 Path가 설정되기 때문)

프로젝트 디렉토리 구조는 다음과 같다.
![디렉토리 구조](https://user-images.githubusercontent.com/90808284/182020937-1b0f7cc6-0016-4591-83f9-e94067f133f7.PNG)
Express 사용을 위해 node_API 폴더 진입 후 npm init 명령으로 노드 패키지를 관리해 주는 npm(Node Package Manager)을 설정해 주고   
npm install express mysql body-parser --save 을 통해 Express, MySQL, body-parse 모듈을 설치한다.

## Docker 활용을 위한 Oracle VM VirtualBox와 Ubuntu 설치

## Docker 설치 및 활용
### MySQL(Docker) 기반의 DB 이미지 제작
### 제작한 API서버 

## Docker-Compose 설치 및 yml파일 작성

## 마무리
