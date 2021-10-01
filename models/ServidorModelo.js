const express = require('express')
class ServidorModelo{
    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido "+process.env.PUERTO)
          })
    }
    enrutarPeticiones(){
        this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('estoy procesando un GET() buscar')
          })
          
          this.app.post('/avanzada/v1/jugadores', function (req, res) {
            res.send('estoy procesando un post() insertando')
          })
          
          this.app.put('/avanzada/v1/jugadores', function (req, res) {
            res.send('estoy procesando un put() editando')
          })
          
          this.app.delete('/avanzada/v1/jugadores', function (req, res) {
            res.send('procesando un delete() borrando')
          })
           
    }
    despertarBaseDeDatos(){


    }
}

module.exports=ServidorModelo