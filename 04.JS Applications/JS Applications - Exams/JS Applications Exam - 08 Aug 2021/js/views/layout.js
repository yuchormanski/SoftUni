import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <header id="site-header">
            <!-- Navigation -->
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    ${userData ? html`
                    <div id="user">
                        <span>Welcome, ${userData.email}</span>
                        <a class="button" href="/myBooks">My Books</a>
                        <a class="button" href="/add">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>`: 
                    html`
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`}
                </section>
            </nav>
        </header>
        <!-- Main Content -->
        <main id="site-content">${content}</main>
`;



