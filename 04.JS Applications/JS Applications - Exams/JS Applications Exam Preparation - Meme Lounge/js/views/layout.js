import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <!-- put content here -->
    
    <nav>
            <a href="/all">All Memes</a>
            ${userData ? 
            html`
                <!-- Logged users -->
                <div class="user">
                    <a href="/create">Create Meme</a>
                    <div class="profile">
                        <span>Welcome, ${userData.username}</span>
                        <a href="/profile">My Profile</a>
                        <a href="logout">Logout</a>
                    </div>
                </div>
            `:
            html`
                <!-- Guest users -->
                <div class="guest">
                    <div class="profile">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>
                    <a class="active" href="/">Home Page</a>
                </div>
            `}


        </nav>

        <!-- Main Content -->
        <main>
            ${content}
        </main>

        <footer class="footer">
            <p>Created by SoftUni Delivery Team</p>
        </footer>
`;



