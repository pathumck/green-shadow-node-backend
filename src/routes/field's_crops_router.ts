import { Router } from "express";
import { createFieldCrop, deleteFieldCrop, getAllFieldCrops } from "../controller/field's_crops_controller";

const fieldCropsRouter = Router();

fieldCropsRouter.post("/", createFieldCrop);
fieldCropsRouter.get("/", getAllFieldCrops);
fieldCropsRouter.delete("/:fieldId/:cropId", deleteFieldCrop);

export default fieldCropsRouter;
