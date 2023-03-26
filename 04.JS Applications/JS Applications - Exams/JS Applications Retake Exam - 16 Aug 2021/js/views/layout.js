import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <!-- put content here -->
    
    <header>
            <!-- Navigation -->
            <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                ${userData ? 
                html`
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>`: html `
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
            </nav>
        </header>

        <main id="main-content">
            ${content}
        </main>
`;



