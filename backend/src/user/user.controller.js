/**
 * /user APIs
 */
 const express = require('express');
 const router = express.Router();
 const UserService = require('./user.service');
 const userService = new UserService();

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

 /**
 * 로그인 기능
 * 최초 로그인이면 지갑주소로 insert
 */



/**
 * @swagger
 * /user/login:
 *  post:
 *    tags: [Users]
 *    summary: "로그인"
 *    description: "지갑주소 전송하면 accessToken 반환"
 *    parameters:
 *      - in: body
 *        name: body
 *        schema:
 *          type: object
 *          properties:
 *            walletAddress:
 *              type: string
 *    responses:
 *      "200":
 *        description: "로그인 결과"
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                accessToken:
 *                  type: string
 */
router.post('/login', async function (req, res) {
	
	const walletAddress = req.body.walletAddress;
	var isSignUp = false;
	if(walletAddress == null){
		return res.send({err : "walletAddress null err"});
	}

	var { statusCode, responseBody } = await userService.getProfileWithWalletAddress(walletAddress);
	
	// 첫 로그인 responseBody 가 null  signup실행
	if(!responseBody.userId){
		console.log('유저 생성');
		isSignUp = true;
		await userService.signUp(walletAddress);
	}
	// signup 후 null정보 가져오기
	var { statusCode, responseBody } = await userService.getProfileWithWalletAddress(walletAddress);


	//jwt토큰생성
	const jwtToken = await jwt.sign(responseBody.userId);
	responseBody.accessToken = jwtToken.token;

	res.statusCode = statusCode;
	res.send({accessToken : responseBody.accessToken, isSignUp : isSignUp});
});




/**
 * 본인 프로필 조회 기능
 * 
 */

/**
 * @swagger
 * /user/profile/:
 *  post:
 *    tags: [Users]
 *    summary: "본인 프로필 조회"
 *    description: "본인 프로필 조회"
 *    parameters:
 *      - in: header
 *        name: X-Request-ID
 *        schema:
 *          type: object
 *          properties:
 *            accessToken:
 *              type: string
 *    responses:
 *      "200":
 *        description: "로그인 결과"
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                accessToken:
 *                  type: string
 */
 router.get('/profile/',authUtil, async function (req, res) {

	const token = req.get('accessToken');
	var base64Payload = token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE 
	var payload = Buffer.from(base64Payload, 'base64'); 
	var result = JSON.parse(payload.toString()) 
	console.log(result.userId);





	var { statusCode, responseBody } = await userService.getProfileWithUserId(result.userId);
	res.statusCode = statusCode;
	res.send(responseBody);
	
});



/**
 * 프로필 조회 기능
 * 
 */
 router.get('/profile/:userId',authUtil, async function (req, res) {

	const userId = req.params.userId;
	var { statusCode, responseBody } = await userService.getProfileWithUserId(userId);
	res.statusCode = statusCode;
	res.send(responseBody);
	
});

/**
 * 프로필 수정 기능
 * 
 */
 router.put('/profile/edit',authUtil,async function (req, res) {

	// var tempImageUrl = ''
	// //s3에 이미지 저장 후 url return
	// const file = req.file
	// const result = await uploadFile(file)
	// await unlinkFile(file.path)
	// // const description = req.body.description
	// tempImageUrl = `https://holuba.s3.ap-northeast-2.amazonaws.com/${result.Key}`

	const token = req.get('accessToken');
	var base64Payload = token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE 
	var payload = Buffer.from(base64Payload, 'base64'); 
	var result = JSON.parse(payload.toString()) 

	console.log(result.userId);

	//
	const userId = result.userId
	const email = req.body.email;
	const nickname = req.body.nickname;
	const profileImageUrl = req.body.profileImageUrl;
	const bio = req.body.bio;

	const { statusCode, responseBody } = await userService.editProfile(userId,email,nickname,profileImageUrl,bio);
 
	res.statusCode = statusCode;
	res.send(responseBody);
 
});

module.exports = router;
