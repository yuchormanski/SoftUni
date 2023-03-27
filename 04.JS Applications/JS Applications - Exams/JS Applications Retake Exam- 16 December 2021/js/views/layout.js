import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <!-- put content here -->
    
    <header>
            <nav>
                <a href="/">Theater</a>
                <ul>
                    <!--Only users-->
                    ${userData ?
                    html`
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/create">Create Event</a></li>
                        <li><a href="/logout">Logout</a></li>
                    `:
                    html`
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    `}
                    
                    <!--Only guest-->
                    
                </ul>
            </nav>
        </header>

        <main id="content">${content}</main>

        
        <footer>
            <div>© 2021
                <h3>JS Application</h3>
            </div>
        </footer>
`;



