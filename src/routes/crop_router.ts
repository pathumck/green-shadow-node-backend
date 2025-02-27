import { Router } from "express";
import { createCrop, getAllCrops } from "../controller/crop_controller";

const cropRouter = Router();

cropRouter.post("/",createCrop)
cropRouter.get("/",getAllCrops)

export default cropRouter