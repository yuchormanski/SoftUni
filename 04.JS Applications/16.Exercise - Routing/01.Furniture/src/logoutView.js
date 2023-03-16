import { url } from "./requestURL.js"
import { get } from "./api.js"


export async function logoutView(ctx){
    console.log('ok');
    const userData = get(url.logout);
    localStorage.removeItem('userData');
    ctx.page.redirect('/')
}