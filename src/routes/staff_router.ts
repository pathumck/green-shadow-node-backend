import { RequestHandler, Router } from "express";
import { createStaff, deleteStaff, getAllStaff, updateStaff } from "../controller/staff_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const staffRouter = Router();

staffRouter.post("/", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,createStaff)
staffRouter.get("/", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, getAllStaff)
staffRouter.put("/:id", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, updateStaff)
staffRouter.delete("/:id", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, deleteStaff)

export default staffRouter