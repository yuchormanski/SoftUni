const base = 'http://localhost:3030';
export const url = {
    get:`${base}/data/movies`,
    post:`${base}/data/movies`,
    put:`${base}/data/movies/id`,
    delete:`${base}/data/movies/id`,
    register:`${base}/users/register`,
    login: `${base}/users/login`,
    logout: `${base}/users/logout`
}
