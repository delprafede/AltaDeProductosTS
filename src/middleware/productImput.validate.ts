import { check, param } from "express-validator"
import { Request, Response, NextFunction } from "express"
import validateResult from "./validateResult"

export const productImputValidate = [
    check("name", "Name is required").notEmpty().isString(),
    check("price").notEmpty().isNumeric().withMessage("Price is required")
     .custom(value => value > 0).withMessage("Price must be greater than 0"),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)

    }

    // check("available", "Available is required").notEmpty().isBoolean(),
]

export const validateProductId = [
    param("id", "Id is not valid").notEmpty().isNumeric(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
]


// const { name, price, available } = req.body
// if (!name || !price || available === undefined) {
//     return res.status(400).json({
//         message: "All fields are required"
//     })
// }
// if (typeof name !== "string") {
//     return res.status(400).json({
//         message: "Name must be a string"
//     })
// }
// if (typeof price !== "number") {
//     return res.status(400).json({
//         message: "Price must be a number"
//     })
// }
// if (typeof available !== "boolean") {
//     return res.status(400).json({
//         message: "Available must be a boolean"
//     })
// }
// next()

