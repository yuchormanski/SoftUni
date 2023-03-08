import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showLogin } from './login.js';
import { showDetails } from './details.js';


document.getElementById('home-link').addEventListener('click', showHome);
document.getElementById('catalog-link').addEventListener('click', showCatalog);
document.getElementById('login-link').addEventListener('click', showLogin);
document.getElementById('table').addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
        const id = event.target.dataset.id;
        showDetails(id);
    }
});

// Remove views from page
document.getElementById('views').remove();

// Start application in home view
// showHome();
showCatalog();