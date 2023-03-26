import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <!-- put content here -->
    <div class="container" id="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand text-light" href="/">Movies</a>
            <ul class="navbar-nav ml-auto">
                ${userData ? 
                    html`
                        <li class="nav-item user">
                            <a class="nav-link" id="welcome-msg">Welcome, ${userData.email}</a>
                        </li>
                        <li class="nav-item user">
                            <a class="nav-link" href="/logout">Logout</a>
                        </li>
                    `:
                    html `
                        <li class="nav-item guest">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item guest">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                    `}


            </ul>
        </nav>

        ${content}

    <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3">
            &copy; 2020
            <a href="#" class="text-dark">JS Applications</a>
        </div>
    </footer>
  </div>

`;



