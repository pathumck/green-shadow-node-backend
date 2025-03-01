import { Router } from "express";
import { createStaff, deleteStaff, getAllStaff, updateStaff } from "../controller/staff_controller";

const staffRouter = Router();

staffRouter.post("/",createStaff)
staffRouter.get("/",getAllStaff)
staffRouter.put("/:id",updateStaff)
staffRouter.delete("/:id",deleteStaff)

export default staffRouter