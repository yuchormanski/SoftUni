import { get } from "./api.js";
import { url } from "./requestURL.js";
import { clearUserData } from "./util.js";
import page from '../node_modules/page/page.mjs';
import { navLoad } from "./nav.js";



export async function logoutAction(ctx){
    await get(url.logout);
    clearUserData();
    navLoad()
    page.redirect('/');
}