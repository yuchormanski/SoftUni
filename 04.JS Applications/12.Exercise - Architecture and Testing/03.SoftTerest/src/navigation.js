
const home = document.querySelector('a.navbar-brand');
const navBar = [...document.querySelectorAll('#navbarResponsive ul li a')];
const dash = navBar[0], create = navBar[1], logOut = navBar[2], logIn = navBar[3], reg = navBar[4];

const views = [...document.querySelectorAll('div.container')];
const homeView = views[0], regView = views[1],loginView = views[2], dashView = views[3]