import { Column, Model, Table, DataType, Default } from "sequelize-typescript";

@Table({
    tableName: "products"
})

class Products extends Model{
    @Column({
        type: DataType.STRING(100)
    })
    name: string
    
    @Column({
        type: DataType.FLOAT
    })
    price: number
    
    @Default(true)
    @Column({
        type: DataType.BOOLEAN
      
    })
    available: boolean

}

export default Products