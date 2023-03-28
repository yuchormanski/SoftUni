import { html } from '../../node_modules/lit-html/lit-html.js';

const notificationTemplate = () => html`
        <section id="notifications">
            lknlvcnj lfjgv
            <div id="errorBox" class="notification">
                <span>MESSAGE</span>
            </div>
        </section>
`;

export function notificationAction(ctx){
    ctx.render(notificationTemplate());
    alert('')
}