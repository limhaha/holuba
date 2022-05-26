// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";
import "./access/Ownable.sol";
import "./Market.sol";

contract DonateNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    address public MarketAddress;
    mapping(uint256 => string) tokenURIs;
    Tokens[] public tokens;

    struct Tokens {
        address owner;
        string assetName;
        string assetDesc;
        uint256 tokenId;
        string tokenURI;
        uint256 donateAmmount;
    }

    constructor() ERC721("DonateNFT", "Donation") {}

    function setMarketAddress(address _MarketAddress) public {
        MarketAddress = _MarketAddress;
    }

    function getMarketAddress() public view returns (address) {
        return MarketAddress;
    }

    function current() public view returns (uint256) {
        return _tokenIds;
    }

    function getTokenById(uint256 tokenId) public view returns (Tokens memory) {
        return tokens[tokenId];
    }

    function create(
        address owner,
        string memory assetName,
        string memory assetDesc,
        string memory _tokenURI,
        uint256 price
    ) public {
        _mint(owner, _tokenIds);

        tokens.push(
            Tokens(owner, assetName, assetDesc, _tokenIds, _tokenURI, price)
        );
        _tokenIds++;
    }

    function getTokensByWallet(address target)
        public
        view
        returns (Tokens[] memory)
    {
        uint256 nowLength = 0;

        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i].owner == target) {
                nowLength++;
            }
        }

        Tokens[] memory ret = new Tokens[](nowLength);
        uint256 j = 0;
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i].owner == target) {
                ret[j] = tokens[i];
                j++;
            }
        }

        return ret;
    }

    function newSale(uint256 tokenId) public {
        _transferFrom(msg.sender, MarketAddress, tokenId);
        Market(MarketAddress).newSale(msg.sender, tokenId);
    }

    function _transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public {
        transferFrom(from, to, tokenId);
        tokens[tokenId].owner = ownerOf(tokenId);
    }
}
