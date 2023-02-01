import express from "express"
const router = express.Router()
import path from "path"
import fs from "fs/promises"
import { readFile } from "fs"
import xlsx from "xlsx"
import buyRequest from "../dataModel/buyRequest.js"
import { CreateProduct, DeleteProduct, GetAllProducts, GetProduct, UpDateProduct } from "../controller/buyRequest.js"



/* router.get("/", async(req, res, next) => {
  res.json("from buyreq")
}) */



router.post("/",CreateProduct)
router.put("/:id", UpDateProduct)
router.get("/:id", GetProduct)
router.get("/", GetAllProducts)
router.delete("/:id", DeleteProduct)







export default router