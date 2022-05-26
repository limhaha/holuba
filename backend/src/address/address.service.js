const AddressRepository = require('./address.repository');
const addressRepository = new AddressRepository();


class AddressService {
    contractsave(contractAddress,contractName) {

        addressRepository.contractsave(contractAddress,contractName)

        return {
            statusCode: 201,
            responseBody: {
                message: "success"
            }
        };
    }

    async getContractName(contractName) {

        var a = await addressRepository.getContractName(contractName)

        if(!a[0]){
            
            return {
                statusCode: 500,
                responseBody:{
                    err: " address not found"
                }
            };

        }

        return {
            statusCode: 200,
            responseBody: {
                contractAddress : a[0].contract_address
            }
        };
    }


    //기부수령자 주소저장
    targetsave(donatetarget) {

        addressRepository.targetsave(donatetarget)

        return {
            statusCode: 201,
            responseBody: {
                message: "success"
            }
        };
    }

    async getTargetAddress(donateTargetId) {

        var a = await addressRepository.getTargetAddress(donateTargetId)

        if(!a[0]){
            
            return {
                statusCode: 500,
                responseBody:{
                    err: " target not found"
                }
            };

        }

        return {
            statusCode: 200,
            responseBody: {
                donateAddress : a[0].donate_address
            }
        };
    }
    
 
 }
 
 module.exports = AddressService;