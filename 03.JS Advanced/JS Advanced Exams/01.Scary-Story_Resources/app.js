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


  //creating elements
  const newLi = document.createElement('li');
  newLi.className = "story-info";
  const newArticle = document.createElement('article');
  const headerName = document.createElement('h4');
  const agePar = document.createElement('p')
  const titlePar = document.createElement('p');
  const genrePar = document.createElement('p');
  const storyPar = document.createElement('p');
  
  //redaction buttons

  const saveBtn = document.createElement('button');
  saveBtn.className = 'save-btn';
  saveBtn.textContent = 'Save story';
  saveBtn.setAttribute('disabled', '');

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit story';
  
  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.textContent = 'Delete story';
  
  


  btn.addEventListener('click', preview);

  function preview(event) {

    if (firstName.value !== '' && firstName.value !== ' ' &&
      lastName.value !== '' && lastName.value !== ' ' &&
      age.value !== '' && age.value !== ' ' &&
      storyTitle.value !== '' && storyTitle.value !== ' ' &&
      userStory.value !== '' && userStory.value !== ' ') {

      // creating user object
      const obj = {
        userFirstName: firstName.value,
        userLastName: lastName.value,
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

      headerName.textContent = `Name: ${obj.userFirstName} ${obj.userLastName}`;
      agePar.textContent = `Age: ${obj.age}`;
      titlePar.textContent = `Title: ${obj.storyTitle}`;
      genrePar.textContent = `Genre: ${obj.genre}`;
      storyPar.textContent = `${obj.story}`;
      newArticle.append(headerName, agePar, titlePar, genrePar, storyPar);


      //disabling publish btn
      btn.setAttribute('disabled', '');
    }
    newLi.append(newArticle, saveBtn, editBtn, delBtn);
    previewList.append(newLi);

        
    liElement = document.querySelector('li.story-info');

    liElement.addEventListener('click', (e) =>{
      const liName =  liElement.querySelector('h4');
      const info =  liElement.querySelectorAll('p');
      let butArray = Array.from(liElement.querySelectorAll('button'));
      console.log(liElement);
      if (e.target.tagName === 'BUTTON') {
        btn.removeAttribute('disabled', '');
      }
    
    
      if (e.target === butArray[1]) {
        // let [firstN, lastN] = headerName.textContent.split('Name: ');
        firstName.value = liName.textContent.split('Name: ');
        
        // lastName.value = obj.userLastName;
        // age.value = obj.age;
        // storyTitle.value = obj.storyTitle;
        // userStory.value = obj.story;
        e.target.setAttribute('disabled', '')
      }
    });
  }
}
