import express from "express"
import { PORT } from "./config"
import { db } from "./config/db"
import colors from "colors"
import cors, { CorsOptions } from "cors"
import morgan from "morgan"
import productsRouters from "./router/products.routes"


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

//Permitir el acceso a la api desde cualquier origen
// const corsOptions: CorsOptions = {
//     origin: function (origin, callback) {
//         if (origin === "http://localhost:5173") {
//             callback(null, true)
//         } else {
//             callback(new Error("No permitido por CORS"))
//         }
//     }
// }

app.use(cors(
    {
        origin: "*", // Permitir cualquier origen
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Métodos permitidos
        allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
        credentials: true, // Permitir credenciales
    }
))//para permitir el acceso a la api desde cualquier origen


// app.use(cors(corsOptions))//para permitir el acceso a la api desde cualquier origen
//Middleware para parsear el body de las peticiones a json
app.use(express.json())
app.use(morgan("dev"))//para ver las peticiones en la consola

app.use("/api", productsRouters)
app.listen(PORT, () => {
    console.log(colors.cyan.bold(`escuchando en el puerto ${PORT}`))

})
