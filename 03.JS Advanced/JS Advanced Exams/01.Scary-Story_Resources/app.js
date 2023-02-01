window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const userStory = document.getElementById('story');
  const btn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list'); //ul
  btn.addEventListener('click', getInfo);

  //creating elements

  const liElement = document.createElement('li');
  liElement.className = 'story-info';

  const article = document.createElement('article');
  const headerH4 = document.createElement('h4');
  headerH4.textContent = `Name: `
  const agePar = document.createElement('p');
  agePar.textContent = `Age: `
  const titlePar = document.createElement('p');
  titlePar.textContent = `Title: `
  const genrePar = document.createElement('p');
  genrePar.textContent = `Genre: `;
  const storyPar = document.createElement('p');

  // article.append(headerH4, agePar, titlePar, genrePar, storyPar)
  article.appendChild(headerH4);
  article.appendChild(agePar)
  article.appendChild(titlePar)
  article.appendChild(genrePar)
  article.appendChild(storyPar)

  //create buttons

  const saveBtn = document.createElement('button');
  saveBtn.className = 'save-btn';
  saveBtn.textContent = 'Save story'

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit story'

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'delete story'

  // liElement.append(article, saveBtn, editBtn, deleteBtn);
  liElement.appendChild(article);
  liElement.appendChild(saveBtn);
  liElement.appendChild(editBtn);
  liElement.appendChild(deleteBtn);



  function getInfo() {
    headerH4.textContent = `Name: ${firstName.value} ${lastName.value}`
    agePar.textContent = `Age: ${age.value}`
    titlePar.textContent = `Title: ${storyTitle.value}`
    genrePar.textContent = `Genre: ${genre.value}`;
    storyPar.textContent = userStory.textContent;



    if (firstName.value !== '' && firstName.value !== ' ' &&
      lastName.value !== '' && lastName.value !== ' ' &&
      age.value !== '' && age.value !== ' ' &&
      storyTitle.value !== '' && storyTitle.value !== ' ' &&
      userStory.textContent !== '' && userStory.textContent !== ' ') {

      previewList.appendChild(liElement);
      btn.setAttribute('disabled', '');

      //clearing inputs

      firstName.value = '';
      lastName.value = '';
      age.value = '';
      storyTitle.value = '';
      userStory.textContent = '';

      liElement.addEventListener('click', saveEditDel);

      function saveEditDel(event) {
        const buttonArray = Array.from(liElement.querySelectorAll('button'));

        if (event.target === buttonArray[0]) {
          const main = document.getElementById('main');
          const formWrap = document.querySelector('.form-wrapper');
          const sideWrap = document.getElementById('side-wrapper');
          main.removeChild(formWrap);
          main.removeChild(sideWrap);

          const lastText = document.createElement('h1');
          lastText.textContent = 'Your scary story is saved!';

          main.appendChild(lastText);

        }
        else if (event.target === buttonArray[1]) {

          let [, firstLast] = headerH4.textContent.split('Name: ')
          firstName.value = firstLast.split(' ')[0];
          lastName.value = firstLast.split(' ')[1];
          age.value = agePar.textContent.split('Age: ')[1];
          storyTitle.value = titlePar.textContent.split('Title: ')[1];
          userStory.textContent = storyPar.textContent;
          liElement.remove();
        }
        else if (event.target === buttonArray[2]) {
          liElement.remove();
        }
        btn.removeAttribute('disabled', '');
      }
    }
  }
}





