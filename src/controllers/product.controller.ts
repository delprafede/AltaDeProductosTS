import { Request, Response } from "express"
import Products from "../models/Products.model"



export const createProduct = async (req: Request, res: Response) => {
    const { name, price, available } = req.body
    try {
        const newProduct = new Products({
            name,
            price,
            available
        })
        const productSave = await newProduct.save()

        res.status(200).json(
            { data: productSave }
        )
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async (req: Request, res: Response) => {


    try {
        const products = await Products.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        res.status(200).json(
            { data: products }
        )

    } catch (error) {
        console.log(error)
    }
}

export const getProductId = async (req: Request, res: Response) => {


    const { id } = req.params


    try {
        const product = await Products.findByPk(id)
        if (!product) {
            res.status(404).json({
                message: "Product not found"
            })
        }
        res.status(200).json(
            { data: product }
        )


    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params


    try {
        const product = await Products.findByPk(id)
        if (!product) {
            res.status(404).json({
                message: "Product not found"
            })
        }
        const updateProduct = await product.update(req.body)
        const productSave = await product.save()

        res.status(200).json(
            { data: productSave }
        )


    } catch (error) {
        console.log(error)
    }
}
export const updateAvailable = async (req: Request, res: Response) => {
    const { id } = req.params


    console.log(id)
    // console.log(name)

    try {
        const product = await Products.findByPk(id)
        if (!product) {
            res.status(404).json({
                message: "Product not found"
            })
        }
        product.available = !product.dataValues.available
        const availableSave = await product.save()

        res.status(200).json(
            { data: availableSave }
        )


    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const product = await Products.findByPk(id)
        if (!product) {
            res.status(404).json({
                message: "Product not found"
            })
        }
        await product.destroy()
        res.status(200).json(
            { message: "Product deleted" }
        )

    } catch (error) {
        console.log(error)
    }
}