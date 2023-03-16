
const base = 'http://localhost:3030';
export const url = {
    get: `${base}/data/catalog`,       //get
    post: `${base}/data/catalog`,       //post
    put: `${base}/data/catalog`,        //post  
    myFurniture: `${base}/data/catalog?where=_ownerId%3D%22{userId}%22`,        //get
    register: `${base}/users/register`,     //post
    login: `${base}/users/login`,       //post
    logout: `${base}/users/logout`,     //get
}



// •	Register User (POST): http://localhost:3030/users/register
// •	Login User (POST): http://localhost:3030/users/login
// •	Logout User (GET): http://localhost:3030/users/logout

// •	Create Furniture (POST): http://localhost:3030/data/catalog
// •	All Furniture (GET): http://localhost:3030/data/catalog
// •	Furniture Details (GET): http://localhost:3030/data/catalog/:id
// •	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
// •	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
// •	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
