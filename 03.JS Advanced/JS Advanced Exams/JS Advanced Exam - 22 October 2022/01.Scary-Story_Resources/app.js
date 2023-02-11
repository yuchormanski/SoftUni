window.addEventListener("load", solve);

function solve() {

  const publishBtn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  const mainElement = document.getElementById('main');
  const divArray = Array.from(document.querySelectorAll('#main div'));
  publishBtn.addEventListener('click', previewStory);

  function previewStory(e) {

    const obj = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      age: document.getElementById('age'),
      storyTitle: document.getElementById('story-title'),
      genre: document.getElementById('genre'),
      story: document.getElementById('story'),
    }

    let fName = obj.firstName.value;
    let lName = obj.lastName.value;
    let personAge = obj.age.value;
    let title = obj.storyTitle.value;
    let personGenre = obj.genre.value;
    let fullStory = obj.story.value;

    if (fName == '' ||
      lName == '' ||
      personAge == '' ||
      title == '' ||
      personGenre == '' ||
      fullStory == '') {
      return;
    }

    const li = elFactory('li', 'story-info', '');
    const article = elFactory('article', '', '');
    article.appendChild(elFactory('h4', '', `Name: ${obj.firstName.value}`));
    article.appendChild(elFactory('p', '', `Age: ${obj.age.value}`));
    article.appendChild(elFactory('p', '', `Title: ${obj.storyTitle.value}`));
    article.appendChild(elFactory('p', '', `Genre: ${obj.genre.value}`));
    article.appendChild(elFactory('p', '', fullStory));
    li.appendChild(article);

    const saveBtn = elFactory('button', 'save-btn', 'Save Story');
    const editBtn = elFactory('button', 'edit-btn', 'Edit Story');
    const deleteBtn = elFactory('button', 'delete-btn', 'Delete Story');
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    previewList.appendChild(li);
    publishBtn.disabled = true;

    Object.values(obj).forEach(el => el.value = '');

    saveBtn.addEventListener('click', () => {
      divArray.forEach(el => el.remove());
      const h1 = elFactory('h1', '', 'Your scary story is saved!');
      mainElement.appendChild(h1);
    });
    editBtn.addEventListener('click', editContent);
    deleteBtn.addEventListener('click', () => {
      publishBtn.disabled = false;
      li.remove();
    });

    function editContent() {
      publishBtn.disabled = false;
      li.remove();

      obj.firstName.value = fName;
      obj.lastName.value = lName;
      obj.age.value = personAge;
      obj.storyTitle.value = title;
      obj.genre.value = personGenre;
      obj.story.value = fullStory;

    }
  }

  function elFactory(type, className, text) {
    const element = document.createElement(type);
    if (className) { element.className = className; }
    if (text) { element.innerText = text; }
    return element;
  }
}
