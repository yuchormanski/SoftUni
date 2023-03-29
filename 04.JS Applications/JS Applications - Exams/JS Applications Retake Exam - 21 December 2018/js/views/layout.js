import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/allSongs">All Songs</a>
                    </li>
                    ${userData ? html`
                    <li class="nav-item">
                        <a class="nav-link " href="/mySongs">My Songs</a>
                    </li>`:null}
                    
                </ul>

                ${userData ? 
                html`
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Welcome, ${userData.email}!</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
                `: null}
                ${!userData ?
                html`
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/register">Register</a>
                    </li>
                </ul>
                `:null}
                

                

            </div>
        </nav>

        ${content}

        <footer class="card-footer text-muted d-flex justify-content-center">
            &copy; SoftUni JS Core Apps Exams
        </footer>
`;



