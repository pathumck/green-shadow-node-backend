import { Router } from "express";
import { createFieldStaff, getAllFieldStaff } from "../controller/field's_staff_controller";
const fieldStaffRouter = Router();

fieldStaffRouter.post("/", createFieldStaff);
fieldStaffRouter.get("/", getAllFieldStaff);

export default fieldStaffRouter;
