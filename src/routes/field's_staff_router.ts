import { RequestHandler, Router } from "express";
import {
  createFieldStaff,
  deleteFieldStaff,
  getAllFieldStaff,
} from "../controller/field's_staff_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";
const fieldStaffRouter = Router();

fieldStaffRouter.post(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  createFieldStaff
);
fieldStaffRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllFieldStaff
);
fieldStaffRouter.delete(
  "/:fieldId/:staffId",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  deleteFieldStaff
);

export default fieldStaffRouter;
