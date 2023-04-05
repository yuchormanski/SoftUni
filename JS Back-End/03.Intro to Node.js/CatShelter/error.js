const head = require('./head.js');

module.exports = `
    ${head}
    <body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
    </header>
    <div class="errorDiv">
        <img src="https://img.freepik.com/premium-vector/internet-connection-problem-concept-illustration-404-found-error-page-isolated-white-background-funny-gray-cat-isolated-vector-illustrations_450656-204.jpg?w=1480" alt="Page Not Found" />
    </div>
    </body>
</html>
`;