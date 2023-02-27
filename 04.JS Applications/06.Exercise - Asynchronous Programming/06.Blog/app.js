function attachEvents() {
    const posts = document.getElementById('posts');
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const comments = document.getElementById('post-comments');
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'
    let currentID = null;
    loadBtn.addEventListener('click', loadPosts);

    function loadPosts() {
        fetch(postsURL)
            .then(res => res.json())
            .then(data => {
                viewBtn.addEventListener('click', viewSelected);
                posts.innerHTML = '';
                const toArray = Object.entries(data);
                toArray.forEach(obj => {
                    const { body, id, title } = obj[1];
                    // creating elements
                    const option = creator('option', 'value', obj[0], title);
                    posts.appendChild(option);
                });

                function viewSelected() {
                    fetch(`${postsURL}/${posts.value}`)
                        .then(res => res.json())
                        .then(currentData => {
                            postTitle.textContent = currentData.title;
                            postBody.textContent = currentData.body;
                            currentID = currentData.id;
                        })
                        .catch(error => console.error(error))

                    fetch(commentsURL)
                        .then(resComments => resComments.json())
                        .then(all => {
                            comments.innerHTML = '';
                            const allComments = Object.values(all);
                            const postComments = allComments.filter(obj => obj.postId === currentID);
                            postComments.forEach(comment => {
                                const li = creator('li', 'id', currentID, `${comment.text}`);
                                comments.appendChild(li);
                            });
                        })
                        .catch(error => console.error(error))
                }
            })
            .catch(error => console.error(error))
    }

    function creator(elType, elAttribute, attrValue, elementText) {
        const element = document.createElement(elType);
        elAttribute ? element[elAttribute] = attrValue : null;
        elementText ? element.innerText = elementText : null;
        return element;
    }
}

attachEvents();