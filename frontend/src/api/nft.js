import { apiInstance } from "api";

const api = apiInstance();
const MAPPING_URL = "/nft"

//토큰 등록
const createToken = async(asset, success, fail)=>{
    api.defaults.headers.common["accessToken"] = localStorage.getItem('accessToken');
    await api.post(MAPPING_URL+"/create", JSON.stringify(asset)).then(success).catch(fail);
}

//토큰 조회
const findToken = async(id, success, fail)=>{
    api.defaults.headers.common["accessToken"] = localStorage.getItem('accessToken');
    await api.get(MAPPING_URL+`/${id}`).then(success).catch(fail);
}

// 토큰 판매
const registProduct = async(priceInfo, success, fail)=>{
    api.defaults.headers.common["accessToken"] = localStorage.getItem('accessToken');
    await api.put(MAPPING_URL+"/trade/sell",JSON.stringify(priceInfo)).then(success).catch(fail);
}
// 토큰 
const findAllProducts = async(query, success, fail)=>{
    api.defaults.headers.common["accessToken"] = localStorage.getItem('accessToken');
    await api.get(`${MAPPING_URL}/trade/sellList?${query}`).then(success).catch(fail);
}


// 거래내역 저장
const saveActivity = async(activity, success, fail)=>{
    api.defaults.headers.common["accessToken"] = localStorage.getItem('accessToken');
    await api.post(MAPPING_URL+"/trade/save",JSON.stringify(activity)).then(success).catch(fail);
}

const findAllActivities  = async(success, fail)=>{
    api.defaults.headers.common["accessToken"] = localStorage.getItem('accessToken');
    await api.get(MAPPING_URL+"/trade/history").then(success).catch(fail);
}


export {createToken, findToken,registProduct,saveActivity,findAllActivities,findAllProducts};