CREATE DATABASE  IF NOT EXISTS `shopdb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shopdb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: shopdb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buyer`
--

DROP TABLE IF EXISTS `buyer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyer` (
  `name` varchar(45) NOT NULL,
  `tel` varchar(45) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyer`
--

LOCK TABLES `buyer` WRITE;
/*!40000 ALTER TABLE `buyer` DISABLE KEYS */;
INSERT INTO `buyer` VALUES ('김도현','010-3965-3087'),('김민준','010-8588-1419'),('김하은','010-9685-5348'),('박서윤','010-3458-9083'),('박서준','010-7533-8159'),('박윤서','010-2904-7340'),('윤지호','010-3546-8976'),('이건우','010-0389-4567'),('이시우','010-2934-2894'),('이지유','010-0932-3574'),('이지후','010-0235-8734'),('이채원','010-2850-8023'),('허하준','010-5829-5893'),('홍민서','010-5648-0456'),('홍주원','010-5739-9843'),('황도윤','010-5131-2186'),('황서연','010-5380-0823');
/*!40000 ALTER TABLE `buyer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buyinfo`
--

DROP TABLE IF EXISTS `buyinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyinfo` (
  `num` int NOT NULL AUTO_INCREMENT,
  `product` varchar(45) NOT NULL,
  `buyer` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `buy_day` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`num`),
  KEY `product_idx` (`product`),
  KEY `buyer_idx` (`buyer`),
  CONSTRAINT `buyer` FOREIGN KEY (`buyer`) REFERENCES `buyer` (`name`) ON DELETE CASCADE,
  CONSTRAINT `product` FOREIGN KEY (`product`) REFERENCES `product` (`itemName`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyinfo`
--

LOCK TABLES `buyinfo` WRITE;
/*!40000 ALTER TABLE `buyinfo` DISABLE KEYS */;
INSERT INTO `buyinfo` VALUES (9,'플라티넘','김도현',80000,'2022-07-30 05:33:44'),(10,'티트리 보듬토너','김민준',7900,'2022-07-30 05:33:44'),(11,'탄력크림','김하은',81000,'2022-07-30 05:33:44'),(12,'코코 마드모아젤','박서윤',109000,'2022-07-30 05:33:44'),(13,'코코 누와르','박서준',129000,'2022-07-30 05:33:44'),(14,'캡춰 토탈','박윤서',78000,'2022-07-30 05:33:44'),(15,'캡춰 유쓰','윤지호',154000,'2022-07-30 05:33:44'),(16,'자음유액','이건우',64800,'2022-07-30 05:33:44'),(17,'자음생 아이크림','이시우',144000,'2022-07-30 05:33:44'),(18,'에고이스트','이지유',154000,'2022-07-30 05:33:44'),(19,'안테우스','이지후',154000,'2022-07-30 05:33:44'),(20,'수분크림','이채원',72000,'2022-07-30 05:33:44'),(21,'샹스 오 후레쉬','허하준',137000,'2022-07-30 05:33:44'),(22,'샹스 오 비브','홍민서',69000,'2022-07-30 05:33:44'),(23,'본윤에센스','홍주원',68000,'2022-07-30 05:33:44'),(24,'미스 디올','황도윤',68000,'2022-07-30 05:33:44'),(25,'로드비','황서연',850000,'2022-07-30 05:33:44');
/*!40000 ALTER TABLE `buyinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `name` varchar(45) NOT NULL,
  `ceo` varchar(45) NOT NULL,
  `tel` varchar(45) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('(주)LG생활건강','차석용','080-023-7007'),('(주)비비드','이국희','070-4115-5011'),('(주)아모레퍼시픽','서경배','080-023-5454'),('샤넬','가브리엘 샤넬','02-3708-2700'),('크리스찬 디올','크리스티앙 디오르','02-3480-0104');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `itemName` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company` varchar(45) NOT NULL,
  PRIMARY KEY (`itemName`),
  KEY `company_idx` (`company`),
  CONSTRAINT `company` FOREIGN KEY (`company`) REFERENCES `company` (`name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('가브리엘 샤넬',109000,'2022-07-29 13:29:42','샤넬'),('데이쉬드 선 파우더',24000,'2022-07-29 13:29:42','(주)LG생활건강'),('디올 스노우',175000,'2022-07-29 13:29:42','크리스찬 디올'),('디올 클렌저',68000,'2022-07-29 13:29:42','크리스찬 디올'),('디올 프레스티지',128000,'2022-07-29 13:29:42','크리스찬 디올'),('디올 하이드라 라이프',112000,'2022-07-29 13:29:42','크리스찬 디올'),('로드비',850000,'2022-07-29 13:29:42','크리스찬 디올'),('마이스터 포맨 올인원',73000,'2022-07-29 13:29:42','(주)LG생활건강'),('마이스터 포맨 프레쉬 로션',28000,'2022-07-29 13:29:42','(주)LG생활건강'),('메이데이 힐링패드',25500,'2022-07-29 13:29:42','(주)비비드'),('미라클 모이스처 크림',63750,'2022-07-29 13:29:42','(주)LG생활건강'),('미라클 아쿠아 2종 세트',30749,'2022-07-29 13:29:42','(주)LG생활건강'),('미스 디올',68000,'2022-07-29 13:29:42','크리스찬 디올'),('본윤에센스',68000,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('비비드 크림 3종 세트',20000,'2022-07-29 08:26:39','(주)비비드'),('샹스 오 비브',69000,'2022-07-29 13:29:42','샤넬'),('샹스 오 후레쉬',137000,'2022-07-29 13:29:42','샤넬'),('수분크림',72000,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('순면 셀프패드',6900,'2022-07-29 13:29:42','(주)비비드'),('안테우스',154000,'2022-07-29 13:29:42','샤넬'),('에고이스트',154000,'2022-07-29 13:29:42','샤넬'),('에이지 리커버리 크림',40000,'2022-07-29 13:29:42','(주)LG생활건강'),('자음생 아이크림',144000,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('자음생세럼 브라이트닝',198000,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('자음생앰플 브라이트닝',126000,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('자음유액',64800,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('자작나무 채움크림',7900,'2022-07-29 13:29:42','(주)비비드'),('캡춰 유쓰',154000,'2022-07-29 13:29:42','크리스찬 디올'),('캡춰 토탈',78000,'2022-07-29 13:29:42','크리스찬 디올'),('코코 누와르',129000,'2022-07-29 13:29:42','샤넬'),('코코 마드모아젤',109000,'2022-07-29 13:29:42','샤넬'),('탄력크림',81000,'2022-07-29 13:29:42','(주)아모레퍼시픽'),('티트리 보듬토너',7900,'2022-07-29 13:29:42','(주)비비드'),('포맨 네오필 2종 세트',55250,'2022-07-29 13:29:42','(주)LG생활건강'),('플라티넘',80000,'2022-07-29 13:29:42','샤넬');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'shopdb'
--

--
-- Dumping routines for database 'shopdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-30 14:37:29
