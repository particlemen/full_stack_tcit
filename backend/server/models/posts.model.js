module.exports = (sequelize, dataTypes) => {
  return sequelize.define("forumPosts", {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false,
    }
  });
}