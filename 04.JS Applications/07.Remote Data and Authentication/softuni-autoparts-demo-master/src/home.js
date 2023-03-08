const homeSection = document.getElementById('home');

export function showHome() {
    const email = localStorage.getItem('email');
    if (email != null) {
        homeSection.querySelector('p').textContent = `Welcome back, ${email}!`;
    } else {
        homeSection.querySelector('p').textContent = 'Welcome to our site';
    }

    document.querySelector('main').replaceChildren(homeSection);
}