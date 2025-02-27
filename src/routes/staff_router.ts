import { Router } from "express";
import { createStaff, getAllStaff, updateStaff } from "../controller/staff_controller";

const staffRouter = Router();

staffRouter.post("/",createStaff)
staffRouter.get("/",getAllStaff)
staffRouter.put("/:id",updateStaff)

export default staffRouter