const express = require('express');
 const router = express.Router();
 const AddressService = require('./address.service');
 const addressService = new AddressService();

 //jwt
const jwt = require('../jwt/jwt');
const authUtil =  require('../jwt/auth').checkToken;

  /**
 * 컨트랙트 주소저장
 */
   router.post('/contract', authUtil, async function (req, res) {

    const contractAddress = req.body.contractAddress ;
	const contractName = req.body.contractName ;

    if(contractAddress == null){
		return res.send({err : "contractAddress null err"});
	}
    if(contractName == null){
		return res.send({err : "contractName null err"});
	}

    const { statusCode, responseBody } = await addressService.contractsave(contractAddress,contractName);



	res.statusCode = statusCode;
	res.send(responseBody);
});

/**
 * 컨트랙트 주소 조회
 */
router.get('/contract/:contractName', authUtil, async function (req, res) {

 
    const contractName = req.params.contractName;
    
    const { statusCode, responseBody } = await addressService.getContractName(contractName);

	res.statusCode = statusCode;
	res.send(responseBody);
});


  /**
 * 기부수령자 주소저장
 */
   router.post('/donatetarget', authUtil, async function (req, res) {

    const donatetarget = req.body.donatetarget ;


    if(donatetarget == null){
		return res.send({err : "donatetarget null err"});
	}


    const { statusCode, responseBody } = await addressService.targetsave(donatetarget);



	res.statusCode = statusCode;
	res.send(responseBody);
});

/**
 * 기부수령자 주소 조회
 */
router.get('/donatetarget/:id', authUtil, async function (req, res) {

 
    const donateTargetId = req.params.id;
    if(donateTargetId == null){
		return res.send({err : "id null err"});
	}
    const { statusCode, responseBody } = await addressService.getTargetAddress(donateTargetId);

	res.statusCode = statusCode;
	res.send(responseBody);
});



module.exports = router;