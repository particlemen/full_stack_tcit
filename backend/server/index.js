const express = require("express");
const db = require("./models")
const cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

db.sequelize.sync();
require("./routes/forumPosts")(app);

app.get("/", (_,res) => {res.json({message: "Bienvenido al backend de los posts"})})

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
});