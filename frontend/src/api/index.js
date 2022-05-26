import axios from "axios";

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;

function apiInstance() {
    const instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-type" : "application/json; charset=UTF-8",
        }
    });
    return instance;
}

function apiImgInstance() {
    const instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "accessToken" : `${localStorage.getItem('accessToken')}`,
            "Content-Type" : "multipart/form-data",
        }
    });
    return instance;
}



export { apiInstance, apiImgInstance };
