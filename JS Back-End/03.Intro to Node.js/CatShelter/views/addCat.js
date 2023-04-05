const head = require('../head.js');

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
        <h1>Cat Shelter</h1>
    </header>
    <main>
        <form action="#" method="" class="cat-form" enctype="multipart/form-data">
            <h2>Add Cat</h2>
            <label for="name">Name</label>
            <input name="name" type="text" id="name">
            <label for="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label for="image">Image</label>
            <input name="upload" type="file" id="image">
            <label for="group">Breed</label>
            <select name="breed" id="group">
                <option value="Fluffy Cat">Fluffy Cat</option>
				<option value="Fluffy Cat">Fluffy Cat</option>
				<option value="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button type="submit">Add Cat</button>
        </form>
    </main>
</body>

</html>
`;