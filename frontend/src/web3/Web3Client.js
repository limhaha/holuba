import DonateNFTBuild from 'contracts/DonateNFT.json';
import MarketBuild from 'contracts/Market.json';
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers';
import axios from 'axios'

let donateContract;
let marketContract;
let donateNFTAddress;
let marketAddress;
let donateGetterAddress;
let account;
let library;
const ether = 1000000000000000000;
const NFTName = "DonateNFT";
const MarketName = "Market";
const DonateGetterId = 1;

export const init = async () => {
    const _account = localStorage.getItem("walletAddress");

    if (_account && account === _account)
        return;
    
    account = _account;
    
    if (donateContract && marketContract)
        return;
    library = new Web3Provider(window.ethereum);
    
    const signer = library.getSigner(_account).connectUnchecked();

    await axios.get(`http://3.35.173.223:5050/address/contract/${NFTName}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then((res) => {
        console.log(res);
        donateNFTAddress = res.data.contractAddress;
        donateContract = new Contract(donateNFTAddress, DonateNFTBuild.abi, signer);
    });

    await axios.get(`http://3.35.173.223:5050/address/contract/${MarketName}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then((res) => {
        marketAddress = res.data.contractAddress;
        marketContract = new Contract(marketAddress, MarketBuild.abi, signer);
    });

    await axios.get(`http://3.35.173.223:5050/address/donatetarget/${DonateGetterId}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then((res) => {
        donateGetterAddress = res.data.donateAddress.toLowerCase();
    });

    if (donateNFTAddress !== await marketContract.getNFTAddress()) {
        await marketContract.setNFTAddress(donateNFTAddress, { from: localStorage.getItem("walletAddress") });
    }

    if (marketAddress !== await donateContract.getMarketAddress()) {
        await donateContract.setMarketAddress(marketAddress, { from: localStorage.getItem("walletAddress") });
    }
}

export const tokenMint = async (name, desc, tokenURI, price) => {
    const tx = await marketContract
        .donating(donateGetterAddress, name, desc, tokenURI, {
            from: localStorage.getItem("walletAddress"),
            value: (price * ether).toString()
        })
    
    let nowId = null;

    await tx.wait()
        .then(async (receipt) => {
            if (receipt.status === 1) {
                while(nowId === null)
                    nowId = await donateContract.current({ from: localStorage.getItem("walletAddress") });
            }
        })
    
    return nowId-1;
}

export const getTokenById = async (tokenId) => {
    return await donateContract.getTokenById(tokenId);
}

export const getTokensByWallet = async (account) => {
    return await donateContract.getTokensByWallet(account);
}

export const newSale = async (tokenId) => {
    const tx = await donateContract
        .newSale(tokenId, { from: localStorage.getItem("walletAddress") });
    
    const receipt = await tx.wait();

    if (receipt.status === 1)
        return true;
    else
        return false;
}

export const cancelSale = async (tokenId) => {
    const tx = await marketContract
        .deleteSale(tokenId, true, { from: localStorage.getItem("walletAddress") });
    
    const receipt = await tx.wait();

    if (receipt.status === 1)
        return true;
    else
        return false;
}

export const trading = async (tokenId, price) => {
    const tx = await marketContract.trading(tokenId, {
        from: localStorage.getItem("walletAddress"),
        value: (price * ether).toString()
    });

    const receipt = await tx.wait();

    if (receipt.status === 1)
        return true;
    else
        return false;
}

export const deleteContracts = () => {
    donateContract = null;
    marketContract = null;
}