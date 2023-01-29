window.addEventListener('load', solve);

function solve() {
    // INPUT FIELDS
    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add-btn');
    addButton.type = 'button';
    addButton.addEventListener('click', createSong);

    // PANEL FOR NEW SONG
    const allHitsContainer = document.querySelector('.all-hits-container');


    function createSong(event) {

        //CHECK if input fields are filed
        if (genreInput.value !== '' && nameInput.value !== '' && authorInput.value !== '' && dateInput.value !== '') {
            //CREATING ELEMENTS     
            //div for all song info
            const hitsInfo = document.createElement('div');
            hitsInfo.className = 'hits-info';

            //image element
            const image = document.createElement('img');
            image.src = './static/img/img.png';

            //genre element
            const genre = document.createElement('h2');
            genre.textContent = `Genre: ${genreInput.value}`;

            //song name element
            const name = document.createElement('h2');
            name.textContent = `Name: ${nameInput.value}`;

            //song author element
            const author = document.createElement('h2');
            author.textContent = `Author: ${authorInput.value}`;

            //date element
            const date = document.createElement('h3');
            date.textContent = `Date: ${dateInput.value}`;


            // create buttons
            const saveButton = document.createElement('button');
            saveButton.addEventListener('click', saveSong);
            saveButton.className = 'save-btn';
            saveButton.textContent = 'Save song';

            const likeButton = document.createElement('button');
            likeButton.addEventListener('click', likeSong);
            likeButton.className = 'like-btn';
            likeButton.textContent = 'Like song';

            const deleteButton = document.createElement('button');
            deleteButton.addEventListener('click', deleteSong);
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';

            //appending elements to div for all info
            hitsInfo.appendChild(image);
            hitsInfo.appendChild(genre);
            hitsInfo.appendChild(name);
            hitsInfo.appendChild(author);
            hitsInfo.appendChild(date);
            hitsInfo.appendChild(saveButton);
            hitsInfo.appendChild(likeButton);
            hitsInfo.appendChild(deleteButton);

            //append to main div
            allHitsContainer.appendChild(hitsInfo);

            //clearing input fields
            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';
            addButton.value = '';

            function saveSong(event) {
                const savedSong = document.querySelector('.saved-container');
                // change parent of song info panel
                savedSong.appendChild(hitsInfo);
                //remove unneeded buttons
                saveButton.remove();
                likeButton.remove();
            }

            function likeSong(event) {
                const totalLikes = document.querySelector('#total-likes p');
                // get values of the total likes
                let likes = totalLikes.textContent.split(': ')[1];
                likes = Number(likes);
                //add count if song is liked
                likes++;
                totalLikes.textContent = `Total Likes: ${likes}`;
                //current song could be liked only once - disabling button after click
                event.target.setAttribute('disabled', '');
            }

            function deleteSong(event) {
                hitsInfo.remove();
            }
        }
    }
}