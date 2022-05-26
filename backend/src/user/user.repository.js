/**
 * sales table Manipulations
 * sales 테이블에 접근합니다.
 */
 const connection = require('../../config/connection').promise();

 class UserRepository {

     /**
     * 회원가입 기능
     * 
     */
    signUp(walletAddress){
        const defaultimg = 'https://holuba.s3.ap-northeast-2.amazonaws.com/default.png'
        connection.query( `INSERT INTO user(wallet_address,profile_image_url) VALUE (?,?)`,[walletAddress,defaultimg]);
    }
  

    /**
     * 프로필 조회 기능
     * 
     */
	async getProfileByUserId(userId) {

        var a = await connection.query( `SELECT * FROM user WHERE user_id =?`,userId);

        return a;
	}

    async getProfileByWalletAddress(walletAddress) {
   
        var a = await connection.query( `SELECT * FROM user WHERE wallet_address =?`,walletAddress);

        return a;
	}

   
    /**
     * 프로필 수정 기능
     * 
     */
    editProfileByUserId(userId,email,nickname,profileImageUrl,bio){
        var a = connection.query( `UPDATE user SET email = (?), nickname = (?), profile_image_url = (?), bio = (?) WHERE user_id =?`,[email,nickname,profileImageUrl,bio,userId]);
        return a;
    }
}

module.exports = UserRepository;