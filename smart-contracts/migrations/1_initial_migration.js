const DonateNFT = artifacts.require("DonateNFT");
const Market = artifacts.require("Market");

/**
 * PJT Ⅰ/Ⅲ - 시나리오 테스트
 * @dev 
 * 올바른 테스트를 위해 
 * PJT Ⅰ - DonateNFT
 * PJT Ⅲ - DonateNFT, SsafyToken, Market
 * 가 배포되어야 합니다. 
 */
module.exports = function (deployer) {
  deployer.deploy(DonateNFT);
  deployer.deploy(Market);
};
