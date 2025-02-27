import { Router } from "express";
import { createCrop, getAllCrops, updateCrop } from "../controller/crop_controller";

const cropRouter = Router();

cropRouter.post("/",createCrop)
cropRouter.get("/",getAllCrops)
cropRouter.put("/:id",updateCrop)

export default cropRouter