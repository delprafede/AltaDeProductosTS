import express from "express"
import { escuchando } from "./controllers/auth.controller"


const app = express()
const port = 5050
app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`)

})
app.use(escuchando)