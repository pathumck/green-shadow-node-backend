import { Router } from "express";
import {
  createField,
  deleteField,
  getAllFields,
  updateField,
} from "../controller/field_controller";

const fieldRouter = Router();

fieldRouter.post("/", createField);
fieldRouter.get("/", getAllFields);
fieldRouter.put("/:id", updateField);
fieldRouter.delete("/:id", deleteField);

export default fieldRouter;
