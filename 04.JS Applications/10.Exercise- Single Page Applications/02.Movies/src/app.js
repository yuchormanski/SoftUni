

import { createElement } from "./elements.js";
import { addMovie } from "./addMovie.js";
import { url } from "./routing.js";
import { register } from "./register.js";


export const home = document.querySelector('nav a');
home.addEventListener('click', homeView);
home.href = '#';
const navLi = Array.from(document.querySelectorAll('nav li'));
const welcome = navLi[0]; 
const logOut = navLi[1];
const login = navLi[2]; 
const reg = navLi[3];
reg.addEventListener('click', register)
logOut.style.display = 'none'; 
welcome.style.display = 'none';

//sections
export const homePageSection = document.getElementById('home-page');
export const addMovieSection = document.getElementById('add-movie');
export const movieExampleSection = document.getElementById('movie-example');
export const editMovieSection = document.getElementById('edit-movie');
export const formLoginSection = document.getElementById('form-login');
export const formSignUpSection = document.getElementById('form-sign-up');

homeView()

async function homeView() {

    const movieList = document.getElementById('movie');
    const homeViewMovies = document.getElementById('movies-list');
    const addMovieBtn = document.querySelector('#add-movie-button a');

    
    addMovieBtn.addEventListener('click', addMovie)
    
    
    homePageSection.style.display = 'block';
    addMovieSection.style.display = 'none';
    movieExampleSection.style.display = 'none';
    editMovieSection.style.display = 'none';
    formLoginSection.style.display = 'none';
    formSignUpSection.style.display = 'none';
    
    
    const response = await fetch(url.get);
    const data = await response.json();
    
    homeViewMovies.innerHTML = '';

    data.forEach(movie => {

        const element = document.createElement('div');
        element.className = 'card mb-4';
        element.innerHTML = `<img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
                                <div class="card-body">
                                    <h4 class="card-title">${movie.title}</h4>
                                </div>
                                <div class="card-footer">
                                    <a href="/details/${movie._id}">
                                        <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
                                    </a>
                                </div>`;

        homeViewMovies.appendChild(element)
    });

}



// const element = document.createElement('div');
// element.className = 'card mb-4';
// element.innerHTML = `<img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
//                      <div class="card-body">
//                         <h4 class="card-title">${movie.title}</h4>
//                     </div>
//                     <div class="card-footer">
//                         <a href="/details/${movie._id}">
//                             <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
//                         </a>
//                     </div>`;