// import { navBarLoad } from "./navBar.js";
import { clearUserData } from "./util.js";
import page from '../node_modules/page/page.mjs';


export function logoutAction(){
    clearUserData();
    location.href = '/'
    // checkUser();
    // navBarLoad();
    // page.redirect('/')
}