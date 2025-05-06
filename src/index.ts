import express from "express"

import { PORT } from "./config"
import { db } from "./config/db"
import colors from "colors"
import productsRouters from "../src/router/products.routes"


//Connect data base

const ConnectDB = async () => {
    try {
        await db.authenticate()//autenticar la base de datos
        db.sync()//para ir creando las tablas en la db
        console.log(colors.green.bold("coneccion existosa a la data base"))
    } catch (error) {
        console.log(error)
        console.log(
            colors.bgRed.white("hubo un erropr al conectar con la DATA BASE"))
    }
}
ConnectDB()

const app = express()
app.use(express.json())
app.use("/api", productsRouters)
app.listen(PORT, () => {
    console.log(colors.cyan.bold(`escuchando en el puerto ${PORT}`))

})
