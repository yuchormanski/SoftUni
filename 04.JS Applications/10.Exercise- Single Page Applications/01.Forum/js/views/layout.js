import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO: Replace with actual content
export const layoutTemplate = (userData, content) => html`
    <header>
        <div class="mini-navbar-wrap">
            <div class="logo-wrap">
                <p class="logo"><span class="logo">SoftUni Forum</span></p>
            </div>
            <div class="mini-navbar">

            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </nav>
    </header>

    ${content}

    <footer>
        <p>This site is designed to be used for training purposes at SoftUni.</p>
        <p>You can find the real SoftUni forum at this link:</p>
        <p><span><a href="https://softuni.bg/forum">https://softuni.bg/forum</a></span></p>
    </footer>
`;



