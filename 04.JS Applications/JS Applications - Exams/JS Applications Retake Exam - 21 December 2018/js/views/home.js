import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
        <section id="homeView">
            <!-- <img class="m-auto background-image" width="100%" src="http://gomera24.com/wp-content/uploads/2017/06/566771.jpg"> -->
            <img class="m-auto background-image" width="100%" src="https://wallpaperaccess.com/full/1373261.png">
        </section>
`;

export function homePage(ctx){

    ctx.render(homeTemplate());
    console.log();
}