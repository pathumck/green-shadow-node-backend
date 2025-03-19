import { RequestHandler, Router } from "express";
import {
  createFieldCrop,
  deleteFieldCrop,
  getAllFieldCrops,
} from "../controller/field's_crops_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const fieldCropsRouter = Router();

fieldCropsRouter.post(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  createFieldCrop
);
fieldCropsRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllFieldCrops
);
fieldCropsRouter.delete(
  "/:fieldId/:cropId",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  deleteFieldCrop
);

export default fieldCropsRouter;
