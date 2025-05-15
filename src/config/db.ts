
import { Sequelize } from "sequelize-typescript";
import { DATABASAE_URL } from "../config";


export const db =  new Sequelize(DATABASAE_URL, {
    models: [__dirname + "/../models/**/*" ]
})