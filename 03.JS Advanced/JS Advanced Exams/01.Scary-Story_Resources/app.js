window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const userStory = document.getElementById('story');
  const btn = document.getElementById('form-btn');

  const previewList = document.getElementById('preview-list');
  previewList.addEventListener('click', editSaveDelete);

  btn.addEventListener('click', preview);

  function preview(event) {

    // if (firstName.value !== '' && firstName.value !== ' ' &&
    //   lastName.value !== '' && lastName.value !== ' ' &&
    //   age.value !== '' && age.value !== ' ' &&
    //   storyTitle.value !== '' && storyTitle.value !== ' ' &&
    //   userStory.value !== '' && userStory.value !== ' ') {

    // creatin user object
    const obj = {
      name: `${firstName.value} ${lastName.value}`,
      age: age.value,
      storyTitle: storyTitle.value,
      genre: genre.value,
      story: userStory.textContent
    }

    //clear input fields
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    userStory.value = '';


    //creating elements
    const newLi = document.createElement('li');
    newLi.className = "story-info";

    
    const newArticle = document.createElement('article');
    
    const headerName = document.createElement('h4');
    headerName.textContent = `Name: ${obj.name}`;
    const agePar = document.createElement('p')
    agePar.textContent = `Name: ${obj.age}`;
    const titlePar = document.createElement('p');
    titlePar.textContent = `Name: ${obj.storyTitle}`;
    const genrePar = document.createElement('p');
    genrePar.textContent = `Name: ${obj.genre}`;
    const storyPar = document.createElement('p');
    storyPar.textContent = `Name: ${obj.story}`;
    
    newArticle.append(headerName, agePar, titlePar, genrePar, storyPar);
    
    
    //redaction buttons
    
    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save story';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit story';
    
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete story';
    
    newLi.append(newArticle, saveBtn, editBtn, delBtn);
    
    previewList.append(newLi);

    //disabling publish btn
    btn.setAttribute('disabled','');
    
    
    // }

  }

  function editSaveDelete(event){
    if(event.target.tagName === 'BUTTON'){
      btn.removeAttribute('disabled','');
    }
  }
}
