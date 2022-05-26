create database holuba_db;
use holuba_db;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '회원번호',
  `email` varchar(50) COMMENT '이메일',
  `wallet_address` varchar(100) NOT NULL COMMENT '지갑주소',
  `nickname` varchar(10) COMMENT '닉네임' unique,
  `profile_image_url` varchar(200)  COMMENT '프로필이미지주소' ,
  `bio` varchar(100)  COMMENT '자기소개',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COMMENT='회원';


CREATE TABLE `donation` (
   `donation_id` int NOT NULL AUTO_INCREMENT COMMENT '기부번호',
   `user_id` int NOT NULL COMMENT '회원번호',
   `price` varchar(50) NOT NULL COMMENT '기부금액',
   `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '기부 시간',
   foreign key (`user_id`) references `user` (`user_id`) ON DELETE CASCADE on update cascade,
   PRIMARY KEY (`donation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COMMENT='기부';


CREATE TABLE `asset` (
   `asset_id` int NOT NULL AUTO_INCREMENT COMMENT '자산번호',
   `user_id` int NOT NULL COMMENT '보유회원번호',  
   `asset_name` varchar(100) COMMENT 'NFT 이름',
   `asset_desc` varchar(500) COMMENT '설명',
   `asset_image_url` varchar(200)  COMMENT '자산이미지주소' ,  
   `token_id` varchar(100) NOT NULL COMMENT 'nft토큰아이디'unique,  
   `market_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '판매등록 여부, 1판매중 ',
   `price` varchar(50) NOT NULL DEFAULT 0 COMMENT '판매가격',
   `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 시간',   
   foreign key (`user_id`) references `user` (`user_id`) ON DELETE CASCADE on update cascade,
   PRIMARY KEY (`asset_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COMMENT='자산';


CREATE TABLE `trade_history` (
	`trade_id` int NOT NULL AUTO_INCREMENT COMMENT '거래번호',
    `asset_id` int NOT NULL  COMMENT 'nft번호',
    `price` varchar(50) NOT NULL COMMENT '거래금액',
    `seller_id` int NOT NULL COMMENT '판매자 번호',
    `buyer_id` int NOT NULL COMMENT '구매자번호',
    `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '거래 시간',
    
	foreign key (`asset_id`) references `asset` (`asset_id`) ON DELETE CASCADE on update cascade,
	PRIMARY KEY (`trade_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COMMENT='자산';

CREATE TABLE `contracts` (
   `contracts_id` int NOT NULL AUTO_INCREMENT COMMENT '컨트랙트 번호',
   `contract_address` varchar(100) NOT NULL COMMENT '컨트랙트 주소',
   `contract_name` varchar(50) NOT NULL COMMENT '컨트랙트 이름',
   PRIMARY KEY (`contracts_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COMMENT='컨트랙트';

CREATE TABLE `donate_target` (
   `donate_target_id` int NOT NULL AUTO_INCREMENT COMMENT '기부 수령자 번호',
   `donate_address` varchar(100) NOT NULL COMMENT '기부 수령자 주소',
   PRIMARY KEY (`donate_target_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COMMENT='기부 수령자';