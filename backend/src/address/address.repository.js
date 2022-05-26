const connection = require('../../config/connection').promise();



class AddressRepository{

    //컨트랙트주소 저장
    contractsave(contractAddress,contractName){

        connection.query( `INSERT INTO contracts(contract_address,contract_name) VALUE (?,?)`,[contractAddress,contractName]);
    }

    //컨트랙트주소 가져오기
    async getContractName(contractName){

        var a = await connection.query( `select contract_address from contracts where contract_name = ?`,contractName);

        return a[0];
    }


     //기부수령자 저장
     targetsave(donatetarget){

        connection.query( `INSERT INTO donate_target(donate_address) VALUE (?)`,donatetarget);
    }

    //기부수령자 가져오기
    async getTargetAddress(donateTargetId){

        var a = await connection.query( `select donate_address from donate_target where donate_target_id = ?`,donateTargetId);
      
        return a[0];
    }

}

module.exports = AddressRepository;