import { posts, users } from '../storage/storage.js';

async function getPosts() {
  const response = await fetch('https://ajax.test-danit.com/api/json/posts').then(resp => resp.json()).then(json => json);
  response.forEach(post => posts[post.id] = post);
}

async function getUsers() {
  const response = await fetch('https://ajax.test-danit.com/api/json/users').then(resp => resp.json()).then(json => json);
  response.forEach(user => users[user.id] = { 
    isValid: Boolean(Math.round(Math.random())),
    ...user
  });
}

async function deletePost(pid) {
  return await fetch(`https://ajax.test-danit.com/api/json/posts/${pid}`, {
    method: 'DELETE'
  });
}

export { getPosts, getUsers, deletePost };