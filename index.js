const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// invocando conexao
const conn = require("./db/conn").run;

// invocando Rotas
const productsRoutes = require('./routes/productsRoutes')

// conf Handlebaras - template
//app.engine("handlebars", exphbs()); //"express-handlebars": "^5.3.3",
app.engine("handlebars", exphbs.engine()); // "express-handlebars": "^6.0.3",
app.set("view engine", "handlebars");

// read body
app.use(
    express.urlencoded({
        extended: true
    })
)

// list
app.use(express.json())
app.use(express.static('public'))

// pg inicial
app.use('/products', productsRoutes)



app.listen(3000)