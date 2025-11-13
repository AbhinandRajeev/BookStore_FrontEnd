import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// 1. Register user API
export const registerUserAPI = async(reqBody) =>{
    return await commonAPI('POST', `${serverURL}/api/register`, reqBody, {})
}

// 2. User login
export const loginUserAPI = async(reqBody) =>{
    return await commonAPI('POST', `${serverURL}/api/login`, reqBody, {})
}

// 2. google User login
export const  GoogleloginUserAPI = async(reqBody) =>{
    return await commonAPI('POST', `${serverURL}/api/google-login`, reqBody, {})
}