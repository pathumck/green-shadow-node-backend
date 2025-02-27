import { Router } from "express";
import { createField, getAllFields, updateField } from "../controller/field_controller";

const fieldRouter = Router();

fieldRouter.post('/',createField);
fieldRouter.get('/',getAllFields)
fieldRouter.put('/:id',updateField)

export default fieldRouter
