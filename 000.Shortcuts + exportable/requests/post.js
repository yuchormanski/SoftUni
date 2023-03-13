import { post } from "./api.js";

export async function post({data}) {
    const postData = await post('url for post', { data });
 // do something as load  all items including new-posted-dat
}