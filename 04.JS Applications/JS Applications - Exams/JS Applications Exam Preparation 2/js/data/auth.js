import { get, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";



const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}


//TODO Change user object according to project requirements

export async function login(username, password) {
    const result = await post(endpoints.login, { username, password });
    setUserData(result);
}

export async function register(username, password) {
    const result = await post(endpoints.register, { username, password });
    setUserData(result);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}