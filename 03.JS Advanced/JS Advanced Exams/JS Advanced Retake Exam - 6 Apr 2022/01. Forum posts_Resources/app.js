window.addEventListener("load", solve);

function solve() {

  //create class for keeping post info
  class NewPost {
    constructor(title, category, text) {
      this.title = title;
      this.category = category;
      this.text = text;
    }
  }

  //get reference to needed elements
  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');
  const reviewPanel = document.getElementById('review-list');
  const approvedPostsPanel = document.getElementById('published-list');

  // attach listeners
  publishBtn.addEventListener('click', postReview);
  clearBtn.addEventListener('click', deletePosts);

  function postReview(e) {
    // IF current element is in <form> tag stop bubbling on event
    e.preventDefault();

    // get values
    let theTitle = document.getElementById('post-title');
    let theCat = document.getElementById('post-category');
    let theCont = document.getElementById('post-content');

    // non-empty validation
    if(theTitle.value === '' || theCat.value === '' || theCont.value === '') return;

    //create object from current input data
    const post = new NewPost(theTitle.value, theCat.value, theCont.value);

    //create HTML elements with factory function
    const li = creator('li', { classList: ['rpost'] }, '');
    const article = creator('article', '', '');
    article.appendChild(creator('h4', '', `${post.title}`));
    article.appendChild(creator('p', { title: 'This is P tag' }, `Category: ${post.category}`));
    article.appendChild(creator('p', '', `Content: ${post.text}`));
    li.appendChild(article);

    const editBtn = creator('button', { classList: ['action-btn', 'edit'] }, 'Edit');
    const approveBtn = creator('button', { classList: ['action-btn', 'approve'] }, 'Approve');

    li.appendChild(approveBtn);
    li.appendChild(editBtn);
    reviewPanel.appendChild(li);

    //atach listeners
    editBtn.addEventListener('click', editInfo);
    approveBtn.addEventListener('click', postApproved);

    //clear input fields
    theTitle.value = '';
    theCat.value = '';
    theCont.value = '';

    // edit button actions
    function editInfo(e) {
      theTitle.value = post.title;
      theCat.value = post.category;
      theCont.value = post.text;
      li.remove()
    }

    //approve button actions
    function postApproved(e) {
      // taking post to current element
      approvedPostsPanel.appendChild(li);
      //remove buttons
      editBtn.remove();
      approveBtn.remove();
    }
  }

  //delete all posts
  function deletePosts(e) {
    // create array from childrens in current parent element
    Array.from(approvedPostsPanel.querySelectorAll('li')).forEach(li => li.remove())
  }

  //factory function
  function creator(type, prop, elText) {
    const element = document.createElement(type);

    if (prop) {
      Object.entries(prop).forEach(el => {
        if (el[0] === 'classList') {
          element[el[0]] = el[1].join(' ');
        } else {
          element[el[0]] = el[1]
        }
      })
    }
    if (elText) {
      element.innerText = elText;
    };
    return element;
  }
}
