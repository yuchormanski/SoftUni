import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <!-- put content here -->
    
    <header>
        <nav>
            <a class="active" href="/">Home</a>
            <a href="/all">All Listings</a>
            <a href="/search">By Year</a>
            ${userData ? html`
                <div id="profile">
                    <a>Welcome ${userData.username}</a>
                    <a href="/myListings">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                </div>
            `:html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            `}
        </nav>
    </header>
    
    <main id="site-content">
    
        <!-- Main Content -->
        ${content}
    </main>
    
    <footer>
        <p>&copy; All rights reserved</p>
    </footer>
`;



