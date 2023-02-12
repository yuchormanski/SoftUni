function solve() {
   //Todo: Write your code here!
   const authorInput = document.getElementById('creator');
   const titleInput = document.getElementById('title');
   const categoryInput = document.getElementById('category');
   const contentInput = document.getElementById('content');
   const createBtn = document.querySelector('form button');
   createBtn.addEventListener('click', newArticle);

   const postsPanel = document.querySelector('main section');
   const archiveSection = document.querySelector('.archive-section ol');

   const archArray = [];

   function newArticle(e) {
      e.preventDefault();


      const author = authorInput.value;
      const title = titleInput.value;
      const category = categoryInput.value;
      const content = contentInput.value;

      const article = creator('article', '', '');
      article.appendChild(creator('h1', '', title));
      
      const pCat = creator('p',  '', 'Category:');
      pCat.appendChild(creator('strong', '', category));
      const pCreator = creator('p', '', 'Creator:');
      pCreator.appendChild(creator('strong', '', author));
      const pCont = creator('p', '', content);
      const div = creator('div', '', '');
      div.className = 'buttons';
      const delBtn = creator('button', '', 'Delete');
      delBtn.classList = 'btn delete';
      const archBtn = creator('button', '', 'Archive');
      archBtn.classList = 'btn archive';
      div.appendChild(delBtn);
      div.appendChild(archBtn);
      article.appendChild(pCat);
      article.appendChild(pCreator);
      article.appendChild(pCont);
      article.appendChild(div);
      postsPanel.appendChild(article);

      delBtn.addEventListener('click', delPost);
      archBtn.addEventListener('click', archPost);

      authorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

      function delPost() {
         article.remove();
      }
      function archPost() {

         article.remove();
         console.log(archiveSection);
         Array.from(archiveSection.childNodes).forEach(ch => ch.remove());
         console.log(archiveSection);
         archArray.push(title);
         console.log(archArray);
         archArray.sort((a, b) => a.localeCompare(b));

         for (let text of archArray) {
            const pArt = creator('li', '', text);
            archiveSection.appendChild(pArt);
         }
      }

   }

   function creator(type, attrValue, textCont) {
      const element = document.createElement(type);
      if (attrValue !== '') {
         element.class = attrValue;
      }
      if (textCont) {
         element.innerText = textCont;
      }
      return element;
   }
}
