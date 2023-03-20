
const base = 'http://localhost:3030';
export const url = {
    base: base,
    get: `${base}/data/teams`,       //get
    getMembers: `${base}/data/members?where=status%3D%22member%22`,
    getById: `${base}/...`,       //getById
    post: `${base}/data/teams`,       //post
    put: `${base}/...`,        //post  
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
