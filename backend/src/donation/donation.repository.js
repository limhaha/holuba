/**
 * donation table Manipulations
 * donation 테이블에 접근합니다.
 */
const connection = require('../../config/connection').promise();

class DonationRepository{

    //기부내역 저장
    save(userId, price){

        connection.query( `INSERT INTO donation(user_id,price) VALUE (?,?)`,[userId, price]);
    }

    //기부랭킹 10등까지 가져오기
    async getRank(){
        await connection.query(`set @a := 0;`);
        var a = await connection.query( `select ( @a := @a+1 ) as rankId, user.profile_image_url, user.nickname, sum(price) as amount from donation,user where donation.user_id = user.user_id group by user.user_id order by sum(price) desc limit 10;`);
        
        return a[0];
    }

}

module.exports = DonationRepository;