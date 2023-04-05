const head = require('../head.js');

module.exports = (cat) => `
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
            <h1>Cat Shelter</h1>
        </header>
        <main>
            <form action="#" method="" class="cat-form" enctype="multipart/form-data">
                <h2>Edit Cat</h2>
                <label for="name">Name</label>
                <input type="text" id="name" value="${cat.name}">
                <label for="description">Description</label>
                <textarea
                    id="description">${cat.description}</textarea>
                <label for="image">Image</label>
                <input type="file" id="image">
                <label for="group">Breed</label>
                <select id="group">
                    <option value="Fluffy Cat">${cat.breed}</option>
                </select>
                <button>Edit Cat</button>
            </form>
        </main>
    </body>

    </html>
`;