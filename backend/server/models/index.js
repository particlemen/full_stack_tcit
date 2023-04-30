const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL)

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize
}

db.posts = require("./posts.model")(sequelize, Sequelize);

module.exports = db;