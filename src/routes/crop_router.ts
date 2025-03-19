import { RequestHandler, Router } from "express";
import {
  createCrop,
  deleteCrop,
  getAllCrops,
  updateCrop,
} from "../controller/crop_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const cropRouter = Router();

cropRouter.post(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  createCrop
);
cropRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllCrops
);
cropRouter.put(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  updateCrop
);
cropRouter.delete(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  deleteCrop
);

export default cropRouter;
