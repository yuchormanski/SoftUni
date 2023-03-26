import { del } from "./api.js";
import { logout } from "./auth.js";

export function logoutAction(ctx) {
    logout();
    //redirect to target view
    ctx.page.redirect('/');
}

export function deleteAction(ctx) {
    const id = ctx.params.id;
    if (confirm('Are you sure?')) {
        del('/data/albums/' + id);
        ctx.page.redirect('/catalog')
    }
}