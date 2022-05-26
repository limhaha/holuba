const express = require('express');
 const router = express.Router();
 const NftService = require('./nft.service');
 const nftService = new NftService();

 const DonationService = require('../donation/donation.service');
 const donationService = new DonationService();

  //jwt
  const jwt = require('../jwt/jwt');
  const authUtil =  require('../jwt/auth').checkToken;

  //image s3 upload
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('../S3/s3')

//nft 등록
router.post('/create', authUtil, upload.single('image'), async function (req, res) {

 
    const token = req.get('accessToken');
	var base64Payload = token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE 
	var payload = Buffer.from(base64Payload, 'base64'); 
	var result = JSON.parse(payload.toString()) 

    const userId = result.userId;
    const assetName = req.body.assetName;
    const assetDesc = req.body.assetDesc;
    const assetImageUrl = req.body.assetImageUrl;
    const tokenId = req.body.tokenId;
    const price = req.body.price;



    donationService.save(userId, price);
    const { statusCode, responseBody } = await nftService.createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

//판매 등록

router.put('/trade/sell',authUtil,  async function (req, res) {

    const assetId = req.body.assetId;
    const price = req.body.price;
    if(assetId == null){
		return res.send({err : "assetId null err"});
	}
    if(price == null){
		return res.send({err : "price null err"});
	}



    const { statusCode, responseBody } = await nftService.sellNFT(assetId,price);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

router.put('/trade/cancel',authUtil,  async function (req, res) {

    const assetId = req.body.assetId;
    if(assetId == null){
		return res.send({err : "assetId null err"});
	}

    const { statusCode, responseBody } = await nftService.cancel(assetId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});



//조건판매목록조회
router.get('/trade/sellList',authUtil,  async function (req, res) {

    var marketStatus = req.query.status;
    var min = req.query.min;
    var max = req.query.max;
    var condition = req.query.condition;
    
  
    if(!req.query.condition){
        var condition = '0';
    }
  

    const { statusCode, responseBody } = await nftService.testList(marketStatus,min,max,condition);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});


//거래내역저장

router.post('/trade/save',authUtil,  async function (req, res) {
    
    const assetId = req.body.assetId;
    const price = req.body.price;
    const sellerId = req.body.sellerId;
    const buyerId = req.body.buyerId;
    
    if(assetId == null){
		return res.send({err : "assetId null err"});
	}
    if(assetId == null){
		return res.send({err : "price null err"});
	}
    if(assetId == null){
		return res.send({err : "sellerId null err"});
	}
    if(assetId == null){
		return res.send({err : "buyerId null err"});
	}
    


    const { statusCode, responseBody } = await nftService.saveTradeHistory(assetId, price, sellerId, buyerId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

//거래내역 조회
router.get('/trade/history',authUtil,  async function (req, res) {
    
    

    const token = req.get('accessToken');
	var base64Payload = token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE 
	var payload = Buffer.from(base64Payload, 'base64'); 
	var result = JSON.parse(payload.toString()) 

	console.log(result.userId);

	//
	const userId = result.userId


    const { statusCode, responseBody } = await nftService.getTradeHistory(userId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

//토큰 상세 조회
router.get('/:assetId',authUtil,  async function (req, res) {
    
    const assetId = req.params.assetId;
    if(assetId == null){
		return res.send({err : "assetId null err"});
	}
    const { statusCode, responseBody } = await nftService.getAssetDetails(assetId);
 
  

	res.statusCode = statusCode;
	res.send(responseBody);
});


module.exports = router;