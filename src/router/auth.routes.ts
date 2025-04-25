import { Router } from "express";
import { escuchando } from "../controllers/auth.controller";

const router = Router()

router.get("/api/products", escuchando)