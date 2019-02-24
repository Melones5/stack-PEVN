var express = require('express');
var router = express.Router();
var app = express();
var pg = require('pg');
var nodemailer = require('nodemailer');



//configuramos postgres con el usuario contraseña y la bd que queremos usar

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'Telnovo',
  password: '1234',
  port: 5432,
})


//Realizamos peticiones GET POST DELETE PUT

  module.exports = {
      listaclientes(req,res){
      pool.query("SELECT * FROM cliente").then(response=> {
        console.log(response.rows)
        //Muestra los resultados en forma de JSON en nuestro HTML
        res.json(response.rows);
      }).catch(error =>{
        console.log(error);
      })
    },

    addcliente(req, res){
          console.log("Peticion POST");
          pool.query("INSERT INTO cliente(dni,nombre,apellido,ciudad,direccion,telefono,mail) VALUES($1,$2,$3,$4,$5,$6,$7)",[req.body.dni,req.body.nombre,req.body.apellido,
          req.body.ciudad,req.body.direccion,req.body.telefono,req.body.mail]).then(response=> {
            console.log(response);
          }).catch((error) =>{
            console.log(error);
          });

        }


}
