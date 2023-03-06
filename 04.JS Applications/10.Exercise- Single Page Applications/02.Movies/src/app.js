import { createElement } from "./elements.js";

const allMoviesURL = 'http://localhost:3030/data/movies';
homeView()

const navLi = Array.from(document.querySelectorAll('nav li'));
const welcome = navLi[0]; const logout = navLi[1];
const login = navLi[2]; const register = navLi[3];
logout.style.display = 'none'; welcome.style.display = 'none';

//sections
const addMovie = document.getElementById('add-movie');
const movieExample = document.getElementById('movie-example');
const editMovie = document.getElementById('edit-movie');
const formLogin = document.getElementById('form-login');
const formSignUp = document.getElementById('form-sign-up');

const homeViewMovies = document.getElementById('movies-list');

// addMovie.style.display = 'none';
// movieExample.style.display = 'none';
// editMovie.style.display = 'none';
// formLogin.style.display = 'none';
// formSignUp.style.display = 'none';
addMovie.remove();
movieExample.remove();
editMovie.remove();
formLogin.remove();
formSignUp.remove();

async function homeView() {

    const response = await fetch(allMoviesURL);
    const data = await response.json();

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