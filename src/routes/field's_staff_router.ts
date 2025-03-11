import { Router } from "express";
import { createFieldStaff, deleteFieldStaff, getAllFieldStaff } from "../controller/field's_staff_controller";
const fieldStaffRouter = Router();

fieldStaffRouter.post("/", createFieldStaff);
fieldStaffRouter.get("/", getAllFieldStaff);
fieldStaffRouter.delete("/:fieldId/:staffId", deleteFieldStaff);

export default fieldStaffRouter;
