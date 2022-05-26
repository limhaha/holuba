/**
 * Services Logics related to User
 * Service/Repository 레이어의 함수를 호출해야합니다.
 */
 const UserRepository = require('./user.repository');
 const userRepository = new UserRepository();
 
 class UserService {
 
    /**
	 * 프로필 조회    서비스
	 */
    async signUp(walletAddress) {
        

        
        var q = await userRepository.signUp(walletAddress);

        return q;
    }

    /**
	 * 프로필 조회    서비스
	 */
    async getProfileWithUserId(userId) {

        var profile = await userRepository.getProfileByUserId(userId);
        
        //null처리
        if(!profile[0][0]){
        
            return{
                statusCode: 204,
                responseBody: {
                    message: "profile null"
                }
            }
        }
        
        return {
            statusCode: 200,
            responseBody: {
                userId : userId,
                email : profile[0][0].email,
                walletAddress : profile[0][0].wallet_address,
                nickname : profile[0][0].nickname,
                profileImageUrl : profile[0][0].profile_image_url,
                bio : profile[0][0].bio
            }
        };
       

       
    }

    async getProfileWithWalletAddress(walletAddress) {

        var profile = await userRepository.getProfileByWalletAddress(walletAddress);
       
        
        //null처리
        if(!profile[0][0]){

            return{
                statusCode: 204,
                responseBody: {
                    message: "profile null"
                }
            }
        }

        return {
            statusCode: 200,
            responseBody: {
                userId : profile[0][0].user_id,
                email : profile[0][0].email,
                walletAddress : walletAddress,
                nickname : profile[0][0].nickname,
                profileImageUrl : profile[0][0].profile_image_url,
                bio : profile[0][0].bio
            }
        };
    }

    /**
	 * 프로필 수정    서비스
	 */
     async editProfile(userId,email,nickname,profileImageUrl,bio) {

        try {
            var q = await userRepository.editProfileByUserId(userId,email,nickname,profileImageUrl,bio);
   
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
               //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
               console.log("dup error")
                return {
                    statusCode: 500,
                    responseBody: {
                        message: "dup error"
                    }
                };
           } else {
               //handleHttpErrors(err.message);
               return {
                statusCode: 500,
                responseBody: {
                    message: "error"
                }
            };
            }
        }

        return {
            statusCode: 200,
            responseBody: {
                message: "success"
            }
        };
    
    
    
            
    }
 
 }
 
 module.exports = UserService;