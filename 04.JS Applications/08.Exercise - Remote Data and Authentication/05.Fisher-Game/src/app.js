const userData = JSON.parse(localStorage.getItem('userData'))
const userName = document.querySelector('nav p.email span');

if(!userData){
    document.querySelector('nav #user').style.display = 'none'; // logout button
    document.querySelector('section #main').style.display = 'none';
} else {
    const nameAnchor = userData.email;
    userName.addEventListener('click', () =>{
        window.location = './user.html';
    })
    document.querySelector('nav #home').style.display = 'none'; // logout button
    document.querySelector('nav #guest').style.display = 'none'; // login & reg button
    document.querySelector('#addForm button').disabled = false;
    userName.textContent = userData.email;
    document.querySelector('nav #logout').addEventListener('click', logOut);

    loadData()
}
document.querySelector('section#home-view .load').addEventListener('click', loadData);

async function loadData(){
    const url = 'http://localhost:3030/data/catches';

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}


//logout
async function logOut(){
    const response = await fetch('http://localhost:3030/users/logout');
    localStorage.clear();
    window.location.reload();
}