import { Router } from "express";
import { createCrop, deleteCrop, getAllCrops, updateCrop } from "../controller/crop_controller";

const cropRouter = Router();

cropRouter.post("/",createCrop)
cropRouter.get("/",getAllCrops)
cropRouter.put("/:id",updateCrop)
cropRouter.delete("/:id",deleteCrop)

export default cropRouter