import { Router } from "express";
import { createField } from "../controller/field_controller";

const fieldRouter = Router();

fieldRouter.post('/',createField);

export default fieldRouter
