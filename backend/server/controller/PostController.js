const db = require("../models");
const postsDB = db.posts

exports.createPost = async (req,res) => {
  let newPost = {
    name: req.body.name,
    description: req.body.description
  };

  postsDB.create(newPost)
  .then( data => {
    res.send(data);
  })
  .catch( err => {
    res.sendStatus(500).send({
      message:
        err.message || "Ocurrio un error al registrar el post."
    });
  })
};


exports.deletePost = async (req,res) => {

  postsDB.destroy({
    where: {
      id: req.body.id
    }
  })
  .then( _ => {
    res.send({
      success: true 
    });
  })
  .catch( err => {
    res.sendStatus(500).send({
      message:
        err.message || "Ocurrio un error al eliminar el post."
    });
  });
}

exports.getAllPosts = async (_,res) => {
  postsDB.findAll({
    attributes: [
      "id",
      "name",
      "description"
    ],
    order: ['id']
  })
  .then( data => {
    res.send(data);
  })
  .catch( err => {
    res.sendStatus(500).send({
      message:
        err.message || "Ocurrio un error al obtener los posts."
    });
  });
}