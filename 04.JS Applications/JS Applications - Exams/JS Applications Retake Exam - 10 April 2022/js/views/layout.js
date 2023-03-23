import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`

    <!-- put content here -->
    <header>
        <!-- Navigation -->
        <h1><a href="/">Orphelp</a></h1>
    
        <nav>
            <a href="/">Dashboard</a>
            ${userData ? html`
            <div id="user">
                <a href="/my-posts">My Posts</a>
                <a href="create">Create Post</a>
                <a href="/logout">Logout</a>
            </div>
            `: html`
            <div id="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            `}
        </nav>
    </header>
    
    <!-- Main Content -->
    <main id="main-content">
        ${content}
    </main>
`;



