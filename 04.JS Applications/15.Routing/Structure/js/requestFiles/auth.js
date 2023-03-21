// import { url } from "../serverURL.js";
import {get, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";



export async function register(email, password){
    const userData = await post(url.register, {email, password});
    setUserData(userData);
    return userData; // ако е необходимо
}

export async function login(email, password){
    const userData = await post(url.login, {email, password});
    setUserData(userData);
    return userData; // ако е необходимо
}

export async function logout(){
    const userData = get(url.logout); // функцията не се await-ва , за да извърши действието веднага, безусловно
    clearUserData();
}