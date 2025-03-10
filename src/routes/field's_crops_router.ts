import { Router } from "express";
import { createFieldCrop, getAllFieldCrops } from "../controller/field's_crops_controller";

const fieldCropsRouter = Router();

fieldCropsRouter.post("/", createFieldCrop);
fieldCropsRouter.get("/", getAllFieldCrops);

export default fieldCropsRouter;
