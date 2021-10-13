import { getPosts, getUsers } from './functions/api.js';
import { users, posts } from './storage/storage.js';
import Card from './classes/Card.js';

const blog = document.querySelector('.blog');

getPosts().then(getUsers()).then(() => {
  for (const [id, { title, body, userId } ] of Object.entries(posts)) {
    blog.append(new Card(title, body, userId, id).render());
  }
});