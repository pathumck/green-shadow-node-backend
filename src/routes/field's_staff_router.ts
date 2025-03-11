import { Router } from "express";
import { createFieldStaff } from "../controller/field's_staff_controller";
const fieldStaffRouter = Router();

fieldStaffRouter.post("/", createFieldStaff);

export default fieldStaffRouter;
