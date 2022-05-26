/**
 *  PJT Ⅲ - Req.1-SC3) 시나리오 테스트
 */
const DonateNFT = artifacts.require("DonateNFT");
const Market = artifacts.require("Market");

contract("Sale Contract Testing", (accounts) => {
    let token;
    let market;

    beforeEach(async function () {
        token = await DonateNFT.new();
        market = await Market.new();
    })
    
    describe("포지티브 케이스 1: 마켓 동작 점검", () => {
        it("Market trading", async () => {
            const address1 = accounts[0];
            const address2 = accounts[1];
            const tokenURI = "tempURI";

            market.setNFTAddress(token.address);
            token.setMarketAddress(market.address);
            
            let tokenId = (await token.create(address1, "name", "desc", tokenURI, 5)).logs[0].args["tokenId"];
            tokenId = (await token.create(address1, "name", "desc", tokenURI, 5)).logs[0].args["tokenId"];
            let owner = (await token.ownerOf(tokenId));
            console.log(await token.tokenURI(tokenId));

            assert.equal(address1, owner, "NFT Mint Failed");
            
            // await token.approve(market.address, tokenId);
            await token.newSale(tokenId, 50);

            await market.trading(tokenId, {
                from: address2,
                value: 50
            });
            
            owner = (await token.ownerOf(tokenId));

            assert.equal(address2, owner, "NFT Transfer Failed.");
            console.log(await web3.eth.getBalance(market.address));

            assert.equal(tokenURI, (await token.getTokenById(tokenId)).tokenURI, "Wrong Token Id or URI.")
        })
    });
});
