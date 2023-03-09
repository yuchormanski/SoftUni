import { url } from "./routing.js";
import { userData, homeView } from "./app.js";


export async function goodBye() {
    await fetch(url.logout, {
        headers: {
            "X-Authorization": userData.token,
        },
    });
    localStorage.clear();
    window.location.reload()
}