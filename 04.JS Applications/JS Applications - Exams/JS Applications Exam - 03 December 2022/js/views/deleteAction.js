import { deleteById } from "../data.js";
import { url } from "../requestURL.js";

export async function deleteAlbum(e){
    console.log(e.target.dataset.id);
    // await deleteById(`${url.delete}/${id}`)
}