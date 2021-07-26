const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
const index = require("./routes/index")
const carros = require("./routes/carro-route")

app.use("/", index);
app.use("/carros", carros);
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

//serve
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 