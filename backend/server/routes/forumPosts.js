const postController = require("../controller/PostController")

module.exports = (app) => {
  var router = require("express").Router();

  router.get('/getAllPosts', postController.getAllPosts);
  router.post('/newPost', postController.createPost);
  router.post('/deletePost', postController.deletePost)

  app.use("/posts/", router);
}