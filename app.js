//configurando variebles de entorno
require('dotenv').config()

//importar servidor modelo
const ServidorModelo=require("./models/ServidorModelo.js")

 //crear un objeto de la clase servidormodelo
const servidorFPC=new ServidorModelo()

//despertar servidor
servidorFPC.despertarServidor()

