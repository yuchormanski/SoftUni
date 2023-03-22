import { get, host, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";



const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}


//TODO Change user object according to project requirements

export async function login(email, password) {
    console.log(host + endpoints.login);
    const result = await post(host + endpoints.login, { email, password });
    setUserData(result);
}

export async function register(email, password) {
    const result = await post(host + endpoints.register, { email, password });
    setUserData(result);
}

export async function logout() {
    get(host + endpoints.logout);
    clearUserData();
}