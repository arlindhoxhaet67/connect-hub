/* advanced_program.js */

// This program demonstrates an advanced implementation of a social media platform
// It includes features like user registration, creating posts, commenting on posts, and user interactions

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.comments = [];
  }

  createPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);
    return post;
  }

  createComment(post, content) {
    const comment = new Comment(content, this);
    post.addComment(comment);
    this.comments.push(comment);
    return comment;
  }

  likePost(post) {
    post.addLike(this);
  }

  unlikePost(post) {
    post.removeLike(this);
  }
}

class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
    this.likes = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addLike(user) {
    this.likes.push(user);
  }

  removeLike(user) {
    const index = this.likes.indexOf(user);
    if (index > -1) {
      this.likes.splice(index, 1);
    }
  }
}

class Comment {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

// Demo
const john = new User("John", "john@example.com", "password");
const mary = new User("Mary", "mary@example.com", "password");

const post1 = john.createPost("First post", "Hello world!");
const post2 = mary.createPost("Second post", "I love coding!");

john.createComment(post2, "Great post, Mary!");
mary.createComment(post1, "Thanks, John!");

john.likePost(post2);

console.log(post1);
console.log(post2);