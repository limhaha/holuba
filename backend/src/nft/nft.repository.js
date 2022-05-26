const connection = require('../../config/connection').promise();

class NftRepository {

    createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId){

        var a = connection.query( `INSERT INTO asset(user_id,asset_name,asset_desc,asset_image_url,token_id) VALUE (?,?,?,?,?)`,[userId,assetName,assetDesc,assetImageUrl,tokenId]);
        
        return a;
    }

    sellNFT(assetId,price){
        connection.query( `UPDATE asset SET market_status = 1, price = (?) WHERE asset_id =?`,[price,assetId]);
    }
    
    //판매취소
    cancel(assetId){
        connection.query( `UPDATE asset SET market_status = 0 WHERE asset_id =?`,assetId);
    }

    async sellList(){

        var a = await connection.query(`SELECT * FROM asset WHERE market_status = 1`);
        console.log(a[0])
        return a[0];
    }


    async testList(arr){

        var str = 'SELECT * FROM asset';
        
        var cnt = arr.length;
        console.log(cnt)
        if(arr[0] || arr[1] || arr[2] ){
            str += ' WHERE '
        }
        

        //market status
        if(arr[0]){
            str += ' market_status = ';
            str += arr[0];
        }
        
        //min
        if(arr[1]){

            if(arr[0]){
                str += ' and '
            }

            str += ' price >= ';
            str += arr[1];
        }
        

        //max
        if(arr[2]){

            if(arr[0] || arr[1]){
                str += ' and '
            }

            str += ' price <= ';
            str += arr[2];
        }

        //condition
        if(arr[3]){
            str += ' ORDER BY ';
            if(arr[3] == '1'){ //오래된 순
                str += ' date ASC ';
            }else if(arr[3] == '2'){ //높은 가격순
                str += ' price DESC ';
            }else if(arr[3] == '3'){ // 낮은 가격순
                str += ' price ASC ';
            }else{ //최신순 정렬
                str += ' date DESC ';
            }
        }
        console.log(str)
       


        var a = await connection.query(str);
        // console.log(a[0])
        return a[0];
    }



    saveTradeHistory(assetId, price, sellerId, buyerId){
        //거래내역저장
        connection.query(`INSERT INTO trade_history(asset_id,price,seller_id,buyer_id) VALUE (?,?,?,?)`,[assetId, price, sellerId, buyerId]);
        
        // 소유자 변경, 판매상태 0으로 변경
        connection.query(`UPDATE asset SET market_status = 0, user_id = ? WHERE asset_id = ?`,[buyerId,assetId]);


    }

    async getTradeHistory(userId){

        // var str = `SELECT asset_id as assetId, price, seller_id as \`from\`, buyer_id as \`to\`, date FROM trade_history where seller_id = ? or buyer_id =?`;
        // console.log(str)
        var a = await connection.query(`SELECT asset_id as assetId, price, seller_id as \`from\`, buyer_id as \`to\`, date FROM trade_history where seller_id = ? or buyer_id =?`,[userId,userId]);
        var b = a[0]




        for(var i in b){

            if(!b[i].assetId || !b[i].from || !b[i].to){
                return ;
            }

            var realassetname = await connection.query(`select asset_name from asset where asset_id = ?`,b[i].assetId)
            var realfrom = await connection.query(`select nickname from user where user_id = ?`,b[i].from)

            var realto = await connection.query(`select nickname from user where user_id = ?`,b[i].to)


            b[i].assetName = realassetname[0][0].asset_name
            b[i].from = realfrom[0][0].nickname
            b[i].to = realto[0][0].nickname


        }

        return a[0];
    }








    async  getAssetDetails(assetId){
        var a = await connection.query(`SELECT * FROM asset WHERE asset_id = ?`,assetId);
        return a[0];

    }

}

module.exports = NftRepository;