// /**
//  * PJT Ⅰ - 과제 3 테스트 코드 작성
//  * @dev NFT mint, transfer, and compare URI 
//  */

// const NftCreator = artifacts.require("DonateNFT");

// contract("NftCreator", (accounts) => {
//     let token;

//     beforeEach(async function () {
//         token = await NftCreator.new();
//     })
    
//     describe("포지티브 케이스 1: 토큰이 정상적으로 생성되었는지 점검", () => {
//         it("NFT mint, transfer, and compare URI", async () => {

//             const address1 = "0xefc1a3f9b0f73a8bc2fb15bd20278ae4df9d21a9";
//             const address2 = "0xd85f12071b353b3d5451bc714cfa9740f9de395a";
//             const tokenURI = "tempURI";

//             let tokenId = (await token.create(address1, tokenURI, 5)).logs[0].args["tokenId"];
//             let owner = (await token.ownerOf(tokenId)).toLowerCase();

//             assert.equal(address1, owner, "NFT Mint Failed");

//             await token.transferFrom(address1, address2, 0);
//             owner = (await token.ownerOf(tokenId)).toLowerCase();
//             assert.equal(address2, owner, "NFT Transfer Failed.");

//             assert.equal(tokenURI, await token.tokenURI(tokenId), "Wrong Token Id or URI.")

//             // 다음이 반드시 테스트되어야 합니다.
//             // assert.equal(sender, owner, "NFT Mint Failed");
//             // assert.equal(receiver, owner, "NFT Transfer Failed.");
//             // assert.equal(tokenURI, tokenURIFetched, "Wrong Token Id or URI.")
//         })
//     });

// });