module.exports = {
    secretKey : 'YoUrSeCrEtKeY', // 원하는 시크릿 키
    options : {
        algorithm : "HS256", // 해싱 알고리즘
        expiresIn : "24h",  // 토큰 유효 기간
        issuer : "holuba" // 발행자
    }
}