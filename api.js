var express = require('express');
const req = require('express/lib/request');
//const db = require('db');
var app = express();
var morgan = require("morgan");

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
//middlewares
app.use(morgan('dev'));//es pa que me de informacióon de lo que me piden
app.use(express.urlencoded({extended:false})); //con esto entiendo peticiones ligeras en el server
app.use(express.json());//con eso puedo interpretar json

//inicializar el servidor
app.listen(3000, ()=>{
    console.log(`Server on port ${3000}`);
});

//console.log(db.hermana());

//peticiones
app.use(require('./routes/index'));