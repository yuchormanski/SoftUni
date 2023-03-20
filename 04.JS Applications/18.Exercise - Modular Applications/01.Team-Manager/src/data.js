
import { del, get, post, put } from './api.js'
// import { url } from './requestURL.js'


export async function getData(url) {
    return get(url)
}


export async function getDataById(url, id) {
    return get(`${url}/${id}`)
}


export async function deleteById(url, id) {
    return del(`${url}/${id}`)
}


export async function postData(url, postData) {
    return post(url, postData)
}

export async function editData(url, id, data) {
    return put(`${url}/${id}`, data);
}


//for console test
window.doGet = getData;
window.getById = getDataById;
window.deleteById = deleteById;
window.postRequest = postData;
window.editItem = editData;

//usage :

/* 
// get 
const data = await getData(url.get);

//get by ID
const dataById = await getDataById(url.get, id);


// post 
const postData = await postData(url.post, { data });

//edit 
const editData = await editData(url.post, id, { data });

//delete
const deleteData = await del(url.get, id);
*/