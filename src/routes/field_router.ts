import { RequestHandler, Router } from "express";
import {
  createField,
  deleteField,
  getAllFields,
  updateField,
} from "../controller/field_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const fieldRouter = Router();

fieldRouter.post(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  createField
);
fieldRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllFields
);
fieldRouter.put(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  updateField
);
fieldRouter.delete(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  deleteField
);

export default fieldRouter;
