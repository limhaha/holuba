const jwt = require('./jwt');

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
    checkToken: async (req, res, next) => {
        var token = req.headers.accesstoken;
   
        // 토큰 없음
        if (!token)
            return res.json("no token error");
        // decode
        const user = await jwt.verify(token);
        // 유효기간 만료
        if (user === TOKEN_EXPIRED)
            return res.json("token expired error");
        // 유효하지 않는 토큰
        if (user === TOKEN_INVALID)
            return res.json("token invalid error");
        if (user.userId === undefined)
            return res.json("error");
        req.idx = user.idx;
        next();
    }
}

module.exports = authUtil;