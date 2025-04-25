import express from "express"
import { escuchando } from "./controllers/auth.controller"
import { db } from "./config/db"


//Connect data base

const ConnectDB = async ()=> {
    try {
       await db.authenticate()//autenticar la base de datos
        db.sync()//para ir creando las tablas en la db
        console.log("coneccion existosa a la data base")
    } catch (error) {
        console.log(error)
        console.log("hubo un erropr al conectar con la DATA BASE")
    }
}
ConnectDB()

const app = express()
const port = 5050
app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`)

})
app.use(escuchando)