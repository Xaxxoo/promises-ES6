const posts = [
    { title: 'first post', body: 'this is the first post' },
    { title: 'second post', body: 'this is the second post' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post)
      const error = false;
      if (!error) {
         resolve();
      } else {
        console.log('Something Went Wrong')
      }
    }, 3000)
  })
}

  

function getPosts() {
  setTimeout(function () {
    console.log(posts)
  }, 1000)
}

createPost({ title: 'third post', body: 'this is the third post' }).then(getPosts);
