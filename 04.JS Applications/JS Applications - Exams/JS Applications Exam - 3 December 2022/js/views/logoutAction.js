import { updateNav } from "../app.js";
import { getData } from "../data.js";
import { url } from "../requestURL.js";
import { clearUserData } from "../util.js";
import { context } from "../app.js";

export async function logout(){
    getData(url.logout);
    clearUserData();
    updateNav();
    context.page.redirect('/')
}